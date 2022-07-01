import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import image from "./Images/bank.jpg";


function Home() {
  return (
    <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <div className="card-body">
                <div className="brand-wrapper" align="center">
                  <h1 className="header">Peoples' Bank</h1>
                </div>
                <p className="login-card-description">Sign In</p>
                <form action="/login" method="post" modelAttribute="login">
                  <div className="form-group">
                    <label for="email" path="userid" className="sr-only">User Id</label>
                    <input type="text" path="userid" name="Id" id="Id" className="form-control-lg" placeholder="UserId" autocomplete="off" />
                  </div>
                  <div className="form-group mb-4">
                    <label for="password" path="password" className=".visually-hidden-focusable">Password</label>
                    <input type="password" path="password" name="password" id="password" className="form-control-lg ml-3" placeholder="password" />
                  </div>
                  <input type="hidden" path="role" name="role" id="role" className="form-control" value="${role}" />
                  <input name="login" id="login" className="btn btn-block login-btn mb-4" type="submit" value="Login" style={{ height: "49px" }} />
                </form>
                {/* <p id="errorMessage">msg</p> */}
                <a href="#!" className="forgot-password-link">Forgot password?</a>
                <p className="login-card-footer-text">Don't have an account? <a href="#!" className="text-reset">Register here</a></p>
                <nav className="login-card-footer-nav">
                  <a href="#!">Terms of use.</a>
                  <a href="#!">Privacy policy</a>
                </nav>
              </div>
            </div>
            <div className="col-md-4">
              <img src={image} alt="login" className="login-card-img"></img>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;