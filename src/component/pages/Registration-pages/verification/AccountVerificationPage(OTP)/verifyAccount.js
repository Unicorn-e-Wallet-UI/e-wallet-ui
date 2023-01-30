import Container from "../../../../../reusables-components/container/container";
import VerifyOTPImage from "../../../../../assets/images/signup.png"
import PasswordBox from "../../../../../reusables-components/splitInput/passwordInput";
import { useState } from "react";
import RButtons from "../../../../../reusables-components/buttons/button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ModalBox from "../../../../../reusables-components/modals/modal";

const VerifyAccount = () => {

    const [OTP, setOTP] = useState("");
    const [modalStatus, setModalStatus] = useState(false);
    const navigate  = useNavigate();
    const location = useLocation();

    const parentStyles = {minWidth :"100%", minHeight : "100%", top: 0, left:0, }
    const childStyles = { width: "20rem", height: "5rem", top: "40%", left: "10%"}
    console.log(OTP);
    const url = "http://localhost:3000/OTP";

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
          email: location.state.data,
        };
        if (OTP.length !== 4) {
            alert("All boxes must be filled")
            return;
        }
        axios.post(url,tokenData )
        .then((res) => {
            if (res.status === 201){
              setModalStatus(true);
              console.log(tokenData);
              handleStatus(e);
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
                {modalStatus && <ModalBox Parent_styles={parentStyles} Child_styles={childStyles} handleClick={handleStatus}>
                    <p>Your Account has been Successfully Verified</p>
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