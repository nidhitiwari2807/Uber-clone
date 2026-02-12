import {User }from '../models/user.model.js';

class AuthService {

  async signup(userData) {
    const existingUser = await User.findOne({
      $or: [
        { email: userData.email },
        { phone: userData.phone }
      ]
    });

    if (existingUser) {
      if (existingUser.email === userData.email)
        throw new Error('Email already registered');

      if (existingUser.phone === userData.phone)
        throw new Error('Phone number already registered');
    }

    const newUser = new User(userData);
    await newUser.save();

    const token = newUser.generateAuthToken();

    return { user: newUser, token };
  }

  async login(identifier, password) {
    const user = await User.findOne({
      $or: [{ email: identifier }, { phone: identifier }]
    }).select('+password');

    if (!user) throw new Error('Invalid credentials');

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) throw new Error('Invalid password');

    if (!user.isActive)
      throw new Error('Account inactive');

    const token = user.generateAuthToken();

    return { user, token };
  }
}

export const authService = new AuthService();
