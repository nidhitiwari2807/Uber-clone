import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('uberToken');
    if (token) {
      setUser({ 
        email: '', 
        name: '',
        rides: '',
        rating: ''
      });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('uberToken');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      {/* 🔔 TOP NAVIGATION BAR */}
      <nav className="bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/home" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
              <span className="text-2xl">🚗</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                UBER
              </h1>
              <p className="text-xs text-gray-500 font-medium">India</p>
            </div>
          </Link>

          <div className="flex items-center space-x-3">
            {user ? (
              <>
                {/* Profile Avatar */}
                <div className="flex items-center space-x-3 p-2 -m-2 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center text-lg font-bold text-gray-900 shadow-md">
                    {user.name?.[0]?.toUpperCase() || 'N'}
                  </div>
                  <div className="hidden md:block">
                    <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                  </div>
                </div>

                {/* 🚗 DRIVE BUTTON */}
                <Link 
                  to="/become-driver"
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm flex items-center space-x-2"
                >
                  <span>🚗</span>
                  <span>Drive</span>
                </Link>

                {/* Book Ride */}
                <Link 
                  to="/rides" 
                  className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm"
                >
                  Book Ride
                </Link>

                {/* Logout */}
                <button
                  onClick={logout}
                  className="px-6 py-3 bg-red-500 text-white rounded-2xl font-semibold hover:bg-red-600 shadow-lg hover:shadow-xl transition-all text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login" className="px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-xl transition-colors">
                  Sign in
                </Link>
                <Link to="/signup" className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all">
                  Get Uber
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* 🔥 MAIN CONTENT - RIDER DASHBOARD */}
      {user ? (
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* 👋 WELCOME */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-yellow-600 bg-clip-text text-transparent mb-4">
              Good Evening, {user.name}!
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Where to today? Fastest rides, lowest prices. Your driver is minutes away.
            </p>
          </div>

          {/* 🚗 RIDE OPTIONS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* UberX */}
            <Link to="/rides" className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all border border-gray-100 group-hover:border-yellow-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    X
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-900">₹200</p>
                    <p className="text-sm text-gray-500">per ride</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">UberX</h3>
                <p className="text-gray-600 mb-6">Budget-friendly rides</p>
                <div className="flex items-center text-green-600 font-semibold">
                  <span className="text-xl">⚡</span>
                  <span className="ml-2">2 min away</span>
                </div>
              </div>
            </Link>

            {/* Comfort */}
            <Link to="/rides" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all border border-blue-100 group-hover:border-blue-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    C
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-900">₹300</p>
                    <p className="text-sm text-gray-500">per ride</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Comfort</h3>
                <p className="text-gray-600 mb-6">Extra legroom</p>
                <div className="flex items-center text-green-600 font-semibold">
                  <span className="text-xl">✅</span>
                  <span className="ml-2">3 min away</span>
                </div>
              </div>
            </Link>

            {/* UberXL */}
            <Link to="/rides" className="group">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all border border-emerald-100 group-hover:border-emerald-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    XL
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-900">₹450</p>
                    <p className="text-sm text-gray-500">per ride</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">UberXL</h3>
                <p className="text-gray-600 mb-6">For groups up to 6</p>
                <div className="flex items-center text-green-600 font-semibold">
                  <span className="text-xl">🚙</span>
                  <span className="ml-2">5 min away</span>
                </div>
              </div>
            </Link>
          </div>

          {/* 📊 STATS */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{user.rides}</h3>
              <p className="text-gray-600 text-lg">Total Rides</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-3xl p-8 shadow-xl border border-yellow-200 text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-3xl font-bold text-yellow-700 mb-2">{user.rating}</h3>
              <p className="text-gray-700 text-lg">Avg Rating</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">₹18,450</h3>
              <p className="text-gray-600 text-lg">Saved</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="w-64 h-64 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-4xl flex flex-col items-center justify-center mx-auto mb-12 shadow-2xl">
            <span className="text-6xl mb-6 animate-bounce">🚗</span>
            <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Ready to ride?</h2>
            <p className="text-white/90 text-lg drop-shadow-md">Get the app and start booking</p>
          </div>
          <div className="space-y-4 max-w-md mx-auto">
            <Link 
              to="/signup"
              className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-6 px-8 rounded-3xl text-xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all"
            >
              🚀 Get Uber Now
            </Link>
            <p className="text-gray-600 text-lg">
              Already have an account? 
              <Link to="/login" className="font-semibold text-yellow-600 hover:text-yellow-700 ml-1">Sign in</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
