/**
 *
 * Application
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import actions from '../../actions';

// routes
import Login from '../Login';
import Signup from '../Signup';
import HomePage from '../Homepage';
import Dashboard from '../Dashboard';
import Navigation from '../Navigation';
import Authentication from '../Authentication';
import ForgotPassword from '../ForgotPassword';
import Shop from '../Shop';
import AuthSuccess from '../AuthSuccess';
import Footer from '../../components/Common/Footer';
import Page404 from '../../components/Common/Page404';
import { CART_ITEMS } from '../../constants';
import ProductPage from '../ProductPage';

import Contact from '../Contact';

//import Sell from '../Sell';
//
//import BrandsPage from '../BrandsPage';
//
//import OrderSuccess from '../OrderSuccess';
//import OrderPage from '../OrderPage';
//import MerchantSignup from '../MerchantSignup';
//import Support from '../Support';
//import ResetPassword from '../ResetPassword';
import Notification from '../Notification';





class Application extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleStorage = this.handleStorage.bind(this);
  }
  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      this.props.fetchProfile();
    }

    //this.props.handleCart();

    document.addEventListener('keydown', this.handleTabbing);
    document.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('storage', this.handleStorage);
  }

  handleStorage(e) {
    if (e.key === CART_ITEMS) {
      this.props.handleCart();
    }
  }

  handleTabbing(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing');
    }
  }

  handleMouseDown() {
    document.body.classList.remove('user-is-tabbing');
  }

  render() {
    return (
      <div className='application'>
        <Notification />
        <Navigation />
        <main className='main'>
          <Container>
            <div className='wrapper'>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Signup} />
                <Route
                  path='/dashboard'
                  component={Authentication(Dashboard)}
                />                
                <Route path='/shop' component={Shop} />
                <Route path='/auth/success' component={AuthSuccess} />
                <Route path='/forgot-password' component={ForgotPassword} />
                <Route path='/product/:slug' component={ProductPage} />
                <Route path='/404' component={Page404} />
                <Route path='*' component={Page404} />
                
                <Route path='/contact' component={Contact} />


                {/*<Route path='/sell' component={Sell} />
                
                
                
                <Route path='/order/success/:id' component={OrderSuccess} />
                <Route path='/order/:id' component={OrderPage} /> 
                <Route
                  path='/merchant-signup'
                  component={MerchantSignup}
                />                 
                <Route path='/support' component={Authentication(Support)} />
                <Route path='/brands' component={BrandsPage} />
                <Route
                  path='/reset-password/:token'
                  component={ResetPassword}
                />*/}
              </Switch>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authentication.authenticated,
    products: state.product.storeProducts
  };
};

export default connect(mapStateToProps, actions)(Application);
