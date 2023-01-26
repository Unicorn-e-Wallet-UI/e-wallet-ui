import { useState } from "react";
import { Link } from "react-router-dom";
import imageOne from "../../../../../assets/images/KYC-One.png";
import RButtons from "../../../../../reusables-components/buttons/button";
import Container from "../../../../../reusables-components/container/container";
import InputFields from "../../../../../reusables-components/input/input";
import KycHeader from "../../../../../reusables-components/kyc-header/kycHeader";
import "./kycPageTwo.css";

const RegistrationPageTwo = () => {
    const [regData, setRegData] = useState({
        fullName:"",
        emailAddress:"",
        phoneNumber:"",
        relationship:"",
        bvn:""

    })

    const handleChange = (event) => {
            event.preventDefault();
            const {name, value} = event.target;
            setRegData(prevValue => {
                return {...prevValue, [name]:value}
            })
            console.log(regData)
    }

    return (
      <>
        <Container
          images={
            <img style={{ width: "100%" }} src={imageOne} alt="imageOne" />
          }
          forms={
            <>
            <KycHeader page={"2 of 3"} info={"More Page About you"}/>
            <div className="next-of-kin">Next of Kin</div>
            <InputFields name={"fullName"} value={regData.fullName} handleChange={handleChange} holder={"Full Name"}  />
            <InputFields name={"emailAddress"} value={regData.emailAddress} handleChange={handleChange} holder={"Email Address"}  />
            <InputFields name={"phoneNumber"} value={regData.phoneNumber} handleChange={handleChange} holder={"Phone Number"}  />
            <InputFields name={"relationship"} value={regData.relationship} handleChange={handleChange} holder={"Relationship"}  />
            <div className="bvn">BVN</div>
            <InputFields name={"bvn"} value={regData.bvn} handleChange={handleChange} holder = {"BVN "} />
            <RButtons><p>Continue</p></RButtons>
            <Link to={"/registration-page-one"}>
                   <div className="prev">Prev</div>
            </Link>
         
            </>
          }
        />
      </>
    );
}

export default RegistrationPageTwo;