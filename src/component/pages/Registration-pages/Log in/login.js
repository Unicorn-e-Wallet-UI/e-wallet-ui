import LoginImage from "../../../../assets/images/webpix.png";
import Container from "../../../../reusables-components/container/container"
import InputFields from "../../../../reusables-components/input/input";
import RButtons from "../../../../reusables-components/buttons/button";
import './login.css';
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {

    const [loginData, setLoginResponse] = useState({
        emailAddress:"",
        password:"",
    });

    const loginUrl = "https://ff2b-154-113-161-131.eu.ngrok.io/api/v1/user/login";

    const handleChange = (event) => {
            const {name, value} = event.target;  
            setLoginResponse(prevValue => {
                return{...prevValue, [name]:value}
            })
            console.log(loginData)
    }

    const handleLogin = (e) => {
        e.preventDefault();

        axios.post(loginUrl, loginData)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return(
        <>
        <Container 
        images={<img src={LoginImage} style={{width:"110%"}} alt="login-BG" />}
        forms={
            <>
            <form>
                <div className="login-page">
                    <h2 className="welcome">Welcome Back!</h2>
                    <p className="dashB">Log in to your Dashboard</p>
                    
                    <div className="login-input-field">
                        <InputFields name={"emailAddress"} type={"email"} value={loginData.email} holder={"Email:"}handleChange={handleChange}/>
                        <p></p>
                        <p></p>
                        <InputFields name={"password"} type={"password"} value={loginData.password} holder={"Password:"} handleChange={handleChange}/>
                    </div>

                    <div className="me">  
                    <label> 
                        <input className="box" type= "checkbox"/>  
                        <span>Remember me</span>
                    </label>                                     
                          <p><strong>i</strong>Forgot Password</p>
                    </div>

                    <RButtons handleAction={handleLogin}><p>Login</p></RButtons>

                    <div className="dont">
                        <p className="dontText">Don't have an Account?</p>
                        <a className="Up" href="signup-page">Sign Up</a>
                    </div>
                    
                    
                </div>
            </form>
            </>
        }
        />
        
        </>
    )
}

export default LoginPage;