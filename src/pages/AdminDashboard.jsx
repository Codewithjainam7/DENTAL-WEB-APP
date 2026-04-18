import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Clock, 
  Search, 
  Download, 
  Trash2, 
  LogOut, 
  LayoutDashboard,
  Filter,
  CheckCircle,
  MoreVertical,
  ExternalLink
} from 'lucide-react';
import { toast } from 'react-toastify';
import SEOHead from '../components/shared/SEOHead';

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterService, setFilterService] = useState('All');
  const navigate = useNavigate();

  const fetchAppointments = async () => {
    try {
      const res = await fetch('/api/appointments');
      if (res.status === 401) {
        navigate('/login');
        return;
      }
      const data = await res.json();
      setAppointments(data);
    } catch (err) {
      toast.error('Failed to load records');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    toast.info('Logged out');
    navigate('/login');
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this record?')) return;
    
    try {
      const res = await fetch(`/api/appointments/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setAppointments(appointments.filter(a => a.id !== id));
        toast.success('Record deleted');
      }
    } catch (err) {
      toast.error('Delete failed');
    }
  };

  const servicesList = ['All', ...new Set(appointments.map(a => a.service))];
  
  const filtered = appointments.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          a.phone.includes(searchTerm);
    const matchesService = filterService === 'All' || a.service === filterService;
    return matchesSearch && matchesService;
  });

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-warm-primary"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream selection:bg-deep-teal selection:text-white">
      <SEOHead title="Admin Dashboard" />
      
      {/* Sidebar - Desktop Only */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-deep-teal text-white p-6 hidden lg:flex flex-col">
        <div className="flex items-center space-x-3 mb-12">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
            <LayoutDashboard className="w-6 h-6 text-warm-yellow" />
          </div>
          <span className="text-xl font-heading">Dr. Smile</span>
        </div>

        <nav className="space-y-2 flex-grow">
          <button className="w-full flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-xl font-bold">
            <Users size={20} />
            <span>Appointments</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 opacity-50 hover:opacity-100 transition-all font-medium">
            <Calendar size={20} />
            <span>Availability</span>
          </button>
        </nav>

        <button 
          onClick={handleLogout}
          className="mt-auto flex items-center space-x-3 px-4 py-3 text-white/60 hover:text-white transition-all font-bold"
        >
          <LogOut size={20} />
          <span>Exit Panel</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-6 md:p-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-heading mb-2">Clinic Records</h1>
            <p className="text-muted-text">Overview of all patient bookings and consultations.</p>
          </div>
          
          <div className="flex items-center space-x-4">
             <div className="bg-white p-4 rounded-3xl shadow-sm border border-cream flex items-center space-x-4">
                <div className="text-right">
                    <p className="text-xs font-bold text-muted-text uppercase tracking-widest">Total Bookings</p>
                    <p className="text-2xl font-bold">{appointments.length}</p>
                </div>
                <div className="w-10 h-10 bg-light-teal rounded-full flex items-center justify-center">
                    <CheckCircle className="text-deep-teal" size={20} />
                </div>
             </div>
          </div>
        </header>

        {/* Filters */}
        <section className="bg-white rounded-[40px] p-6 mb-10 shadow-sm border border-cream flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text w-5 h-5" />
            <input 
              type="text"
              placeholder="Search by name or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-cream focus:ring-2 focus:ring-warm-primary outline-none transition-all"
            />
          </div>
          
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="relative w-full">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text w-4 h-4" />
                <select 
                    value={filterService}
                    onChange={(e) => setFilterService(e.target.value)}
                    className="w-full pl-10 pr-8 py-4 rounded-2xl bg-cream outline-none appearance-none font-bold text-sm"
                >
                    {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </div>
          </div>
        </section>

        {/* Data Grid */}
        <div className="bg-white rounded-[40px] shadow-sm border border-cream overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-cream/50 text-muted-text uppercase text-[10px] tracking-widest font-bold">
                  <th className="px-8 py-6">Patient</th>
                  <th className="px-8 py-6">Service</th>
                  <th className="px-8 py-6">Slot</th>
                  <th className="px-8 py-6">Booked On</th>
                  <th className="px-8 py-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream">
                <AnimatePresence>
                  {filtered.map((a) => (
                    <motion.tr 
                      key={a.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="hover:bg-light-teal/10 transition-colors group"
                    >
                      <td className="px-8 py-6">
                        <p className="font-bold text-dark-text">{a.name}</p>
                        <p className="text-sm text-muted-text">{a.phone}</p>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-warm-primary/10 text-warm-primary rounded-full text-xs font-bold">
                          {a.service}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-sm font-bold flex items-center">
                          <Calendar size={14} className="mr-2 text-muted-text" /> {a.date}
                        </p>
                        <p className="text-xs text-muted-text flex items-center mt-1">
                          <Clock size={14} className="mr-2 opacity-50" /> {a.timeSlot}
                        </p>
                      </td>
                      <td className="px-8 py-6">
                         <p className="text-xs text-muted-text">{new Date(a.createdAt).toLocaleDateString()}</p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end space-x-2">
                           <button className="p-2 hover:bg-cream rounded-lg transition-colors text-muted-text">
                             <ExternalLink size={18} />
                           </button>
                           <button 
                            onClick={() => handleDelete(a.id)}
                            className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-500"
                           >
                             <Trash2 size={18} />
                           </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
            
            {filtered.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-muted-text italic">No records found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
