import "./container.css";

const Container = ({images, forms}) => {
    return (
        <div className="page-container">
               <div className="images-section">{images}</div>
               <div className="form-section">{forms}</div>
        </div>
    )
} 

export default Container;