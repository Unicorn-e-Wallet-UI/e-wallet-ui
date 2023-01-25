import imageOne from "../../../../../assets/images/KYC-One.png";
import Container from "../../../../../reusables-components/container/container";
import KycHeader from "../../../../../reusables-components/kyc-header/kycHeader";

const RegistrationPageTwo = () => {
    return (
      <>
        <Container
          images={
            <img style={{ width: "100%" }} src={imageOne} alt="imageOne" />
          }
          forms={
            <>
            <KycHeader page={"2 of 3"} info={"More Page About you"}/>
            hfwrwgf
            </>
          }
        />
      </>
    );
}

export default RegistrationPageTwo;