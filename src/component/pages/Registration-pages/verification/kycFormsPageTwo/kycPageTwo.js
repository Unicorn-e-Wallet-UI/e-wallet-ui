import { useState} from "react";
import { Link, useLocation } from "react-router-dom";
import imageOne from "../../../../../assets/images/KYC-One.png";
import RButtons from "../../../../../reusables-components/buttons/button";
import Container from "../../../../../reusables-components/container/container";
import InputFields from "../../../../../reusables-components/input/input";
import KycHeader from "../../../../../reusables-components/kyc-header/kycHeader";
import "./kycPageTwo.css";
import axios from "axios";
import ModalBox from "../../../../../reusables-components/modals/modal";

const RegistrationPageTwo = () => {

    const [regData, setRegData] = useState({
        fullName:"",
        emailAddress:"",
        phoneNumber:"",
        relationship:"",
        bvn:""
    })

  const parentStyles = {minWidth :"100%", minHeight : "100%", top: 0, left:0, }
  const childStyles = { width: "20rem", height: "5rem", top: "40%", left: "18%" }

    const location = useLocation()
    
    const handleChange = (event) => {
            event.preventDefault();
            const {name, value} = event.target;
            setRegData(prevValue => { 
                return {...prevValue, [name]:value}
            })
            console.log(regData)
    }

    const handleSubmit = (e) => {
      const buildRegData = {
        userId:"65226428729728792782",
        homeAddress: location.state.address,
        bvn:regData.bvn,
        nextOfKin: {
          nextOfKinFullName:regData.fullName,
          emailAddress:regData.emailAddress,
          phoneNumber:regData.phoneNumber,
          relationship:regData.relationship,
        },
        cardType:location.state.identification
      };
      
      e.preventDefault();
      console.log(regData)

      axios.post("http://localhost:3000/User", buildRegData)
      .then(data => console.log(data))
      .catch(err => console.log(err));
    }

    const handleFalseModal = (e) => {
      e.preventDefault();
      console.log("hi");
    };


    return (
      <>
        <Container
          images={
            <img style={{ width: "100%" }} src={imageOne} alt="imageOne" />
          }
          forms={
            <>
            <form>
           
            <KycHeader page={"2 of 3"} info={"More Page About you"}/>
             <ModalBox ParentStyles={parentStyles} Child_styles={childStyles} handleClick={handleFalseModal}>
              <div>success</div>
            </ModalBox>
            <div className="next-of-kin">Next of Kin</div>
            <InputFields name={"fullName"} value={regData.fullName} handleChange={handleChange} holder={"Full Name"}  />
            <InputFields name={"emailAddress"} value={regData.emailAddress} handleChange={handleChange} holder={"Email Address"}  />
            <InputFields name={"phoneNumber"} value={regData.phoneNumber} handleChange={handleChange} holder={"Phone Number"}  />
            <InputFields name={"relationship"} value={regData.relationship} handleChange={handleChange} holder={"Relationship"}  />
            <div className="bvn">BVN</div>
            <InputFields name={"bvn"} value={regData.bvn} handleChange={handleChange} holder = {"BVN "} />
            <RButtons handleAction={handleSubmit}><p>Continue</p></RButtons>
            <Link to={"/registration-page-one"}>
                   <div className="prev">Prev</div>
            </Link>
            </form>
         
            </>
          }
        />
      </>
    );
}

export default RegistrationPageTwo;