import "./DashBoard.css";
import anchor from "../../assets/Anchor Image.svg"
import imageCard from "../../assets/svgs/user.svg";

const DashBoardBackGround = () => {
    return (
      <>
        <div className="bg-container">
          <object data={anchor} width="500px" className="anchor-tag"></object>
          <div className="profile-card">
            <div className="profile-header">
              <p>User name</p>
              <img src={imageCard} alt="profileImage" />
            </div>
          <div className="balance-container"></div>
          </div>
        </div>
      </>
    );
}


export default DashBoardBackGround