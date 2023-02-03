import { useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import imageOne from "../../../../../assets/images/KYC-One.png";
import RButtons from "../../../../../reusables-components/buttons/button";
import Container from "../../../../../reusables-components/container/container";
import InputFields from "../../../../../reusables-components/input/input";
import KycHeader from "../../../../../reusables-components/kyc-header/kycHeader";
import "./kycPageTwo.css";
import axios from "axios";
import ModalBox from "../../../../../reusables-components/modals/modal";
import { GETAPIDATA } from "../../../../../utils/list-all-banks";
import { VerifyBvn } from "../../../../../utils/verify-bvn";


const RegistrationPageTwo = () => {

  const parentStyles = {minWidth :"100%", minHeight : "100%", top: 0, left:0, }
  const childStyles = { width: "20rem", height: "5rem", top: "40%", left: "18%" }
  const navigate = useNavigate()
  
  const getAllBankURL = "https://api.paystack.co/bank?country=nigeria";
  const bvnlink = "https://api.paystack.co/bvn/match";
  const reqType = "GET";

  const [regData, setRegData] = useState({
      fullName:"",
      emailAddress:"",
      phoneNumber:"",
      relationship:"",
      bvn:"",
  })
   const url = "https://b6b1-154-113-161-131.eu.ngrok.io/api/v1/user/kyc";

  const [ModalStatus , setModalStatus] = useState(false);

  /*
  const [bankList,  setBankList] = useState([]);  
  const [bankName, setBankName] = useState("")
    const [bankCode, setBankCode] = useState();
    const [bvnDetails, setBvnDetails] = useState([]);
    
    console.log(`bank name at the outer scope ${bankName}`);

    const getBankCode = (bankName) => {
      let getBank = bankList.filter((banks) => banks.name === bankName);
      setTimeout(() => console.log(`bank code in getBankCode ${getBank[0].code}`), 2000);
      // return getBank[0].code;
    };

    useEffect(() => {
      // Get API Data for bank list
      GETAPIDATA(getAllBankURL, reqType, setBankList);
      console.log(`bank name has been changed to ${bankName} reflected in useEffect`);
    }, [bankName])


    useEffect(() => {
      console.log("bank code in use effect");
      // console.log(getBankCode(bankName));
      // let code  = getBankCode(bankName);
      // console.log(`bank code at useEffect ${code}`);
      // setBankCode(code);
      // console.log(getBankCode(bankName));     
    },[])

    const checkBVNStatus = () => {
      console.log(`bank code at checkBvn checkBVNStatus ${bankCode} `);
      console.log({actNo: regData.acctNo, bvn: regData.bvn, code: bankCode});
      VerifyBvn(bvnlink,regData.acctNo, regData.bvn, bankCode,setBvnDetails)
      console.log(bvnDetails);
    }
    */

    const location = useLocation()
    
    const handleChange = (event) => {
            event.preventDefault();
            const {name, value} = event.target;
            setRegData(prevValue => { 
                return {...prevValue, [name]:value}
            })
            console.log(regData)
    }

    /*
    const handleSelectBank = (event) => {
      setBankName(() => ( event.target.value))
      setTimeout(() => getBankCode(bankName), 3000); 
      console.log(bankCode);
      console.log(`bank name reflected in  handleSelect ${bankName}`);
      console.log(`bank code reflected in  handleSelect ${bankCode}`);
    }
    */
           
    const buildRegData = {
      userId: location.state.id,
      bvn: regData.bvn,
      nextOfKin: {
        nextOfKinFullName: regData.fullName,
        emailAddress: regData.emailAddress,
        phoneNumber: regData.phoneNumber,
        relationship: regData.relationship,
      },
      homeAddress: location.state.address,
      cardType: location.state.identification,
    };

      const checkRegData = () => {
        return (Object.values(regData).some(val => val === ""))
      }

    const handleSubmit = (e) => {
      
      console.log(buildRegData);

      if (checkRegData()) {
        alert("All field must be filled")
        return "false";
      }
      
      e.preventDefault();
      console.log(buildRegData)
      console.log(buildRegData.userId);

      axios.post(url, buildRegData)
      .then(res => {
        if (res.status === 200) {
          console.log("sent");
          setModalStatus(true);
          setTimeout(() => navigate("/login-page"), 2000);
        } else {
          alert("error");
        }
      })
      .catch(err => console.log(err));
    }


    return (
      <>
        <Container
          images={
            <img style={{ width: "100%" }} src={imageOne} alt="imageOne" />
          }
          forms={
            <>
            <form>
           
           {ModalStatus &&  <ModalBox Parent_styles={parentStyles} Child_styles={childStyles}>
              <div>success</div>
            </ModalBox>
          }
            <KycHeader page={"2 of 3"} info={"More Page About you"}/>
            
            <div className="next-of-kin">Next of Kin</div>
            <InputFields name={"fullName"} value={regData.fullName} handleChange={handleChange} holder={"Full Name"}  />
            <InputFields name={"emailAddress"} value={regData.emailAddress} handleChange={handleChange} holder={"Email Address"}  />
            <InputFields name={"phoneNumber"} value={regData.phoneNumber} handleChange={handleChange} holder={"Phone Number"}  />
            <InputFields name={"relationship"} value={regData.relationship} handleChange={handleChange} holder={"Relationship"}  />
            <div className="bvn">BVN</div>
            <InputFields name={"bvn"} value={regData.bvn} handleChange={handleChange} holder = {"BVN "} />

            {/* 
            <InputFields name={"acctNo"} value={regData.acctNo} handleChange={handleChange} holder = {"Account Number "} />
            <select value={bankName} className="bank-list" onChange={handleSelectBank}>
              <option defaultValue>-- select a bank --</option>
              {bankList.map(bank => (
              <option className="bank-option" key={bank.id}>{bank.name}</option>
            ))}</select>   */}

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