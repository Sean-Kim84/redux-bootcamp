// Higher order Component - A component that renders other Component
// Reuse code
// Render hijacking
// Prop mainputation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrapComponent) => { // higher Order Component
  return (props) => ( // spread operator를 사용하여 props를 받아올 수 있다
    <div>
      {props.isAdmin && <p>This is Private Info.</p>} 
      <WrapComponent {...props} />
    </div>
  )
};

const requireAuthentication = (WrapComponent) => { // higher Order Component
  return(props)  => (
    <div>
      {props.isAuthenticated ? (<WrapComponent {...props}/>) : (
        <p>Please login to view this info</p>
      )}
    </div>
  )
}

// require Authentication

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} isAdmin={true} info="There are details"/>, document.getElementById('root'));