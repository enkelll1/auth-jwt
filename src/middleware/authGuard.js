const jwt = require("jsonwebtoken");

module.exports = (req, res, next) =>{
    const token = req.headers['authorization'];
    if(!token) return res.status(401).json('Unauthorized user')
    try{
        const decoded = jwt.verify(token, process.env.jwt_config);
        req.user = decoded;
        next();
    }catch(e){
        res.status(400).json('Token not valid')
    }
}