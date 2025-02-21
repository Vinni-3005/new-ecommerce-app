import axios from 'axios';
import {
  FETCH_ROLES_REQUEST,
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
  FETCH_PERMISSIONS_REQUEST,
  FETCH_PERMISSIONS_SUCCESS,
  FETCH_PERMISSIONS_FAILURE,
  UPDATE_PERMISSIONS_REQUEST,
  UPDATE_PERMISSIONS_SUCCESS,
  UPDATE_PERMISSIONS_FAILURE
} from './constants';
import {API_URL} from '../../constants/constant';

// Fetch permissions for a selected role
export const fetchPermissions = (roleName) => async (dispatch) => {
  dispatch({ type: FETCH_PERMISSIONS_REQUEST });

  try {
    const response = await axios.get(`${API_URL}/apiendpoints/${roleName}`); // API for fetching permissions
    dispatch({ type: FETCH_PERMISSIONS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PERMISSIONS_FAILURE, payload: error.message });
  }
};

// Update permissions for a role
export const updatePermissions = (roleName, permissions) => async (dispatch) => {
  dispatch({ type: UPDATE_PERMISSIONS_REQUEST });

  try {
    await axios.post(`${API_URL}/apiendpoints/update`, { roleName, permissions }); // API to update permissions
    dispatch({ type: UPDATE_PERMISSIONS_SUCCESS });
  } catch (error) {
    dispatch({ type: UPDATE_PERMISSIONS_FAILURE, payload: error.message });
  }
};
