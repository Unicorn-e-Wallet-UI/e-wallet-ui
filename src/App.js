import './App.css';
import RegistrationPageOne from './component/pages/Registration-pages/verification/kycFormsPageOne/kycPageOne';
import RegistrationPageTwo from './component/pages/Registration-pages/verification/kycFormsPageTwo/kycPageTwo';
import LoginPage from './component/pages/Registration-pages/Log in/login';
import SignUpPage from './component/pages/Registration-pages/Sign up/signup';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route exact path='/registration-page-one' element={<RegistrationPageOne />}  />
        <Route exact path='/registration-page-two' element={<RegistrationPageTwo />}  />
        <Route exact path='/login-page' element={<LoginPage/>} />
        <Route exact path='/signup-page' element={<SignUpPage/>}/>
    </Routes>
  );
  ;
}

export default App;
