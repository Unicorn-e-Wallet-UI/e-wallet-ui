import Container from "../../../../reusables-components/container/container";
import forgetPassword from "../../../../assets/images/resetPassword.png"
import "./resetPassword.css";
import PasswordBox from "../../../../reusables-components/splitInput/passwordInput";
import resetBox from "../../../../assets/svgs/resetFlow1.svg";
import { useState } from "react";
import InputFields from "../../../../reusables-components/input/input";
import RButtons from "../../../../reusables-components/buttons/button";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {

  const [data, setData] = useState("");
  const navigate = useNavigate()
 
  const handleChange = (event) => {
    event.preventDefault();
    let value = event.target.value
    setData(value)
    navigate("/get-otp")
     console.log(data);
  }
  

    return (
      <Container
        images={<img style={{ width: "100%" }} src={forgetPassword} alt="forgetPassword" />}
        forms={
            <>
            <form>
            <div className="reset-password-box">
              <p>Reset Password</p>
              <object data={resetBox} width="100px"></object>
              <p>Enter Email Address to reset Password</p>
              <InputFields name={"emailAddress"} value={data} handleChange={handleChange} holder={"Email Address"}/>
            </div>
                 <RButtons handleAction={handleChange}><p>Next</p></RButtons>
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



// handle state for split check field

  // const [inputState, setInputState] = useState("");
  // console.log(inputState);
  // const handleChange = (event) => {
  //   let value =  event.target.value + " ";
  //   setInputState(prevValue => prevValue + value);
  // }
