// import { authService } from './auth.service.js';

// function signup(req, res) {

//     try {
//         const userData = req.body;

//         const result = authService.signup(userData);

//         return res.status(201).json({
//             success: true,
//             message: 'user signup successfully',
//             data: result
//         });
        
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message || 'sigup failed',
//         });
//     }

// }

// function login(req, res) {
//   try {
//     const credentials = req.body;

//     const result = authService.login(credentials);

//     return res.status(200).json({
//       success: true,
//       message: "login successful",
//       data: result
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message || "login failed",
//     });
//   }
// }

// export { signup, login }

import { authService } from './auth.service.js';

export const signup = async (req, res) => {  // ← async add karo
  try {
    const userData = req.body;
    
    const result = await authService.signup(userData);  // ← await add karo
    
    return res.status(201).json({
      success: true,
      message: 'user signup successfully',
      data: result
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || 'signup failed',
    });
  }
};

export const login = async (req, res) => {  // ← async add karo
  try {
    const credentials = req.body;
    
    const result = await authService.login(credentials);  // ← await add karo
    
    return res.status(200).json({
      success: true,
      message: "login successful",
      data: result
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "login failed",
    });
  }
};
