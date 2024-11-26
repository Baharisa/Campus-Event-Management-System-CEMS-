// Role-based access control 
// backend/middleware/roleMiddleware.js

const roleMiddleware = (roles) => {
    return (req, res, next) => {
        const userRole = req.user.role; // Assuming req.user is set by authMiddleware
        if (!roles.includes(userRole)) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    };
};

module.exports = roleMiddleware;