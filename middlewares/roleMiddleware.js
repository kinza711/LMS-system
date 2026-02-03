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



//========= i can't use this dynamic role methord 
//========== i will use another , will use this another project 