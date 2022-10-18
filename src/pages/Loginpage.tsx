import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import '../styles.css';
import { Link, Route } from 'react-router-dom';
import Homepage from './Homepage';
import PrivateRoute from '../helpers/PrivateRoute';

const Nav = () => {

    const {keycloak, initialized} = useKeycloak();
    return(
        <div>
        <div className="background-login">
        <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card-login card">
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" className="img-fluid image-login" />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1 justify-content-center">
                    <i className="p-4 login-logo me-3"></i>
                    <span className="h1 fw-bold mb-0">Musical</span>
                  </div>
                  
                  {!keycloak.authenticated && (
                   <h5 className="pb-4 pt-3 sign-in fw-semibold text-center">Sign into your account</h5>
                 )}
                 
                 {!!keycloak.authenticated && (
                    <PrivateRoute>
                      <Link to={"./Discover"} className="mt-4 btn btn-secondary btn-lg d-grid text-decoration-none text-center"> Welcome to Musical </Link>
                    </PrivateRoute>
                  )}

                  <div className="pt-3 d-grid gap-5">
                    {!keycloak.authenticated && (
                   <button
                     type="button"
                     className="btn btn-dark btn-lg"
                     onClick={() => keycloak.login()}
                   >
                     Login
                   </button>
                 )}

                {!!keycloak.authenticated && (
                   <button
                     type="button"
                     className="btn btn-dark btn-lg mt-1"
                     onClick={() => keycloak.logout()}
                   >
                     Logout
                   </button>
                 )}

                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
        </div>
    )
}

export default Nav;