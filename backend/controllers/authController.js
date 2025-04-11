import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

{/*import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuth = async (req, res) => {
  const { credential } = req.body;
  console.log('📥 Received Google credential:', credential ? '[YES]' : '[NO]');

  if (!credential) {
    return res.status(400).json({ success: false, message: 'Missing credential token' });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;
    console.log('✅ Google token verified. Email:', email);

    let user = await User.findOne({ email });

    if (!user) {
      const username = email.split('@')[0];
      user = new User({
        username,
        email,
        photo: picture,
        password: '', // No password for Google login
      });

      await user.save();
      console.log('🆕 New Google user created:', user.email);
    } else {
      console.log('🟢 Existing user found:', user.email);
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
      expiresIn: '15d',
    });

    return res.status(200).json({
      success: true,
      message: 'Google login successful',
      token,
      data: user,
    });

  } catch (err) {
    console.error('❌ Google login error:', err.message);
    return res.status(401).json({ success: false, message: 'Google authentication failed', error: err.message });
  }
};



*/}

// user registration
export const register = async (req, res) => {
  try {
    // hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    await newUser.save();

    res.status(200).json({ success: true, message: "Successfully created" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// user login
export const login = async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email });

    // if user doesn't exist
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // if user is exist then check the password or compare the password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // if password is incorrect
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }

    const { password, role, ...rest } = user._doc;

    // create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // set token in the browser cookies and send the response to the client
    res
      // .cookie("accessToken", token, {
      //   httpOnly: true,
      //   expires: token.expiresIn,
      //   secure: true,
      // })
      .status(200)
      .json({
        token,
        data: { ...rest },
        role,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};
