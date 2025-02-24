const RoleApiPermission = require("../models/apiendpoints");

const check =
  () =>
  async (req, res, next) => {
    if (!req.user) {
      console.error("Unauthorized request: No user found in request");
      return res.status(401).send('Unauthorized');
    }
    try {
      const userRole = req.user.role;
      const requestedEndpoint = `${req.method} ${req.baseUrl}${req.path}`;

      console.log(`Checking permissions for role: ${userRole}, Endpoint: ${requestedEndpoint}`);

      const rolepermissions = await RoleApiPermission.findOne({roleName:userRole});

      if(!rolepermissions) {
        console.error(`Role '${userRole}' not found in database or has no permissions.`);
        return res.status(403).send("Role not found or no permissions assigned");
      }

      const hasPermission = rolepermissions.apiEndpoints.some((endpoint) => {
        const pattern = new RegExp(`^${endpoint.replace(/:\w+/g, "\\w+")}$`); // Replace `:id` with dynamic regex
        return pattern.test(requestedEndpoint);
      });

      if (!hasPermission) {
        console.error(`Role '${userRole}' does not have permission for '${requestedEndpoint}'`);
        return res.status(403).send("You are not allowed to make this request.");
      }

      // if(!rolepermissions.apiEndpoints.includes(requestedEndpoint)) {
      //   console.error(`Role '${userRole}' does not have permission for '${requestedEndpoint}'`);
      //   return res.status(403).send("you are not allowed to make this request");
      // }

      return next();
    } catch (error) {
      console.error("Error in role checking middleware:", error);
      return res.status(500).send("Internal server error");
    }

    // const hasRole = roles.find(role => req.user.role === role);
    // if (!hasRole) {
    //   return res.status(403).send('You are not allowed to make this request.');
    // }

    // return next();
  };

const role = { check };
module.exports = role;
