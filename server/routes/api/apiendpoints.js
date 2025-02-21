const express = require('express');
const roleApiPermission = require('../../models/apiendpoints');
const router = express.Router();

// Fetch API Endpoints for a Role
router.get('/apiendpoints/:roleName', async (req, res) => {
    try {
      const { roleName } = req.params;
  
      const rolePermissions = await roleApiPermission.findOne({ roleName });
  
      if (!rolePermissions) {
        return res.status(404).json({ message: 'No permissions found for this role' });
      }
  
      res.status(200).json(rolePermissions);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching permissions', error });
    }
});
  
// ✅ Update API Endpoints for a Role
router.put('/apiendpoints/update', async (req, res) => {
      try {
        const { roleName, permissions } = req.body;
    
        let role = await roleApiPermission.findOne({ roleName });
    
        if (role) {
          role.apiEndpoints = permissions; // Update existing role API permissions
        } else {
          role = new roleApiPermission({ roleName, apiEndpoints: permissions }); // Create new entry
        }
    
        await role.save();
        res.status(200).json({ message: 'Permissions updated successfully', role });
      } catch (error) {
        res.status(500).json({ message: 'Error updating permissions', error });
      }
  });
  
module.exports = router;
  

// // Add or Update API Endpoints for a Role
// router.post('/permissions', async (req, res) => {
//   try {
//     const { roleName, apiEndpoints } = req.body;

//     let role = await roleApiPermission.findOne({ roleName });

//     if (role) {
//       role.apiEndpoints = apiEndpoints; // Update existing role permissions
//     } else {
//       role = new roleApiPermission({ roleName, apiEndpoints }); // Create new entry
//     }

//     await role.save();
//     res.status(200).json({ message: 'Permissions updated successfully', role });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating permissions', error });
//   }
// });

