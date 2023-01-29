import LoginImage from "../../../../assets/images/webpix.png";
import Container from "../../../../reusables-components/container/container"
import InputFields from "../../../../reusables-components/input/input";
import RButtons from "../../../../reusables-components/buttons/button";
import './login.css';
import { useState } from "react";



const LoginPage = () => {

    const [loginData, setLoginResponse] = useState({
        email:"",
        password:"",
    });

    const handleChange = (event) => {
            const {name, value} = event.target;  
            setLoginResponse(prevValue => {
                return{...prevValue, [name]:value}
            })
            console.log(loginData)
    }

    return(
        <>
        <Container 
        images={<img src={LoginImage} style={{width:"100%"}} alt="login-BG" />}
        forms={
            <>
            <form>
                <div className="login-page">
                    <h2 className="welcome">Welcome Back!</h2>
                    <p className="dashB">Login into Dashboard</p>

                    <InputFields name={"email"} type={"email"} value={loginData.email} holder={"Email:"}handleChange={handleChange}/>
                    <InputFields name={"password"} type={"password"} value={loginData.password} holder={"Password:"} handleChange={handleChange}/>

                    <div className="me">  
                    <input className="box" type= "checkbox"/>                                       
                          <p className="remember">Remember me</p>
                          <p><span>i</span>Forgot Password</p>

                    </div>

                    <RButtons><p>Login</p></RButtons>

                    <div className="dont">
                        <p className="dontText">Don't have an Account?</p>
                        <a className="Up" href="registration-page-one">Sign UP</a>
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