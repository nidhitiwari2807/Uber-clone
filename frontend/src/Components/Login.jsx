// import axios from "axios";
// import { useState } from "react";

// export default function Auth() {
//   const [isEmail, setIsEmail] = useState(true);
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const payload = isEmail
//       ? { email, password }
//       : { phone, password };

//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/auth/login", 
//         payload
//       );

//       console.log("Login success:", res.data);
//     } catch (error) {
//       console.log("Login error:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
//       <div className="bg-white w-[380px] rounded-3xl shadow-xl p-8">

//         <div className="flex mb-6 bg-gray-100 rounded-full p-1">
//           <button type="button" onClick={() => setIsEmail(true)}
//             className={`w-1/2 py-2 rounded-full text-sm font-semibold ${isEmail ? "bg-yellow-400 text-black" : "text-gray-500"}`}>
//             Email
//           </button>

//           <button type="button" onClick={() => setIsEmail(false)}
//             className={`w-1/2 py-2 rounded-full text-sm font-semibold ${!isEmail ? "bg-yellow-400 text-black" : "text-gray-500"}`}>
//             Phone
//           </button>
//         </div>

//         <h2 className="text-2xl font-bold text-center mb-6">
//           {isEmail ? "Login with Email" : "Login with Phone"}
//         </h2>

//         <form className="space-y-4" onSubmit={handleLogin}>

//           {isEmail ? (
//             <input
//               type="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border rounded-lg px-4 py-2"
//             />
//           ) : (
//             <input
//               type="text"
//               placeholder="Enter Phone Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full border rounded-lg px-4 py-2"
//             />
//           )}

//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border rounded-lg px-4 py-2"
//           />

//           <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-full font-semibold">
//             Login
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', formData);
      
      // 🎉 SUCCESS ALERT
      alert(`🎉 Welcome back ${response.data.data.email}!\nRedirecting to home... 🚗`);
      
      localStorage.setItem('uberToken', response.data.data.id || 'token');
      setTimeout(() => navigate('/home'), 2000);  // ← HOME PE JAYEGA!
      
    } catch (error) {
      alert(`❌ ${error.response?.data?.message || 'Login failed! Try again.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-white p-4">
      <form onSubmit={handleLogin} className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-yellow-100">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-gray-600 mt-2">Sign in to your Uber account</p>
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
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-5 border-2 border-yellow-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-100 focus:border-yellow-400 bg-yellow-50 text-gray-900 placeholder-gray-500"
            required
            disabled={loading}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full mt-8 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 p-5 rounded-2xl font-bold text-xl hover:from-yellow-500 hover:to-yellow-600 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? '🚗 Signing In...' : '🚗 Sign In to Uber'}
        </button>
        
        <div className="mt-8 text-center border-t border-yellow-100 pt-6">
          <p className="text-gray-600 mb-4 text-sm">Don't have an account?</p>
          <Link 
            to="/signup" 
            className="inline-block px-10 py-4 bg-white text-gray-900 border-2 border-yellow-400 rounded-2xl font-semibold text-lg hover:bg-yellow-50 hover:border-yellow-500 shadow-md hover:shadow-lg transition-all"
          >
            🔐 Create Uber Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
