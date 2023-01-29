import { useState } from "react"
import imageOne from "../../../../../assets/images/KYC-One.png";
import Container from "../../../../../reusables-components/container/container";
import InputFields from "../../../../../reusables-components/input/input";
import KycHeader from "../../../../../reusables-components/kyc-header/kycHeader";
import { Link } from "react-router-dom";
import "./kycPageOne.css"
import RegistrationPageTwo from "../kycFormsPageTwo/kycPageTwo";

const RegistrationPageOne = () => {

  const [regData, setRegData] = useState({
    identification:"",
    kyc: "",
    address: "",
    cardName: "",
    cardNumber:"",
    expiryDate:"",
    cvv:""
  })
  
const [selectChange, setSelectChange] = useState("NIN");

const handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    setRegData(prevValue => {
      return {...prevValue, "identification": selectChange}
     } )
    setRegData(prevValue => {
      return {...prevValue, [name]:value}
    })

    console.log(regData)
  }

  const handleSelectChange = (event) => {
    setSelectChange(event.target.value)
  }

    return (
      <>
      {false && <RegistrationPageTwo data={regData} />}
        <Container
          images={
            <img style={{ width: "100%" }} src={imageOne} alt="imageOne" />
          }
          forms={
            <>
            <KycHeader page={"1 of 3"} info={"Kindly Complete Your Registration"} />
              <form>
                <div className="kyc-form">
                  <span>KYC</span>
                  <p>Select a Form of Identification</p>
                  <select value={selectChange} onChange={handleSelectChange}>
                    <option value="NIN">NIN</option>
                    <option value="Driver License">Driver's License</option>
                    <option value="Voters Card">Voters Card</option>
                  </select>
                  <InputFields name={"address"} value={regData.address} handleChange={handleChange} holder={"Address"} />
                </div>
                <div className="add-cards">
                  <span>Add Cards</span>
                  <span>+</span>
                  <InputFields name={"cardName"} value={regData.cardName} handleChange={handleChange} holder={"Card Name"} />
                  <InputFields name={"cardNumber"} value={regData.cardNumber} handleChange={handleChange} holder={"Card Number"}/>
                  <InputFields name={"expiryDate"} value={regData.expiryDate} handleChange={handleChange} holder={"Exp. Date"} />
                  <InputFields name={"cvv"} value={regData.cvv} handleChange={handleChange} holder={"CVV"}/>
                </div>
              </form>

              <div className="next-page2">
                   <Link to={"/registration-page-two"}> Next</Link>        
               </div>
            </>
          }
        />
      </>
    );
}


export default RegistrationPageOne;
