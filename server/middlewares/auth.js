import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    let decodeData;
    if(token.length > 25) {
      decodeData = jwt.verify(token, 'teste');
      req.userId = decodeData?.id;
    } else {
      req.userId = token;
    }
    next();
  } catch (error) {
    console.log(error);
  }
}
export default auth;