import Container from "../../../../reusables-components/container/container";
import "./otp.css";
import imageTwo from "../../../../assets/images/resetPassword.png";
import resetLine from "../../../../assets/svgs/resetFlow2.svg";
import PasswordBox from "../../../../reusables-components/splitInput/passwordInput";
import { useState } from "react";
import RButtons from "../../../../reusables-components/buttons/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ModalBox from "../../../../reusables-components/modals/modal";

const EnterOTPPage = () => {

  const location = useLocation();

  const [password, setPassword] = useState("");
  const [modalState, setModalState] = useState(false);
  const parentStyles = {minWidth :"100%", minHeight : "100%", top: 0, left:0, }
  const childStyles = { width: "20rem", height: "5rem", top: "40%", left: "18%" }
  const navigate = useNavigate();

      const url = "https://b6b1-154-113-161-131.eu.ngrok.io/api/v1/registration/confirm";

    const handleChange = (event) => {
        let value = event.target.value + "";
        setPassword(prevValue => prevValue + value);
        console.log(password);
    }

      const checkMailInput = () => {
        return password !== "";
      };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!checkMailInput()) return alert("field cannot be empty")

      const passwordRegData = {
        token: password,
        emailAddress: location.state.mail
      }; 
      axios.post(url, passwordRegData )
        .then(res => {
          console.log(passwordRegData);
          if (res.status === 200){
            console.log(res);
            setModalState(true);
            setTimeout(() => navigate("/new-password", {state:{mail:location.state.mail}}), 2000);
          }
        })
        .catch(err => console.log(err));

    }

    return (
      <Container
        images={<img style={{ width: "100%" }} src={imageTwo} alt="reset_bg" />}
        forms={
          <>
            <form>
             {modalState && <ModalBox Parent_styles={parentStyles} Child_styles={childStyles} >
                <p>success</p>
              </ModalBox>}
              <div className="enter-otp-form">
                <object data={resetLine} style={{ width: "100px" }}></object>   
                <p>Enter your OTP Number</p>
                <PasswordBox handleChange={handleChange} />
                <RButtons handleAction={handleSubmit}>
                    <p>Continue</p>
                </RButtons>
                 <div style={{textAlign: "right", fontFamily:"Roboto", }}><p>Cancel</p></div>
              </div>
            </form>
          </>
        }
      />
    );
}

export default EnterOTPPage;