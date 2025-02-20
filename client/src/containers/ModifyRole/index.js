// import React, {useEffect, useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {fetchRoles, fetchApiEndpoints, updateRolePermissions} from "./actions";

// const ModifyRole () => {
//     const dispatch = useDispatch();
//     const {roles, apiEndpoints, loading} = useSelector((state) => state.modifyRole);
//     const [selectedRole, setSelectedRole] = useState("");
//     const [apiPermissions, setApiPermissions] = useState([]);

//     //fetch roles and API endpoints on mount
//     useEffect(() => {
//         dispatch(fetchRoles());
//         dispatch(fetchApiEndpoints());
//     }, [dispatch]);

//     //fetch selected role permissions
//     useEffect ( () => {
//         if (selectedRole) {
//             const roleData = roles.find((role) => role.roleName === selectedRole);
//             setApiPermissions(roleData?.apiPermissions || []);
//         }
//     },[selectedRole, roles]);

//     //toggle API permissions
//     const togglePermission = (endpoint) => {
//         setApiPermissions( (prev) => 
//             prev.includes(endpoint) 
//                 ? prev.filter((p) => p !== endpoint)
//                 : [...prev,endpoint]
//         );
//     };

//     //save permissions
//     const savePermissions = () => {
//         dispatch(updateRolePermissions(selectedRole,apiPermissions))
//     };

//     return (
//         <div className='p-6'>
//             <h2>Modify Role API permissions</h2>
//             {/*Role permissions*/}
//             <select>
//                 <option>Select a Role</option>
//                 <
//             </select>
//         </div>
//     )
// }