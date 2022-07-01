import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img from "./Images/500.png";
function Error500() {
    return (
        <div class="row" style={{ textAlign: "center", height: "100vh" }}>

            <div class="col" >
                <img src={img} alt="500 image" class="image-fluid"></img>
                <h1 class="text-danger">HTTP Status errorcode - Internal Server Error</h1>
                <p>exception</p>
                <h3>The request is not available to you<a href="">Click here to return</a></h3>
            </div>
        </div>
    );
}

export default Error500;