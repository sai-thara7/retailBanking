import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img from "./Images/405.jpg";
function Error405(){
    return(
<div class="row" style={{textAlign:"center",height:"100vh"}}>
              
              <div class="col">
                  <img src={img}alt="500 image" class="image-fluid"></img>
                     <h1 class="text-danger">HTTP Status errorcode</h1>
                     <p>exception</p>
                  <h3>The request method does not support. <a href="">Home page</a></h3>
         </div>
         </div>
    );
}
export default Error405;