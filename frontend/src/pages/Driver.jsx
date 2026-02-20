// src/pages/BecomeDriver.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Driver = () => {
  const [formData, setFormData] = useState({
    car_model: '',
    car_number: '',
    license_number: '',
    phone: '',
    emergency_contact: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const token = localStorage.getItem('uberToken');
      const response = await axios.post('http://localhost:3000/api/driver/register', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      alert(`🎉 Driver registration successful!\nCar: ${formData.car_model}\nRedirecting to dashboard...`);
      localStorage.setItem('driverProfile', JSON.stringify(response.data.driver));
      setTimeout(() => navigate('/home'), 2000);
      
    } catch (error) {
      alert(`❌ ${error.response?.data?.message || 'Registration failed!'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link to="/home" className="inline-flex items-center space-x-2 text-emerald-600 font-semibold mb-8 hover:text-emerald-700">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-emerald-100">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <span className="text-4xl">🚗</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent mb-4">
              Become a Driver
            </h1>
            <p className="text-xl text-gray-600 max-w-lg mx-auto">
              Earn money driving passengers. Flexible hours, weekly payments.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Car Model</label>
                <input
                  type="text"
                  placeholder="Toyota Innova Crysta"
                  value={formData.car_model}
                  onChange={(e) => setFormData({ ...formData, car_model: e.target.value })}
                  className="w-full p-4 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 bg-emerald-50"
                  required
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Car Number</label>
                <input
                  type="text"
                  placeholder="DL 12 AB 1234"
                  value={formData.car_number}
                  onChange={(e) => setFormData({ ...formData, car_number: e.target.value.toUpperCase() })}
                  className="w-full p-4 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 bg-emerald-50"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Driving License</label>
                <input
                  type="text"
                  placeholder="DL123456789012"
                  value={formData.license_number}
                  onChange={(e) => setFormData({ ...formData, license_number: e.target.value })}
                  className="w-full p-4 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 bg-emerald-50"
                  required
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-4 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 bg-emerald-50"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Emergency Contact</label>
              <input
                type="tel"
                placeholder="+91 98765 43211"
                value={formData.emergency_contact}
                onChange={(e) => setFormData({ ...formData, emergency_contact: e.target.value })}
                className="w-full p-4 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 bg-emerald-50"
                required
                disabled={loading}
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-6 px-8 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
            >
              <span>🚀</span>
              <span>{loading ? 'Registering as Driver...' : 'Start Driving with Uber'}</span>
            </button>
          </form>

          <div className="mt-8 text-center pt-8 border-t border-emerald-100">
            <p className="text-gray-600 mb-4">Already a driver? <Link to="/home" className="font-semibold text-emerald-600 hover:text-emerald-700">Go to Home</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driver;
