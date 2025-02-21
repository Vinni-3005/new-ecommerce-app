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
  
  const initialState = {
    roles: [],
    permissions: [],
    loading: false,
    error: null,
  };
  
  const modifyRoleReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ROLES_REQUEST:
        return { ...state, loading: true };
      case FETCH_ROLES_SUCCESS:
        return { ...state, loading: false, roles: action.payload };
      case FETCH_ROLES_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
        case FETCH_PERMISSIONS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_PERMISSIONS_SUCCESS:
            return { ...state, loading: false, permissions: action.payload };
        case FETCH_PERMISSIONS_FAILURE:
            return { ...state, loading: false, error: action.payload };
  
      case UPDATE_PERMISSIONS_REQUEST:
        return { ...state, loading: true };
      case UPDATE_PERMISSIONS_SUCCESS:
        return { ...state, loading: false };
      case UPDATE_PERMISSIONS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default modifyRoleReducer;
  