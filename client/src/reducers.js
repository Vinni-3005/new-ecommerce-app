/*
 *
 * reducers.js
 * reducers configuration
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as notifications } from 'react-notification-system-redux';

// import reducers
import applicationReducer from './containers/Application/reducer';
import homepageReducer from './containers/Homepage/reducer';
import signupReducer from './containers/Signup/reducer';
import loginReducer from './containers/Login/reducer';
import forgotPasswordReducer from './containers/ForgotPassword/reducer';
import navigationReducer from './containers/Navigation/reducer';
import authenticationReducer from './containers/Authentication/reducer';
import dashboardReducer from './containers/Dashboard/reducer';
import accountReducer from './containers/Account/reducer';
import navigationMenuReducer from './containers/NavigationMenu/reducer';
import shopReducer from './containers/Shop/reducer';
import reviewReducer from './containers/Review/reducer';
import roleReducer from './containers/CreateRole/reducer';

//import cartReducer from './containers/Cart/reducer';
//import newsletterReducer from './containers/Newsletter/reducer';
//import addressReducer from './containers/Address/reducer';
//import resetPasswordReducer from './containers/ResetPassword/reducer';
//import usersReducer from './containers/Users/reducer';
//import productReducer from './containers/Product/reducer';
//import categoryReducer from './containers/Category/reducer';
//import brandReducer from './containers/Brand/reducer';
//import merchantReducer from './containers/Merchant/reducer';
//import contactReducer from './containers/Contact/reducer';
//import orderReducer from './containers/Order/reducer';
//import wishListReducer from './containers/WishList/reducer';
//import assignRoleReducer from './containers/AssignRoles/reducer';

const createReducer = history =>
  combineReducers({
    router: connectRouter(history),
    notifications,
    application: applicationReducer,
    homepage: homepageReducer,
    signup: signupReducer,
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
    navigation: navigationReducer,
    authentication: authenticationReducer, 
    dashboard: dashboardReducer,
    account: accountReducer, 
    menu: navigationMenuReducer,
    shop: shopReducer,
    review: reviewReducer,
    roles : roleReducer,

    //cart: cartReducer,
    //newsletter: newsletterReducer,
    //address: addressReducer,
    //resetPassword: resetPasswordReducer,
    //users: usersReducer,
    //product: productReducer,
    //category: categoryReducer,
    //brand: brandReducer,
    //merchant: merchantReducer,
    //contact: contactReducer,
    //order: orderReducer,
    //wishlist: wishListReducer,
    //assignroles : assignRoleReducer
  });

export default createReducer;