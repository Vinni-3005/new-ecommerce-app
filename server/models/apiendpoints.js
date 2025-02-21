const mongoose = require('mongoose');

const roleApiPermissionSchema = new mongoose.Schema({
  roleName: { 
    type: String,
    required: true, 
    unique: true 
},
  apiEndpoints: [{ 
    type: String, 
    required: true 
}],
});

const RoleApiPermission = mongoose.model('RoleApiPermission', roleApiPermissionSchema);

module.exports = RoleApiPermission;
