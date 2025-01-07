/*
 *
 * Admin
 *
 */

import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import AccountMenu from '../AccountMenu';
import Page404 from '../../Common/Page404';
import Review from '../../../containers/Review';
import CreateRoles from '../../../containers/CreateRole/CreateRole';

import Account from '../../../containers/Account';


const Admin = props => {
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
              
              <Route path='*' component={Page404} />
            </Switch>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
