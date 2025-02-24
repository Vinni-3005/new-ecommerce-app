// const {use} = require('passport');
// const rolePermission = require("../config/rolepermission"); // Import role permissions

// const checkPermission = (req, res, next) => {
//     console.log("Request User:", req.user);
//     console.log("User Role:", req.user ? req.user.role : "undefined");
    
//     const userRole = req.user.role; // Assuming role is stored in req.user (from authentication middleware)
//     const method = req.method; // GET, POST, PUT, DELETE
//     const path = req.baseUrl + req.path; // Extract full API path

//     const formattedEndpoint = `${method} ${path}`;
//     //console.log("User Role:", userRole);
//     console.log("Requested Method:", req.method); 
//     console.log("Requested Endpoint:", formattedEndpoint);

//     const allowedEndpoints = rolePermission[userRole] || [];
//     console.log("Allowed Endpoints:", allowedEndpoints);

//     if (allowedEndpoints.length === 0) {
//         console.error(`⚠️ No API permissions found for role: ${userRole}`);
//       }

//     const isAuthorized = allowedEndpoints.some(path => {
//         const pattern = new RegExp(`^${path.replace(/:id/g, "[a-f0-9]{24}")}$`); 
//         return pattern.test(formattedEndpoint);
//     });

//     console.log("Is Authorized:", isAuthorized);
    
//     // Check if role exists in permissions and has access to this endpoint
//     if (rolePermission[userRole] && rolePermission[userRole][formattedEndpoint]) {
//         return next(); // User has permission, proceed to the next middleware
//     } else {
//         return res.status(403).json({ message: "You don't have permission to access this resource." });
//     }
// };

// module.exports = checkPermission;







































// const {use} = require('passport');
// const rolePermission = require("../config/rolepermission"); // Import role permissions

// const checkPermission = (req, res, next) => {

//     if (!req.user || !req.user.role) {
//         return res.status(403).json({message:'unauthorized access'});
//     }
//     console.log("Request User:", req.user);
//     console.log("User Role:", req.user ? req.user.role : "undefined");
    
//     const {role} = req.user; // Assuming role is stored in req.user (from authentication middleware)
//     const requestedMethod = req.method; // GET, POST, PUT, DELETE
//     const requestedPath = req.baseUrl + req.path; // Extract full API path
//     console.log("User Object:", req.user);
//     console.log("Requested Method:", req.method); 
//     console.log("Requested Path:", req.path); 
//     
    

//     const formattedEndpoint = `${requestedMethod} ${requestedPath}`;
//     //console.log("User Role:", userRole);
//     console.log("Requested Endpoint:", formattedEndpoint);

//     const allowedEndpoints = rolePermission[role] || [];
//     console.log("Allowed Endpoints:", allowedEndpoints);

//     if (!allowedEndpoints.length) {
//         console.error(`⚠️ No API permissions found for role: ${role}`);
//       }

//     const isAuthorized = allowedEndpoints.some((endpoint) => {
//         const [method, path] = endpoint.split(" ");
//         if(method !== requestedMethod) return false;     
//     });

//     const pathRegex = new RegExp(`^${requestedPath.replace(/:id/g, "[a-f0-9]{24}")}$`);
//     return pathRegex.test(requestedPath); 

//     if (!isAuthorized) {
//         return res.status(403).json({ error: "You don't have permission for this action." });
//       }
    
//       next();

//     // console.log("Is Authorized:", isAuthorized);
    
//     // // Check if role exists in permissions and has access to this endpoint
//     // if (rolePermission[role] && rolePermission[role][formattedEndpoint]) {
//     //     return next(); // User has permission, proceed to the next middleware
//     // } else {
//     //     return res.status(403).json({ message: "You don't have permission to access this resource." });
//     // }
// };

// module.exports = checkPermission;





































// const { use } = require('passport');
// const rolePermission = require('../config/rolepermission');


// const checkPermission = (req,res,next) => {
//     try {
//         const userRole = req.user.role;
//         const userPermissions = req.user.permissions;
//         console.log("User object:",req.user);
//         console.log("User Role:", userRole);
//         console.log("User Permissions:", userPermissions);
//         console.log("Checking permissions for:", module, action);
    
//         if (!rolePermission[userRole]) {
//             console.log("Unauthorized Role:", userRole);
//             return res.status(403).json({message:"Unauthorized Role"})
//         }

//         if (!userPermissions[module] && !Array.isArray(userPermissions[module])) {
//             console.log(`Access Denied : User doesn't have permission for ${module}`);
//             return res.status(403).json({message: `Access denied to ${module}`})
//         }

//         if (!userPermissions[module].includes(action)) {
//             console.log(`permission missing : user cant ${action} ${module}`);
//             return res.status(403).json({message: `you dont have permission to ${action} ${module}`});
//         }

        // if (!userPermissions.includes(module)) {
        //     console.log(`Access denied: User doesn't have permission for ${module}`);
        //     return res.status(403).json({message: `Access denied to ${module}`})
        // }

        // if (!rolePermission[userRole][module] || !rolePermission[userRole][module].includes(action)) {
        //     console.log(`Permission missing: User can't ${action} ${module}`);
        //     return res.status(403).json({message : `You dont have permission to ${action} ${module}`});
        // }
        
//         console.log("Permission check passed");
//         next();
//     } catch (error) {
//         console.error("Error in permission check middleware:", error);
//         res.status(500).json({message : "Internal server error"})
//     }
// };

//  module.exports = checkPermission;