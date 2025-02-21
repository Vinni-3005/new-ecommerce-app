import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPermissions } from "./actions";
import { fetchRolesData } from "../CreateRole/actions";

const ModifyRole = () => {
  const dispatch = useDispatch();
  const { permissions, loading, error } = useSelector((state) => state.modifyRole);
  const roles = useSelector((state) => state.roles.roles || []); // Fetch roles

  const [selectedRole, setSelectedRole] = useState("");
  const [rolePermissions, setRolePermissions] = useState({});

  useEffect(() => {
    dispatch(fetchRolesData()); // Load roles on mount
  }, [dispatch]);

  useEffect(() => {
    if (selectedRole) {
      dispatch(fetchPermissions(selectedRole)); // Fetch API permissions when role is selected
    }
  }, [selectedRole, dispatch]);

  useEffect(() => {
    // Convert API permissions array into an object with boolean values for checkboxes
    const permissionsMap = {};
    permissions.forEach((endpoint) => {
      permissionsMap[endpoint] = true; // Assume all fetched endpoints are enabled
    });
    setRolePermissions(permissionsMap);
  }, [permissions]);

  const renderRoleOptions = () => {
    return roles.length > 0 ? (
      roles.map((role, index) => (
        <option key={index} value={role.roleName}>
          {role.roleName || "Unnamed Role"}
        </option>
      ))
    ) : (
      <option key="no-roles" disabled>
        No roles available
      </option>
    );
  };

  // Handle toggle switch
  const handleToggle = (endpoint) => {
    setRolePermissions((prevPermissions) => ({
      ...prevPermissions,
      [endpoint]: !prevPermissions[endpoint], // Toggle value
    }));
  };

  return (
    <div className="modify-role">
      <h2>Modify Role API Permissions</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Role Selection Dropdown */}
      <label>Select Role:</label>
      <select onChange={(e) => setSelectedRole(e.target.value)} value={selectedRole}>
        <option value="">-- Select Role --</option>
        {renderRoleOptions()}
      </select>

      {/* Permissions List */}
      {selectedRole && (
        <div className="permissions-list">
          <h3>API Permissions for {selectedRole}</h3>
          {Object.keys(rolePermissions).map((endpoint) => (
            <div key={endpoint} className="permission-item">
              <span>{endpoint}</span>
              <input
                type="checkbox"
                checked={rolePermissions[endpoint] || false}
                onChange={() => handleToggle(endpoint)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModifyRole;
