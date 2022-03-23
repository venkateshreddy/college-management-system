import { copyFileSync } from 'fs';
import jwt from 'jsonwebtoken';

export const verifyToken = (req) => {
    const token = extractToken(req);  
    if (!token) {
        return false;
    }

    let data = null;
    try {
        data = jwt.verify(token, 'MY-PROJECT-SECRET-KEY');
    } catch(err) {
        console.log("Invalid token")
    }
    if (data) {
        return data;
    } else {
        return false
    }
}

function extractToken (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        return req.query.token;
    }
    return null;
}