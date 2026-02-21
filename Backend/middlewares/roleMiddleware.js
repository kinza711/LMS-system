export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Role (${req.user.role}) is not allowed`
      });
    }
    next();
  };
};



//========= i  used this dynamic role methord 
//========== i also admin.js middleware once only 