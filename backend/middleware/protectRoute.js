import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorised - no token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorised - invalid token" });
    }

    const user = await User.findById(decode.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("error in protect route middleware func", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};

export default protectRoute;
