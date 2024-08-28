const jwt = require('jsonwebtoken');

const VerifyWithTokens = async(req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null){
        return res.status(403).json({
            status : 'error in jwt',
            message: 'Token is empty'
        });
    }

    jwt.verify(token, process.env.ACCES_KEY, (err, decoded) => {
        if(err){
            return res.status(403).json({
                status : 'error in jwt',
                message: err
            })
        }

        req.email = decoded.email
        next()
    });
}
module.exports= { VerifyWithTokens };