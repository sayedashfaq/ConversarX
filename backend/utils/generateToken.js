import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevent xss atcaks  cross site scripting attack
    sameSite: "strict", // csrf attacks cross-site request forgery attcaks
    secure: process.env.NODE_ENV !== "development"
  });
};

export default generateTokenAndSetCookie;