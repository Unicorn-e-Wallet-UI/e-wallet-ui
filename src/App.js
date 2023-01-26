import './App.css';
import RegistrationPageOne from './component/pages/Registration-pages/verification/kycFormsPageOne/kycPageOne';
import RegistrationPageTwo from './component/pages/Registration-pages/verification/kycFormsPageTwo/kycPageTwo';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route exact path='/registration-page-one' element={<RegistrationPageOne />}  />
        <Route exact path='/registration-page-two' element={<RegistrationPageTwo />}  />
    </Routes>
  );
  ;
}

export default App;
