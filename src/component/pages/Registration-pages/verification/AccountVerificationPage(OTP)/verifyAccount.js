import Container from "../../../../../reusables-components/container/container";
import VerifyOTPImage from "../../../../../assets/images/signup.png"
import PasswordBox from "../../../../../reusables-components/splitInput/passwordInput";
import { useReducer, useState } from "react";
import RButtons from "../../../../../reusables-components/buttons/button";
import { useLocation, useNavigate } from "react-router-dom";
import axios, { HttpStatusCode } from "axios";
import ModalBox from "../../../../../reusables-components/modals/modal";

const reducer = (state, action) => {
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

    const navigate  = useNavigate();
    const location = useLocation();

    const [OTP, setOTP] = useState("");
    const [state, dispatch] = useReducer(reducer, {status:false, message: ""});
    // const [id, setId] = useState("");
    const parentStyles = {minWidth :"100%", minHeight : "100%", top: 0, left:0, }
    const childStyles = { width: "20rem", height: "5rem", top: "40%", left: "10%"}
    console.log(OTP);




// const url = "http://localhost:3000/OTP";
    const url = "https://b6b1-154-113-161-131.eu.ngrok.io/api/v1/registration/confirm";

    const handleChange = (e) => {
        e.preventDefault();
        let val = e.target.value;
        setOTP(prev => prev + val);
    }


    const handleSubmit = (e) => {
        const tokenData = {
          token: OTP,
          emailAddress: location.state.data,
        };
        console.log(tokenData);
        if (OTP.length !== 4) {
            alert("All boxes must be filled")
            return;
         }
        axios.post(url,tokenData )
        .then((res) => {
            console.log(res);
            if (res.status === 200){
                let id = res.data.data.userId;
                setTimeout( () =>   handleStatus(e, id), 5000);
                dispatch ({type: "SUCCESS"})
            } else{
              dispatch({type: "ERROR"});
              console.log("error");
              setTimeout(() => dispatch({ type: "LAST STATE" }), 3000);
            }
        })
        .catch((err) => console.log(err))
    }
        const handleStatus = (e, id) => {
          e.preventDefault();
          setTimeout( () =>  navigate("/registration-page-one", { state: { userId: id }}),  2000 );
        };

    return (
        <>
         <Container   
             images={<img src={VerifyOTPImage} style={{width:"110%"}} alt="Sigupimage"/>}
             forms={
                <>
                {state.status && <ModalBox Parent_styles={parentStyles} Child_styles={childStyles} handleAction={handleStatus}>
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