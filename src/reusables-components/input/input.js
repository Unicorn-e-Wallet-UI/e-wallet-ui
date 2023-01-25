import { useState } from "react";
import "./input.css";

const InputFields = ({name, value, handleChange, holder}) => {

    return (
        <input 
        name={name} 
        placeholder={holder} 
        className="reuse-input" 
        value={value}
        onChange={(event) => handleChange(event)} />
    )
}

export default InputFields;
