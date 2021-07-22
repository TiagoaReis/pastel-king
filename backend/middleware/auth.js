const jwt = require("jsonwebtoken");
const moment = require("moment");

exports.auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "process.env.JWT_SECRET");
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      //error: new Error('Invalid request!')
      error: "Invalid token request!",
    });
  }
};

exports.createToken = (pauload) => {
  return jwt.sign(
    {
      iat: moment().unix(),
      exp: moment().add(365, "day").unix(),
      id: pauload._id,
    },
    "process.env.JWT_SECRET"
  );
};
