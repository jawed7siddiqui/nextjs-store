import PropTypes from "prop-types";
import React, { Fragment,useState } from "react";
import MetaTags from "react-meta-tags";
import { Link, useHistory } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import axios from 'axios'
import { ToastProvider, useToasts } from 'react-toast-notifications';

const LoginRegister = ({ location }) => {

  const navigate = useHistory();
  const { addToast } = useToasts();
  const { pathname } = location;

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:""

  });

  

  const handleLogin = () =>{

      axios({
        url:  process.env.REACT_APP_API_URL ,
        method: 'post',
        data: {
          query: `
          mutation {
            login(email: "${formData.email}", password: "${formData.password}") {
                token
                user {
                    id
                    role_id
                    name
                    phone
                    email
                    username
                    status
                    role_id
                    created_at
                    updated_at
                }
            }
        }
            `
        }
      }).then((result) => {
        
        if(result.data.data.login.user.role_id == 6){
          result.data.data.login.user.role = 'admin'
        }
  
        window.localStorage.setItem('accessToken', result.data.data.login.token)
        console.log(result.data)
    
        window.localStorage.setItem('userData', JSON.stringify(result.data.data.login.user))
     
         addToast('Login Successfully', { appearance: 'success' });
         setTimeout(
          () =>         navigate.push("/my-account")
          , 
          1000
        );

      }).catch(err => {
       
      })

  }


  const handleRegister = () =>{
    
    axios
    .post( process.env.REACT_APP_API_URL , {
      query: `

      mutation {
        register(data: {
                  name: "${formData.name}",
                  phone: "9142627909",
                  email: "${formData.email}",
                  username: "${formData.name}",
                  password: "${formData.password}",
        }) {
            token
            user {
                id
                role_id
                name
                phone
                email
                username
                status
                created_at
                updated_at
            }
        }
    }
   
        `
    })
    .then(res => {
      if (res.data.errors) {
        //
      } else {

        window.localStorage.setItem('accessToken', res.data.data.register.token)
    
        window.localStorage.setItem('userData', JSON.stringify(res.data.data.register.user))
     
        console.log(res)

        addToast('Registration Successfully', { appearance: 'success' });

        setTimeout(
          () =>         navigate.push("/my-account")
          , 
          1000
        );

      }
    })
    .catch(err => {
       
    })

  }


  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Login</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login Register
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="email"
                                placeholder="email"
                                value={formData.email}
                                onChange={(event) =>
                                  setFormData({ ...formData, email: event.target.value })
                                }
                              />
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={(event) =>
                                  setFormData({ ...formData, password: event.target.value })
                                }
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                <button type="button" onClick={handleLogin}>
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={(event) =>
                                  setFormData({ ...formData, name: event.target.value })
                                }
                              />

                              <input
                                name="email"
                                placeholder="Email"
                                type="email"
                                value={formData.email}
                                onChange={(event) =>
                                  setFormData({ ...formData, email: event.target.value })
                                }
                              />

                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={(event) =>
                                  setFormData({ ...formData, password: event.target.value })
                                }
                              />
                            
                              <div className="button-box">
                                <button type="button" onClick={handleRegister}>
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object
};

export default LoginRegister;
