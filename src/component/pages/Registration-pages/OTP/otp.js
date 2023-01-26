import Container from "../../../../reusables-components/container/container";
import "./otp.css";
import imageTwo from "../../../../assets/images/resetPassword.png";
import resetLine from "../../../../assets/svgs/resetFlow2.svg";
import PasswordBox from "../../../../reusables-components/splitInput/passwordInput";
import { useState } from "react";
import RButtons from "../../../../reusables-components/buttons/button";
import { Link, useNavigate } from "react-router-dom";

const EnterOTPPage = () => {

    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        let value = event.target.value + "";
        setPassword(prevValue => prevValue + value);
        navigate("/new-password")
        console.log(password)

    }

    return (
      <Container
        images={<img style={{ width: "100%" }} src={imageTwo} alt="reset_bg" />}
        forms={
          <>
            <form>
              <div className="enter-otp-form">
                <object data={resetLine} style={{ width: "100px" }}></object>   
                <p>Enter your OTP Number</p>
                <PasswordBox handleChange={handleChange} />
                <RButtons handleAction={handleChange}><p>Continue</p></RButtons>
                 <div style={{textAlign: "right", fontFamily:"Roboto", }}><p>Cancel</p></div>
           
              </div>
            </form>
          </>
        }
      />
    );
}

export default EnterOTPPage;