import "./input.css";

const InputFields = ({name, value, handleChange, holder,type}) => {

    return (
        <input 
        name={name} 
        placeholder={holder} 
        className="reuse-input" 
        value={value}
        type={type}
        required
        onChange={(event) => handleChange(event)} />
    )
}

export default InputFields;
