import jwt from 'jsonwebtoken';

const  sendErrorResponse = (res, code, message) => {
    res.status(code);
    res.send({ error: true, message });
}

export const checkAuth = (authenticationRequired=false, requiredRoles=[]) => (req, res, next) => {
    if (authenticationRequired) {
        const token = extractToken(req);  
        if (!token) {
            sendErrorResponse(res, 401, "Unauthenticated user.");
        } else {
            let user = null;
            try {
                user = jwt.verify(token, 'MY-PROJECT-SECRET-KEY');
            } catch(err) {
                sendErrorResponse(res, 401, "Unauthenticated user. Invalid/Expired token.");
            }
            if (user) {
                //add logged in user data in to the request. Sothat next fucntion can use user data
                req.user = user;
                
                if (requiredRoles && requiredRoles.length > 0) {
                    if (requiredRoles.includes(user.role)) {
                        next();  //Authentication passed and Authorization passed.
                    } else {
                        sendErrorResponse(res, 401, "You are not authorized to perform this action.");
                    }
                } else {
                    next(); //Authentication passed but authorization is not needed.
                }
            } else {
                sendErrorResponse(res, 401, "Unauthenticated user.");
            }
        }
    } else {
        next();     //No authentication and authorization needed.
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