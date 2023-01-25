import "./kycHeader.css";

const KycHeader = ({page, info}) => {
    return (
        <>
        <div className="form-heading">
            <div>{page}</div>
            <div>{info}</div>
        </div>
      </>
    );
}

export default KycHeader;