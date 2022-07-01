import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img from "./Images/403.jpg";
function Error403(){
    return (
        <div class="row" style={{textAlign:"center",height:"100vh"}}>
             <div class="col">
                    <img src={img} alt="403 image" class="image-fluid" />
                    <h1>Error 403</h1>
                    <h3>Forbidden Error</h3>
                    <h6>You do not have permission to access without Login.</h6>
                    <a href="/">Click Here to login again</a>
        </div>
        </div>
    );
}
export default Error403;