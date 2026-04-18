import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const JWT_SECRET = process.env.JWT_SECRET || 'smile_secret_keys_159753';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const APPOINTMENTS_FILE = path.join(process.cwd(), 'appointments.json');

// Initialize appointments file if it doesn't exist
if (!fs.existsSync(APPOINTMENTS_FILE)) {
  fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify([], null, 2));
}

const getAppointments = () => {
  try {
    const data = fs.readFileSync(APPOINTMENTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const saveAppointments = (appointments: any[]) => {
  fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify(appointments, null, 2));
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(cookieParser());

  // --- API Routes ---

  // Auth: Login
  app.post('/api/login', (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
      const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '1d' });
      res.cookie('admin_token', token, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        maxAge: 86400000 
      });
      return res.json({ success: true });
    }
    return res.status(401).json({ success: false, message: 'Invalid password' });
  });

  // Auth: Logout
  app.post('/api/logout', (req, res) => {
    res.clearCookie('admin_token');
    res.json({ success: true });
  });

  // Auth: Check status
  app.get('/api/me', (req, res) => {
    const token = req.cookies.admin_token;
    if (!token) return res.status(401).json({ authenticated: false });
    try {
      jwt.verify(token, JWT_SECRET);
      return res.json({ authenticated: true });
    } catch (err) {
      return res.status(401).json({ authenticated: false });
    }
  });

  // Public: Get availability (Booked counts per date/slot)
  app.get('/api/availability', (req, res) => {
    const appointments = getAppointments();
    const availability = appointments.reduce((acc: any, curr: any) => {
      const key = `${curr.date}_${curr.timeSlot}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    res.json(availability);
  });

  // Public: Book appointment
  app.post('/api/appointments', (req, res) => {
    const { name, phone, email, service, date, timeSlot, notes } = req.body;
    
    // Validate required fields
    if (!name || !phone || !service || !date || !timeSlot) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const appointments = getAppointments();
    
    // Check 20 appointments per hour limit
    const key = `${date}_${timeSlot}`;
    const count = appointments.filter((a: any) => a.date === date && a.timeSlot === timeSlot).length;
    
    if (count >= 20) {
      return res.status(400).json({ success: false, message: 'This slot is fully booked (max 20 reached)' });
    }

    const newAppointment = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      service,
      date,
      timeSlot,
      notes,
      createdAt: new Date().toISOString()
    };

    appointments.push(newAppointment);
    saveAppointments(appointments);
    
    res.json({ success: true, appointment: newAppointment });
  });

  // Private: Get all appointments (Admin only)
  app.get('/api/appointments', (req, res) => {
    const token = req.cookies.admin_token;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    try {
      jwt.verify(token, JWT_SECRET);
      const appointments = getAppointments();
      // Sort by date/time (newest first)
      const sorted = [...appointments].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      return res.json(sorted);
    } catch (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  });

  // Private: Delete appointment (Admin only)
  app.delete('/api/appointments/:id', (req, res) => {
    const token = req.cookies.admin_token;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    try {
      jwt.verify(token, JWT_SECRET);
      let appointments = getAppointments();
      const filtered = appointments.filter((a: any) => a.id !== req.params.id);
      saveAppointments(filtered);
      return res.json({ success: true });
    } catch (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  });

  // --- Vite / Frontend Setup ---

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
