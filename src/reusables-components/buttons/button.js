import "./buttons.css";

const RButtons = ({ handleAction, ...props }) => {
  return (
    <button onClick={(event) => handleAction(event)}>{props.children}</button>
  );
};

export default RButtons;