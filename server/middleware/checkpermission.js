const { use } = require('passport');
const rolePermission = require('../config/rolepermission');

const checkPermission = (module, action) => (req,res,next) => {
    try {
        const userRole = req.user.role;
        const userPermissions = req.user.permissions;
        console.log("User object:",req.user);
        console.log("User Role:", userRole);
        console.log("User Permissions:", userPermissions);
        console.log("Checking permissions for:", module, action);

        if (!rolePermission[userRole]) {
            console.log("Unauthorized Role:", userRole);
            return res.status(403).json({message:"Unauthorized Role"})
        }

        if (!userPermissions[module] && !Array.isArray(userPermissions[module])) {
            console.log(`Access Denied : User doesn't have permission for ${module}`);
            return res.status(403).json({message: `Access denied to ${module}`})
        }

        if (!userPermissions[module].includes(action)) {
            console.log(`permission missing : user cant ${action} ${module}`);
            return res.status(403).json({message: `you dont have permission to ${action} ${module}`});
        }

        // if (!userPermissions.includes(module)) {
        //     console.log(`Access denied: User doesn't have permission for ${module}`);
        //     return res.status(403).json({message: `Access denied to ${module}`})
        // }

        // if (!rolePermission[userRole][module] || !rolePermission[userRole][module].includes(action)) {
        //     console.log(`Permission missing: User can't ${action} ${module}`);
        //     return res.status(403).json({message : `You dont have permission to ${action} ${module}`});
        // }
        
        console.log("Permission check passed");
        next();
    } catch (error) {
        console.error("Error in permission check middleware:", error);
        res.status(500).json({message : "Internal server error"})
    }
};

module.exports = checkPermission;