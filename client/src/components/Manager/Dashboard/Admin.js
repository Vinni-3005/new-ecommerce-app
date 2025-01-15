/*
 *
 * Admin
 *
 */

import React, {useState} from 'react';

import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { FaTimes } from 'react-icons/fa';

import AccountMenu from '../AccountMenu';
import Page404 from '../../Common/Page404';
import Review from '../../../containers/Review';
import CreateRoles from '../../../containers/CreateRole/CreateRole';
//import Product from '../../../containers/'
import Account from '../../../containers/Account';
import Category from '../../../containers/Category';
//import Brand from '../../../containers/'

const Admin = ({permissions}) => {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [gridLayout, setGridLayout] = useState('2x2');
  const componentMap = {
    //products: <Product/>,
    //brands:<Brand/>,
    reviews:<Review/>,
    createroles: <CreateRoles/>,
    category:<Category/>,
  };



const handleCheckboxChange = (component) => {
  setSelectedComponents((prev) => 
  prev.includes(component) ? prev.filter((item) => item !== component) : [...prev, component]
);
};

const  removeComponent = (component) => {
  setSelectedComponents((prev) => prev.filter((item) => item !== component));
  document.querySelector(`input[value="${component}"]`).checked = false;
};

return (
  <div className="admin">
    {/*layout selector*/}
    <Row>
      <Col xs="12">
        <label htmlFor='grid-layout'>Select Grid layout:</label>
        <select 
          id="grid-layout" 
          value={gridLayout} 
          onChange={(e) => setGridLayout(e.target.value)}
        > 
          <option value="">Select Grid</option>
          <option value="2x2">2x2 Grid</option>
          <option value="3x3">3x3 Grid</option>
        </select>
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
            />
            {permission}
          </label>
        ))}
      </Col>
    </Row>

    <Row>
      <Col xs="12">
        <div className={`grid-container grid-${gridLayout}`}>
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

export default Admin;
/*const Admin = props => {
  return (
    <div className='admin'>
      <Row>
        <Col xs='12' md='5' xl='3'>
          <AccountMenu {...props} />
        </Col>
        <Col xs='12' md='7' xl='9'>
          <div className='panel-body'>
            <Switch>
              <Route exact path='/dashboard' component={Account} />
              <Route path='/dashboard/createroles' component={CreateRoles}/>
              <Route path='/dashboard/reviews' component={Review} />
              <Route path='/dashboard/category' component={Category}/>
              <Route path='*' component={Page404} />
            </Switch>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;*/
