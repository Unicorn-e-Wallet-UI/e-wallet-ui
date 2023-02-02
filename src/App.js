import './App.css';
import RegistrationPageOne from './component/pages/Registration-pages/verification/kycFormsPageOne/kycPageOne';
import RegistrationPageTwo from './component/pages/Registration-pages/verification/kycFormsPageTwo/kycPageTwo';
import LoginPage from './component/pages/Registration-pages/Log in/login';
import SignUpPage from './component/pages/Registration-pages/sign up/signup';
import ResetPassword from './component/pages/Registration-pages/ResetPasswoord/resetPassword';
import EnterOTPPage from './component/pages/Registration-pages/OTP/otp';
import EnterNewPassword from './component/pages/Registration-pages/ResetPasswoord/newPassword';
import {Routes, Route} from 'react-router-dom'
import VerifyAccount from './component/pages/Registration-pages/verification/AccountVerificationPage(OTP)/verifyAccount';


function App() {
  return (
    <Routes>
        <Route exact path='/registration-page-one' element={<RegistrationPageOne />}  />
        <Route exact path='/registration-page-two' element={<RegistrationPageTwo />}  />
        <Route exact path='/login-page' element={<LoginPage/>} />
        <Route exact path='/signup-page' element={<SignUpPage/>}/>
        <Route exact path='/verify-account' element = {<VerifyAccount />} />
        <Route exact path='/reset-password' element = {<ResetPassword />} />
        <Route exact path='/get-otp' element = {<EnterOTPPage />} />
        <Route exact path='/new-password' element = {<EnterNewPassword />} />
    </Routes>
  );
  ;
}

export default App;
