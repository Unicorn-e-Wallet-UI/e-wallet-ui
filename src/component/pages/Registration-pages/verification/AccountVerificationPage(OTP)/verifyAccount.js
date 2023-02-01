import Container from "../../../../../reusables-components/container/container";
import VerifyOTPImage from "../../../../../assets/images/signup.png"
import PasswordBox from "../../../../../reusables-components/splitInput/passwordInput";
import { useReducer, useState } from "react";
import RButtons from "../../../../../reusables-components/buttons/button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ModalBox from "../../../../../reusables-components/modals/modal";

const reducer = (state,action) => {
    switch (action.type) {
        case "SUCCESS" :
            return {status: state.status = true , message: state.message = "Your account has been succesfully verified"}
        case "ERROR" :
            return {status: state.status = true, message: state.message = "Error verifying your account, kindly Retry!"}
        case "LAST STATE" :
             return {status: state.status = false, message: state.message = ""}
        default :
             return state;
    }
}

const VerifyAccount = () => {

    const [OTP, setOTP] = useState("");
    const [state, dispatch] = useReducer(reducer, {status:false, message: ""});
    const navigate  = useNavigate();
    const location = useLocation();

    const parentStyles = {minWidth :"100%", minHeight : "100%", top: 0, left:0, }
    const childStyles = { width: "20rem", height: "5rem", top: "40%", left: "10%"}
    console.log(OTP);

// const url = "http://localhost:3000/OTP";
    const url = "https://ff2b-154-113-161-131.eu.ngrok.io/api/v1/registration/confirm";

    const handleChange = (e) => {
        e.preventDefault();
        let val = e.target.value;
        setOTP(prev => prev + val);
    }

    const handleStatus = (e) => {
        e.preventDefault();
        setTimeout(() => navigate("/registration-page-one"),2000)
      }

    const handleSubmit = (e) => {
        const tokenData = {
          token: OTP,
          emailAddress: location.state.data,
        };
        if (OTP.length !== 4) {
            alert("All boxes must be filled")
            return;
         }
        axios.post(url,tokenData )
        .then((res) => {
            if (res.data.statusCode === 200){
                console.log(res);
                dispatch ({type: "SUCCESS"})
                setTimeout(() => handleStatus(e), 2000);
                console.log(tokenData);
            }else{
              dispatch({type: "ERROR"});
              console.log("error");
              setTimeout(() => dispatch({ type: "LAST STATE" }), 3000);
            }
        })
        .catch((err) => console.log(err))
    }

    return (
        <>
         <Container   
             images={<img src={VerifyOTPImage} style={{width:"110%"}} alt="Sigupimage"/>}
             forms={
                <>
                {state.status && <ModalBox Parent_styles={parentStyles} Child_styles={childStyles} handleClick={handleStatus}>
                    <p>{state.message}</p>
                </ModalBox>}
                <div style=
                {{marginTop:"45%", 
                padding: "0rem 1rem 1rem 8rem",
                
                }}>Enter your OTP number</div>
                <PasswordBox handleChange={handleChange} />
                <RButtons handleAction={handleSubmit}><p>Button</p></RButtons>
                </>
             } />
        </>
    )
}

export default VerifyAccount;