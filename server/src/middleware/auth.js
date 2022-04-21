import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");

      req.userId = decodedData?.id;
    } else {
      // if token is form Google Auth
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next(); // pass action to the next
  } catch (err) {
    console.log(err);
  }
};

export default auth;
