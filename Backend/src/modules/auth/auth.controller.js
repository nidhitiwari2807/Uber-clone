import { authService } from './auth.service.js';

function signup(req, res) {

    try {
        const userData = req.body;

        const result = authService.signup(userData);

        return res.status(201).json({
            success: true,
            message: 'user signup successfully',
            data: result
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || 'sigup failed',
        });
    }

}

function login(req, res) {
    try {
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || 'login failed',
        });
        
    }

}
export { signup, login }