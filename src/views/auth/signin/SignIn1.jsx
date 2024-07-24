import React from 'react';

// react-bootstrap
import { Card} from 'react-bootstrap';


import AuthLogin from './JWTLogin';

// assets
import logoDark from '../../../assets/images/logo-dark.png';

// ==============================|| SIGN IN 1 ||============================== //

const Signin1 = () => {



  return (
    <React.Fragment>
   
      <div className="auth-wrapper">
        <div className="auth-content">
          <Card className="borderless text-center">
            <Card.Body>
              <img src={logoDark} alt="" className="img-fluid mb-4" />
              <AuthLogin />
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin1;
