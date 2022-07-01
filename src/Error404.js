import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img from"./Images/404.jpg";
function Error404(){
    return(
        <div class="row" style={{height:"100vh",textAlign:"center"}}>
              
        <div class="col">
            <img src={img} alt="500 image" class="image-fluid"></img>
               <h1 class="text-danger">HTTP Status errorcode</h1>
               <p>exception</p>
            <h3>Sorry .....The request handler not available<a href="">Click here to return</a></h3>
   </div>
   </div>
    );
}
export default Error404;