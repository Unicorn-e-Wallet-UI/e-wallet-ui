import Container from "../../../../reusables-components/container/container";
import forgetPassword from "../../../../assets/images/resetPassword.png"
import "./resetPassword.css";
import resetBox from "../../../../assets/svgs/resetFlow1.svg";
import { useState } from "react";
import InputFields from "../../../../reusables-components/input/input";
import RButtons from "../../../../reusables-components/buttons/button";
import { Link, useNavigate } from "react-router-dom";
import ModalBox from "../../../../reusables-components/modals/modal";
import axios from "axios";

const ResetPassword = () => {

  const [emailData, setEmailData] = useState({emailAddress:""});
  
  const [modalState, setModalState] = useState(false);
  const parentStyles = {minWidth :"100%", minHeight : "100%", top: 0, left:0, }
  const childStyles = { width: "20rem", height: "5rem", top: "40%", left: "18%" }

  const navigate = useNavigate()

  const url = "https://b6b1-154-113-161-131.eu.ngrok.io/api/v1/registration/forgottenPassword";
 
  const handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;

    setEmailData(prevValue => {
      return {...prevValue, [name]: value}
    })

    console.log(emailData);
  }

  const checkMailInput = () => {
      return emailData !== "";
  }

  const handleSubmit = (e) => {
    if (!checkMailInput()) return alert("Field can't be empty!")
    e.preventDefault();
    
      axios.post(url, emailData)
        .then(res => {
          console.log(res);
          if (res.status === 200){
            console.log(res);
             setModalState(true);
            setTimeout(() => navigate("/get-otp", {state:{mail:emailData.emailAddress}}), 2000);
          }
        }
        )
        .catch(err => console.log(err));
        
     
      

  };


  

    return (
      <Container
        images={<img style={{ width: "100%" }} src={forgetPassword} alt="forgetPassword" />}
        forms={
            <>
            <form>
                  <object emailData={resetBox} width="100px"></object>
              {modalState && <ModalBox Parent_styles={parentStyles} Child_styles={childStyles} >
                <p>check your mail for your OTP number</p>
              </ModalBox>}
            <div className="reset-password-box">
              <p>Reset Password</p>
              <p>Enter Email Address to reset Password</p>
              <InputFields name={"emailAddress"} value={emailData.emailAddress} handleChange={handleChange} holder={"Email Address"}/>
            </div>
                 <RButtons handleAction={handleSubmit} ><p>Next</p></RButtons>
            </form>
            <Link to={" "}>
            <div style={{textAlign: "right", fontFamily:"Roboto", }}><p>Cancel</p></div>
            </Link>
            </>
        }
      />
    );
}

export default ResetPassword;

