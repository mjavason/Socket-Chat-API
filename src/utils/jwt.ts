import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants';

async function signJwt(payload: object, signature = JWT_SECRET, expiresIn?: string | number) {
  const options: jwt.SignOptions = {
    expiresIn, // Optional expiry parameter
  };

  return await jwt.sign(payload, signature, options);
}

async function verifyJwt(token: string, signature = JWT_SECRET) {
  try {
    const decoded = await jwt.verify(token, signature);
    return decoded;
  } catch (e) {
    // console.log(e);
    return false;
  }
}

export { signJwt, verifyJwt };
