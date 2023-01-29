import Container from "../../../../reusables-components/container/container";
import forgetPassword from "../../../../assets/images/resetPassword.png"
import "./resetPassword.css";
import resetBox from "../../../../assets/svgs/resetFlow1.svg";
import { useState } from "react";
import InputFields from "../../../../reusables-components/input/input";
import RButtons from "../../../../reusables-components/buttons/button";
import { Link, useNavigate } from "react-router-dom";
import ModalBox from "../../../../reusables-components/modals/modal";

const ResetPassword = () => {

  const [modalState, setModalState] = useState(false);
  const [data, setData] = useState("");

  const parentStyles = {minWidth :"100%", minHeight : "100%", top: 0, left:0, }

  const childStyles = { width: "20rem", height: "5rem", top: "40%", left: "18%" }

  const navigate = useNavigate()
 
  const handleChange = (event) => {
    event.preventDefault();
    let value = event.target.value
    setData(value)
  }
  const handleModalclose = (e) => {
    e.preventDefault();
    setModalState(true);
    setTimeout(() => navigate("/get-otp"), 2000)

  };

const handleFalseModal = (e) => {
  e.preventDefault();
  console.log("hi");
}

  

    return (
      <Container
        images={<img style={{ width: "100%" }} src={forgetPassword} alt="forgetPassword" />}
        forms={
            <>
            <form>
              { <ModalBox Parent_styles={parentStyles} Child_styles={childStyles} 
                 handleClick={handleFalseModal}>
                <p>check your mail for your OTP number</p>
              </ModalBox>}
            <div className="reset-password-box">
              <p>Reset Password</p>
                  <object data={resetBox} width="100px"></object>
              <p>Enter Email Address to reset Password</p>
              <InputFields name={"emailAddress"} value={data} handleChange={handleChange} holder={"Email Address"}/>
            </div>
                 <RButtons handleAction={handleModalclose} ><p>Next</p></RButtons>
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

