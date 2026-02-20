import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', formData);
      
      // 🎉 SUCCESS ALERT
      alert(`🎉 Account created successfully!\nWelcome ${response.data.data.email} to Uber! 🚗\nRedirecting to dashboard...`);
      
      localStorage.setItem('uberToken', response.data.data.id || 'token');
      setTimeout(() => navigate('/home'), 2000);
      
    } catch (error) {
      alert(`❌ ${error.response?.data?.message || 'Signup failed! Try again.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-white p-4">
      <form onSubmit={handleSignup} className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-yellow-100">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Join Uber
          </h1>
          <p className="text-gray-600 mt-2">Create your account to book rides</p>
        </div>
        
        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-5 border-2 border-yellow-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-100 focus:border-yellow-400 bg-yellow-50 text-gray-900 placeholder-gray-500"
            required
            disabled={loading}
          />
          
          <input
            type="password"
            placeholder="Password (6+ characters)"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-5 border-2 border-yellow-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-100 focus:border-yellow-400 bg-yellow-50 text-gray-900 placeholder-gray-500"
            minLength="6"
            required
            disabled={loading}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full mt-8 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 p-5 rounded-2xl font-bold text-xl hover:from-yellow-500 hover:to-yellow-600 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? '🚗 Creating Account...' : '🚗 Create Uber Account'}
        </button>
        
        {/* 🔥 LOGIN BUTTON NEECHE */}
        <div className="mt-8 text-center border-t border-yellow-100 pt-6">
          <p className="text-gray-600 mb-4 text-sm">Already have an Uber account?</p>
          <Link 
            to="/login" 
            className="inline-block px-10 py-4 bg-white text-gray-900 border-2 border-yellow-400 rounded-2xl font-semibold text-lg hover:bg-yellow-50 hover:border-yellow-500 shadow-md hover:shadow-lg transition-all"
          >
            🔐 Sign In to Uber
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
