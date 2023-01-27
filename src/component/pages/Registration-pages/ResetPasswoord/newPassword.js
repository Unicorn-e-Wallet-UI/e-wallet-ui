import Container from "../../../../reusables-components/container/container";
import forgetPassword from "../../../../assets/images/resetPassword.png";
import "./resetPassword.css";
import PasswordBox from "../../../../reusables-components/splitInput/passwordInput";
import resetBox from "../../../../assets/svgs/resetFlow1.svg";
import { useState } from "react";
import InputFields from "../../../../reusables-components/input/input";
import RButtons from "../../../../reusables-components/buttons/button";
import { Link, useNavigate } from "react-router-dom";

const EnterNewPassword = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    setData(value);
    console.log(data);
  };

  return (
    <Container
      images={<img style={{ width: "100%" }} src={forgetPassword} alt="forgetPassword" /> }
      forms={
        <>
          <form>
            <div className="reset-password-box">
              <object data={resetBox} width="100px"></object>
              <p>Enter New Password</p>
              <InputFields name={"emailAddress"}  value={data}  handleChange={handleChange}  holder={"Enter new Password"} />
            </div>
            <RButtons handleAction={handleChange}>
              <p>Reset</p>
            </RButtons>
          </form>
          <Link to={" "}>
            <div style={{ textAlign: "right", fontFamily: "Roboto" }}>
              <p>Cancel</p>
            </div>
          </Link>
        </>
      }
    />
  );
};

export default EnterNewPassword;

// handle state for split check field

// const [inputState, setInputState] = useState("");
// console.log(inputState);
// const handleChange = (event) => {
//   let value =  event.target.value + " ";
//   setInputState(prevValue => prevValue + value);
// }
