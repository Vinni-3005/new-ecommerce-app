/*
 *
 * Merchant
 *
 */

import React, {useState} from 'react';

import { Switch, Route, useHistory } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { FaTimes } from 'react-icons/fa';

import AccountMenu from '../AccountMenu';
import Page404 from '../../Common/Page404';
import Review from '../../../containers/Review';

import Account from '../../../containers/Account';
import CreateRoles from '../../../containers/CreateRole/CreateRole';
import Category from '../../../containers/Category';
import Wishlist from '../../../containers/WishList';
import Product from '../../../containers/Product';
import Brand from '../../../containers/Brand';
import AccountSecurity from '../../../containers/AccountSecurity';
//
//import Address from '../../../containers/Address';
//
//
//import Order from '../../../containers/Order';
//import Wishlist from '../../../containers/WishList';

const Distributor = ({permissions}) => {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [selectedLayout, setSelectedLayout] = useState('');
  const history = useHistory();
  const componentMap = {
    AccountSecurity : <Account/>,
    products: <Product/>,
    category:<Category/>,
    brands : <Brand/>,
    reviews:<Review/>,
    createroles: <CreateRoles/>,
    category:<Category/>,
    wishlist : <Wishlist/>,
  };

  const layouts = [
    {
      id :'block',
      name:'Block Grid',
    },
    {
      id:'column',
      name:'Column Grid',
    },
    {
      id:'modular',
      name:'Modular Grid',
    },
    {
      id:'hierarchial',
      name:'Hierarchial Grid',
    }
  ];



  const handleCheckboxChange = (component) => {
    setSelectedComponents((prev) => 
    prev.includes(component) ? prev.filter((item) => item !== component) : [...prev, component]
  );
  
    if (component === 'category') {
      history.push('/dashboard/category'); // Navigate to the correct route
    } else if (component === 'products') {
      history.push('/dashboard/products');
    }
  };

  const  removeComponent = (component) => {
    setSelectedComponents((prev) => prev.filter((item) => item !== component));
    document.querySelector(`input[value="${component}"]`).checked = false;
    if (component === 'category') {
      history.push('/dashboard'); // Navigate to default
    } else if ( component === 'products'){
      history.push('/dashboard/products');
    }
  
  };

  const handleLayoutSelect =(layout) => {
    setSelectedLayout(layout);
  };

return (
  <div className="distributor">
    {/*layout selector*/}
    <Row>
      <Col xs='12'>
        <h3>Select Grid Layout</h3>
          <div className="layout-options">
            {layouts.map((layout) => {
              return (
              <div
                key={layout.id}
                className={`layout-card ${selectedLayout === layout.id ? 'selected' : ''}`}
                onClick={() => setSelectedLayout(layout.id)}
              >
                <h4>{layout.name}</h4>
                  
              </div>
              );
            })}
          </div>
      </Col>
    </Row>

    {/*permissions as checkboxes*/}
    <Row>
      <Col xs="12"> 
        <h3>Select Components</h3>
        {permissions.map((permission) => (
          <label key={permission} style={{ marginRight: '10px' }} >
              
            <input
              type="checkbox"
              value={permission}
              onChange={() => handleCheckboxChange(permission)}
              style={{marginRight:'10px'}}
            />
              {permission}
            </label>
          ))}
      </Col>
    </Row>

    <Row>
      <Col xs="12">
        <div className={`grid-container ${selectedLayout}`}>
             
          {selectedComponents.map((component) => (   
                
            <div key={component} className='grid-item'>  
                             
              <FaTimes className="close-icon" onClick={() => removeComponent(component)}/>
              <span className='component-name'>{component}</span>
                  
              <div className="component-content">{componentMap[component]}</div>              
            </div>
          ))}
    
        </div>
      </Col>
    </Row>

  </div>
);
};

export default Distributor;
/*const Distributor = props => {
  return (
    <div className='merchant'>
      <Row>
        <Col xs='12' md='5' xl='3'>
          <AccountMenu {...props} />
        </Col>
        <Col xs='12' md='7' xl='9'>
          <div className='panel-body'>
            <Switch>
              <Route exact path='/dashboard' component={Account} />
              {/*<Route path='/dashboard/AccountSecurity' component={AccountSecurity} />
              <Route path='/dashboard/address' component={Address} />
              <Route path='/dashboard/products' component={Product} />
              <Route path='/dashboard/category' component={Category}/>
              <Route path='/dashboard/brand' component={Brand} />
              <Route path='/dashboard/orders' component={Order} />
              <Route path='/dashboard/wishlist' component={Wishlist} />}
              <Route path='/dashboard/reviews' component={Reviews}/>
              
              <Route path='*' component={Page404} />
            </Switch>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Distributor;*/
