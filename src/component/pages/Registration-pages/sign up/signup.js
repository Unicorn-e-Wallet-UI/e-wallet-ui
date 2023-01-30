import SignUpImage from "../../../../assets/images/signup.png";
import Container from "../../../../reusables-components/container/container";
import InputFields from "../../../../reusables-components/input/input";
import RButtons from "../../../../reusables-components/buttons/button";
import { useState } from "react";
import axios from "axios";
import "./signup.css";
import ModalBox from "../../../../reusables-components/modals/modal";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {

    const navigate = useNavigate();
    const [signupData, setSignUpResponse] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    });

    const SignupUrl = "http://localhost:3000/Signup";

    const handleChange = (event) => {
        const {name, value} = event.target;  
        setSignUpResponse(prevValue => {
            return{...prevValue, [name]:value}
        })
        console.log(signupData)

 }
        const checkFieldData = () => {
            let getDataValues = Object.values(signupData);
            for (let vals of getDataValues) {
                if (vals === "") return false;
            }
            return true
        }

        const handleSignUp = (e) => {
          e.preventDefault();
          if (!checkFieldData()){
            alert("All fields must be filled")
            return false;
        }

        axios.post(SignupUrl, signupData)
            .then((res) =>  {
                if (res.status === 201){
                    console.log(res)
                    setModalStatus(true)
                    setTimeout(()=> navigate("/verify-account", {state: {data:signupData.email}}), 2000);
                }   
            })
            .catch((err) => console.log(err.status));
        };

    const parentStyles = {minWidth :"100%", minHeight : "99.2%", top: 0, left:0, }
    const childStyles = { width: "20rem", height: "5rem", top: "40%", left: "10%" }

    const [modal, setModalStatus] = useState(false);


    return(

         <>

         <div className="contain"> 
             <Container   
        
             images={<img src={SignUpImage} style={{width:"110%"}} alt="Sigupimage"/>}
             forms={
                <>
                <form>
                     {modal && <ModalBox Parent_styles={parentStyles} Child_styles={childStyles}>
                        <p>Kindly check your mail to see your OTP number for verification</p>
                    </ModalBox>}
                    <div className="signup-container">
                        <div className="signup-header">
                            <h2>Welcome Back!</h2>
                            <p>Sign up by entering the  information below</p>
                        </div>
                    <div className="signup-inputfields">
                            <InputFields name={"firstName"} type={"text"} value={signupData.firstName} holder={"First Name:"} handleChange={handleChange}/>
                            <InputFields name={"lastName"} type={"text"} value={signupData.lastName} holder={"Last Name:"} handleChange={handleChange}/>
                            <InputFields name={"email"} type={"email"} value={signupData.email} holder={"Email:"}handleChange={handleChange}/>
                            <InputFields name={"password"} type={"password"} value={signupData.password} holder={"Password:"} handleChange={handleChange}/>
                    </div>
                    <p></p>

                    <div className="login-reroute">
                        <p >Already have an Account?</p>
                        <a className="Up" href="login-page">Login</a>
                    </div>

                    <RButtons handleAction={handleSignUp} ><p>Sign Up</p></RButtons>


                    </div>
               </form>
                </>

             }
            
            />
            </div>

         </>

         
    )
}

export default SignUpPage;