import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  // console.log(req);
  if (!token) 
  return res.status(404).json({
    success: false,
    message: "Login First",
  });
  //  const token=req.headers.cookie.slice(6);
  // console.log(token);
     

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded._id);
  next();
};
