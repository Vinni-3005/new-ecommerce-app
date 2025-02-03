/*
 *
 * Admin
 *
 */

import React, {useState} from 'react';


import { Row, Col } from 'reactstrap';
import { FaTimes } from 'react-icons/fa';
import { Route, Switch, useHistory } from 'react-router-dom';
import AccountMenu from '../AccountMenu';
import Page404 from '../../Common/Page404';
import Review from '../../../containers/Review';
import CreateRoles from '../../../containers/CreateRole/CreateRole';
import Product from '../../../containers/Product';
import Account from '../../../containers/Account';
import Category from '../../../containers/Category';
import WishList from '../../../containers/WishList';
import Users from '../../../containers/Users';
import AssignRole from '../../../containers/AssignRoles';



//import Brand from '../../../containers/'

const Admin = ({permissions}) => {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [selectedLayout, setSelectedLayout] = useState('block');
  const history = useHistory();
  

  const componentMap = {
    AccountSecurity : <Account/>,
    //products: <Product/>,
    //brands:<Brand/>,
    //reviews:<Review/>,
    users: <Users/>,
    category: <Category/>,   
    wishlist: <WishList/>,
    createroles: <CreateRoles/>,  
    assignroles: <AssignRole/>  
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
  } else if (component === 'product') {
    history.push('/dashboard/products');
  }

};


const handleLayoutSelect =(layout) => {
  setSelectedLayout(layout);
};

return (
  <div className="admin">
    {/*Layout selector */}
    <Row>
      <Col xs='12'>
        <h3 className='toggle-text'>Select Grid Layout</h3>
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
        <h3 className='toggle-text'>Select Components</h3>
        {permissions.map((permission) => (
          <label key={permission} style={{ marginRight: '10px' }} className='toggle-text'>
          
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

export default Admin;




























































































// import React, {useState} from 'react';
// import { useEffect } from 'react';


// import { FaTimes } from 'react-icons/fa';
// import { Row, Col } from 'reactstrap';
// import { Route, Switch } from 'react-router-dom';
// import AccountMenu from '../AccountMenu';
// import Page404 from '../../Common/Page404';
// import Review from '../../../containers/Review';
// import CreateRoles from '../../../containers/CreateRole/CreateRole';
// import Product from '../../../containers/Product';
// import Account from '../../../containers/Account';
// import Category from '../../../containers/Category';
// import { useHistory } from 'react-router-dom';
// import AssignRole from '../../../containers/AssignRoles';
// import Users from '../../../containers/Users';
// //import wishList from '../../../containers/WishList';
// import WishList from '../../../containers/WishList';

// import Brand from '../../../containers/Brand';
// import AccountSecurity from '../../../containers/AccountSecurity';

// const Admin = ({permissions , updatedComponents}) => {
//   const [selectedComponents, setSelectedComponents] = useState([]);
//   const [selectedLayout, setSelectedLayout] = useState('block');
//   const history = useHistory();

//   const componentMap = {
//     AccountSecurity : <Account/>,
//     products: <Product />,
//     category: <Category />, 
//     brand: <Brand />,
//     users : <Users/>,
//     reviews:<Review/>,
//     wishlist : <WishList/>,
//     createroles: <CreateRoles/>,  
//     assignroles: <AssignRole/>      
//   };

//   useEffect(() => {
//     console.log("component unmounted", selectedComponents);
//   }, [selectedComponents]);


//   const layouts = [
//     {
//       id :'block',
//       name:'Block Grid',
//     },
//     {
//       id:'column',
//       name:'Column Grid',
//     },
//     {
//       id:'modular',
//       name:'Modular Grid',
//     },
//     {
//       id:'hierarchial',
//       name:'Hierarchial Grid',
//     }
//   ];




//   const handleCheckboxChange = (component) => {
//     setSelectedComponents((prev) => { 
//       const updatedComponents = prev.includes(component) 
//        ? prev.filter((item) => item !== component) : [...prev, component]
  
//       if (component === 'Category') {
//         history.push('/dashboard/category');
//       };
//     })

//     return updatedComponents;
//   };




// const  removeComponent = (component) => {
//   setSelectedComponents((prev) => prev.filter((item) => item !== component));
//   document.querySelector(`input[value="${component}"]`).checked = false;
// };


// const handleLayoutSelect =(layout) => {
//   setSelectedLayout(layout);
// };



// return (
//   <div className="admin">
//     <Row>
//       <Col xs='12'>
//         <h3 className='toggle-text'>Select Grid Layout</h3>
//         <div className="layout-options">
//           {layouts.map((layout) => {
//             return (
//             <div
//               key={layout.id}
//               className={`layout-card ${selectedLayout === layout.id ? 'selected' : ''}`}
//               onClick={() => setSelectedLayout(layout.id)}
//             >
//               <h4>{layout.name}</h4>
              
//             </div>
//             );
//           })}
//         </div>
//       </Col>
//     </Row>
//     {/*permissions as checkboxes*/}
//     <Row>
//       <Col xs="12"> 
//         <h3 className='toggle-text'>Select Components</h3>
//         {permissions.map((permission) => (
//           <label key={permission} style={{ marginRight: '10px' }} className='toggle-text'>
          
//             <input
//               type="checkbox"             
//               value={permission}
//               onChange={() => handleCheckboxChange(permission)}
//               style={{marginRight:'10px'}}
//             />
//             {permission}
//           </label>
//         ))}
//       </Col>
//     </Row>

//     <Row>
//       <Col xs="12">
//         <div className={`grid-container ${selectedLayout}`}>
//           {selectedComponents && selectedComponents.length > 0 ? 
//             selectedComponents.map((component) => (
//               <div key={component} className='grid-item'>
//                 <FaTimes className="close-icon" onClick={() => removeComponent(component)} />
//                 <span className="component-name">{component}</span>
//                 <div className="component-content">
//                   {componentMap[component] ? (
//                     React.cloneElement(componentMap[component], { key: component }) // 👈 Force re-render
//                   ) : (
//                     <p style={{ color: "red" }}>⚠️ Component "{component}" not found</p>
//                   )}
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </Col>
//     </Row>


//   </div>
// );
// };

// export default Admin;







// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import Page404 from '../../Common/Page404';
// import Review from '../../../containers/Review';
// import CreateRoles from '../../../containers/CreateRole/CreateRole';
// import Product from '../../../containers/Product';
// import Account from '../../../containers/Account';
// import Category from '../../../containers/Category';
// import AssignRole from '../../../containers/AssignRoles';
// import Users from '../../../containers/Users';
// import Brand from '../../../containers/Brand';
// import { FaTimes } from 'react-icons/fa';
// import { Row, Col } from 'reactstrap';

// const Admin = ({ permissions }) => {
//   const [selectedComponents, setSelectedComponents] = useState([]);
//   const [selectedLayout, setSelectedLayout] = useState('block');
//   const history = useHistory();

//   const componentMap = {
//     AccountSecurity: <Account />,
//     products: <Product />,
//     category: <Category />,
//     brand: <Brand />,
//     users: <Users />,
//     reviews: <Review />,
//     createroles: <CreateRoles />,
//     assignroles: <AssignRole />
//   };

//   const renderComponent = (componentName) => {
//     return componentMap[componentName] || <Page404 />;
//   };

//   const handleComponentSelection = (componentName) => {
//     if (!selectedComponents.includes(componentName)) {
//       setSelectedComponents([...selectedComponents, componentName]);
//     }
//   };

//   const handleLayoutChange = (event) => {
//     setSelectedLayout(event.target.value);
//   };

//   const removeComponent = (componentName) => {
//     setSelectedComponents(selectedComponents.filter(name => name !== componentName));
//   };

//   const handleCheckboxChange = (component) => {
//     setSelectedComponents((prev) => {
//       const newSelection = prev.includes(component)
//         ? prev.filter((item) => item !== component)
//         : [...prev, component];
//       return newSelection;
//     });
//   };

//   const layoutOptions = [
//     { id: 'block', name: 'Block' },
//     { id: 'column', name: 'Column Grid' },
//     { id: 'modular', name: 'Modular Grid' },
//     { id: 'hierarchial', name: 'Hierarchial Grid' }
//   ];

//   return (
//     <div>
//       <div>
//         <button onClick={() => handleComponentSelection('products')}>Products</button>
//         <button onClick={() => handleComponentSelection('brand')}>Brand</button>
//         <button onClick={() => handleComponentSelection('users')}>Users</button>
//         <button onClick={() => handleComponentSelection('reviews')}>Reviews</button>
//         <button onClick={() => handleComponentSelection('createroles')}>Create Roles</button>
//         <button onClick={() => handleComponentSelection('category')}>Category</button>
//         <button onClick={() => handleComponentSelection('assignroles')}>Assign Roles</button>
//         <button onClick={() => handleComponentSelection('AccountSecurity')}>Account Security</button>
//       </div>
//       <div>
//         <label>
//           Select Layout:
//           <select value={selectedLayout} onChange={handleLayoutChange}>
//             {layoutOptions.map(option => (
//               <option key={option.id} value={option.id}>
//                 {option.name}
//               </option>
//             ))}
//           </select>
//         </label>
//       </div>
//       <Row>
//         <Col xs="12">
//           <div className={`grid-container ${selectedLayout}`}>
//             {selectedComponents.map((component) => (
//               <div key={component} className="grid-item">
//                 <FaTimes className="close-icon" onClick={() => removeComponent(component)} />
//                 <span className="component-name">{component}</span>
//                 <div className="component-content">
//                   {renderComponent(component)}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Admin;

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
