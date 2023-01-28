import "./password-input.css";
import {useRef} from "react";


const PasswordBox = ({handleChange}) => {
     const first = useRef(null)
     const second = useRef(null) 
     const third = useRef(null)
     const forth = useRef(null)
    return (
        <>
        <div className="input-field">
        <div>
            <input type="password" maxLength="1" ref={first} onChange={(e) =>  handleChange(e)} placeholder="-"  />
            <input type="password" maxLength="1" ref={second} onChange={(e) => handleChange(e)} placeholder="-"/>
            <input type="password" maxLength="1" ref={third} onChange={(e) =>  handleChange(e)} placeholder="-"/>
            <input type="password" maxLength="1" ref={forth} onChange={(e) =>  handleChange(e)} placeholder="-"/>
        </div>
        </div>
        </>
    )

}

export default PasswordBox;