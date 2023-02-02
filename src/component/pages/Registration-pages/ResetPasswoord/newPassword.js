import Container from "../../../../reusables-components/container/container";
import forgetPassword from "../../../../assets/images/resetPassword.png";
import "./resetPassword.css";
import resetBox from "../../../../assets/svgs/resetFlow1.svg";
import { useState } from "react";
import InputFields from "../../../../reusables-components/input/input";
import RButtons from "../../../../reusables-components/buttons/button";
import { Link, useNavigate } from "react-router-dom";
import ModalBox from "../../../../reusables-components/modals/modal";
import axios from "axios";

const EnterNewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [modalState, setModalState] = useState(false);

  const parentStyles = {minWidth :"100%", minHeight : "100%", top: 0, left:0, }
  const childStyles = { width: "20rem", height: "5rem", top: "40%", left: "18%" }

  const navigate = useNavigate();


    const checkMailInput = () => {
      return newPassword !== "";
    };

    const handleChange = (e) => {
        e.preventDefault();
        let val = e.target.value;
        setNewPassword(val);
      };

    const handleSubmit = (e) => {
      if (!checkMailInput()) return alert("Field can't be empty!");
      e.preventDefault();

      axios
        .post("  http://localhost:3000/RESETPASSWORD", newPassword)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));

      setModalState(true);
      setTimeout(() => navigate("/login-page"), 2000);
    };

  

  return (
    <Container
      images={<img style={{ width: "100%" }} src={forgetPassword} alt="forgetPassword" /> }
      forms={
        <>
          <form>
                {modalState && <ModalBox Parent_styles={parentStyles} Child_styles={childStyles} >
                <p>success</p>
              </ModalBox>}
            <div className="reset-password-box">
             <div style={{marginBottom: "40%"}}></div>
              <p>Enter New Password</p>
              <InputFields name={"password"} type={"password"}  value={newPassword}  handleChange={handleChange}  holder={"Enter new Password"} />
            </div>
            <RButtons handleAction={handleSubmit  }>
              <p>Reset</p>
            </RButtons>
          </form>
          <Link to={"/login-page"}>
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
