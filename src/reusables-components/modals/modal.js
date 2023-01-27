import "./modal.css";

const ModalBox = ({handleClick, Child_styles, Parent_styles, ...props }) => {
  return (
    <>
      <div className="modal-box" style={Parent_styles} onClick={(e) => handleClick(e)}>
        <div className="msg-box" style={Child_styles} >
          {props.children}{" "}
        </div>
      </div>
    </>
  );
};

export default ModalBox

// import "./modal.css";

// const ModalBox = ({...props}) => {
//     const styles = {
//         width:"15rem",
//         height:"100%",
//     }
//     return (
//         <>
//         <div className="modal-box">
//            <div className="msg-box">{props.children} </div>
//         </div>
//         </>
//     )
// }

// export default ModalBox
