import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, ArrowRight } from 'lucide-react';
import { toast } from 'react-toastify';
import SEOHead from '../components/shared/SEOHead';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      
      const data = await res.json();
      
      if (data.success) {
        toast.success('Access Granted');
        navigate('/admin');
      } else {
        toast.error(data.message || 'Invalid Credentials');
      }
    } catch (err) {
      toast.error('Connection Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-light-teal/30">
      <SEOHead title="Admin Login" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-[40px] p-10 shadow-2xl border border-cream"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-warm-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="text-warm-primary w-8 h-8" />
          </div>
          <h1 className="text-3xl font-heading mb-2">Admin Access</h1>
          <p className="text-muted-text">Please enter the master password to view clinic records.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-dark-text/40 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text w-5 h-5" />
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-cream focus:ring-2 focus:ring-warm-primary outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-5 text-lg flex items-center justify-center disabled:opacity-50"
          >
            {loading ? 'Verifying...' : (
              <>Enter Dashboard <ArrowRight className="ml-2 w-5 h-5" /></>
            )}
          </button>
        </form>
        
        <div className="mt-8 text-center">
            <p className="text-xs text-muted-text">Secure Server Session • Dr. Smile Dental Clinic</p>
        </div>
      </motion.div>
    </div>
  );
}
