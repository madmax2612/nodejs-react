import React, { useEffect, useState } from 'react';
import './UI.css';

import _ from 'lodash'
import { MyErrorModal } from './errormodal';
import {
    BrowserRouter as Router,
    Redirect,
} from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form/dist/react-hook-form.ie11'
import { LoginApi, RegisterApi } from './service/service';
const Login = function Login() {

    const [data, setData] = useState({})
    const [error, setError] = useState(false);
    const { register, handleSubmit, errors } = useForm()
    const [signup, setSignUp] = useState(false)
    // const [redirect, setRedirect] = useState(false);
    // const [errorData, setErrorData] = useState(null);
    // const [status, setStatus] = useState(null)
    const [show, setShow] = useState(false)
    const [token, setToken] = useState(sessionStorage.getItem("token"))
    const [redirect, setRedirect] = useState(false);
    const [status, setStatus] = useState(false);
    const [login, setLogin] = useState(false);


    const onSubmitRegister=function onSubmitRegister(data,e){
        e.preventDefault();
        console.log(data);
      
            try {
                RegisterApi(data).then((res) => {
                    console.log(res.data)
                    setStatus(true);
                }
                ).catch((err) => {
                    console.log(err.message)
                })
            }
            catch (e) {
                console.log(e.message)
            }
        
    }


    const onSubmit = function onSubmit(data, e) {
        console.log(e)
        e.preventDefault();
        console.log(data);

       


        let isCancelled = false;
         
                
                LoginApi(data).then((res) => {

                    console.log(res.data.token);

                    if (res.data.status === 'Ok') {
                        setRedirect(true);
                    }


                    setToken(localStorage.setItem("token", JSON.stringify(res.data.token)))

                }).catch((err) => {
                    setError(true)
                    console.log(err.message)
                })
            

    }
  

    if (redirect) {
        return (<Redirect to="/App" />)
    }

    //     if(name==='Admin'){
    //         setRedirect(true);
    //    }



    const cancelServerErrorModal = function cancelServerErrorModal() {
        setError(false);
        setSignUp(false);
        setLogin(false)
    }


    return (
        <div>
            {status &&
                <MyErrorModal title="Register" positiveActionText={"close"} content="you've been succesfully Registered" redirect={cancelServerErrorModal} />
            }
            {error &&
                <MyErrorModal title="Incorrect Credentials" positiveActionText={"close"} content="kindly enter the right password!" redirect={cancelServerErrorModal} />
            }

            {!signup ?
                <div className="middleCenterClass">
                    <div className="ui segment">
                        <div className="formContent">

                            <form className="ui form" onSubmit={handleSubmit(onSubmit)}>

                                <div className="field">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Username" ref={register({required: true })} />
                                </div>
                                {
                                    errors && errors.email ? <div className="ui one  grid column row errorDiv">
                                        <div className="errorTxt column">
                                            <i className="red exclamation triangle icon"></i> User Name is required!!
                                    </div>
                                    </div>
                                        : null}

                                <div className="field">
                                    <label>Password</label>
                                    <input type="password" name="password" placeholder="Password" ref={register({ required: true })} />
                                </div>

                                {
                                    errors && errors.password ? <div>  <div className="ui one  grid column row errorDiv">
                                        <div className="errorTxt column">
                                            <i className="red exclamation triangle icon"></i> Password is required!!
                                     </div>
                                    </div>
                                        <div className="ui hidden divider"></div>
                                    </div>
                                        : null}

                                <button className="ui primary button" disabled={show}>
                                    Login
                            </button>
                                <button className="ui button" onClick={() => setSignUp(true)}>
                                    Sign Up
                            </button>
                            </form>
                        </div>
                    </div>
                </div>

                :

                ///signup form  
                <div className="middleCenterClass">
                    <div className="ui segment">
                        <div className="formContent">
                            <form className="ui form" onSubmit={handleSubmit(onSubmitRegister)}>
                            <div className="ui grid ">
                          <div className="ui row two column wide">
                           <div className="column">
                                <div className="field">
                                    <label>First Name</label>
                                    <input type="text" name="first_name" placeholder="First Name" ref={register({ required: true })} />
                                </div>
                                {
                                    errors && errors.first_name ? <div className="ui one  grid column row errorDiv">
                                        <div className="errorTxt column">
                                            <i className="red exclamation triangle icon"></i> First Name is required!!
                                 </div>
                                    </div>
                                        : null}
                                </div>
                           <div className="column">
                                <div className="field">
                                    <label>Last Name</label>
                                    <input type="text" name="last_name" placeholder="Last Name" ref={register({ required: true })} />
                                </div>
                                {
                                    errors && errors.last_name ? <div className="ui one  grid column row errorDiv">
                                        <div className="errorTxt column">
                                            <i className="red exclamation triangle icon"></i> Last Name is required!!
                                 </div>
                                    </div>
                                        : null}
                            </div>
                        </div>
                                <div className="ui row two column wide">
                                <div className="column">
                                <div className="field">
                             <label>Email Address</label>
                             <input type="text" name="email" placeholder="Username" ref={register({pattern:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, required: true })} />
                         </div>
                         {
                            errors &&  errors.email ? <div className="ui one  grid column row errorDiv">
                                 <div className="errorTxt column">
                                     <i className="red exclamation triangle icon"></i> Email is required!!
                                 </div>
                             </div>
                                 : null} 
                                 </div>
                                 
                           <div className="column">           
                         <div className="field">
                             <label>Password</label>
                             <input type="password" name="password" placeholder="Password" ref={register({ required: true })} />
                         </div>
                         {
                             errors && errors.password ? <div>  <div className="ui one  grid column row errorDiv">
                                 <div className="errorTxt column">
                                     <i className="red exclamation triangle icon"></i> Password is required!!
                                  </div>
                             </div>
                                 <div className="ui hidden divider"></div>
                             </div>
                                 : null}
                                 </div>
                                 </div>
                        <div className="ui row two column wide">
                           <div className="column">
                                <button className="ui primary button" onClick={()=>setLogin(true)} >
                                    Register
                         </button>
                         </div>
                         <div className="column">
                                <button className="ui button" onClick={() => setSignUp(false)}>
                                    cancel
                         </button>
                         </div>
                       </div>
                       </div>

                            </form>
                        
                    </div>
                </div>
                        </div>
            }
        </div>
    );

}
export default Login;