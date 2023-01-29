import SignUpImage from "../../../../assets/images/signup.png";
import Container from "../../../../reusables-components/container/container";
import InputFields from "../../../../reusables-components/input/input";
import RButtons from "../../../../reusables-components/buttons/button";
import { useState } from "react";


const SignUpPage = () => {

    const [signupData, setSignUpResponse] = useState({

        firstName:"",
        lastName:"",
        email:"",
        password:"",

    });
    

    const handleChange = (event) => {
        const {name, value} = event.target;  
        setSignUpResponse(prevValue => {
            return{...prevValue, [name]:value}
        })
        console.log(signupData)
 }
    


    return(

         <>
             <Container   
        
             images={<img src={SignUpImage} style={{width:"100%", height:"510px"}} alt="Sigupimage"/>}
             forms={
                <>
                <form>
                    <div>
                     <h2 className="welcome">Welcome Back!</h2>
                    <p className="dashB">Sign up by entering the  information below</p>

                    <InputFields name={"firstName"} type={"text"} value={signupData.firstName} holder={"First Name:"} handleChange={handleChange}/>
                    <InputFields name={"lastName"} type={"text"} value={signupData.lastName} holder={"Last Name:"} handleChange={handleChange}/>
                    <InputFields name={"email"} type={"email"} value={signupData.email} holder={"Email:"}handleChange={handleChange}/>
                    <InputFields name={"password"} type={"password"} value={signupData.password} holder={"Password:"} handleChange={handleChange}/>

                    <div className="dont">
                        <p className="dontText">Already have an Account?</p>
                        <a className="Up" href="registration-page-one">Login</a>
                    </div>

                    <RButtons><p>SignUp</p></RButtons>


                    </div>
               </form>
                </>

             }
            
            />


         </>

         
    )
}

export default SignUpPage;