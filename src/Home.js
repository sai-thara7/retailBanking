import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import img from "./Images/bkg.jpg";

function Home() {
    return (
        <>
            <div className="sticky-top bg-dark d-flex align-content-center">
                <a href="/" className="active nav-link text-white"><h1><i>Peoples' Bank</i></h1></a>
                <ul className="align-content-center container nav nav-pills justify-content-end">
                    <li className="nav-item"><a className="nav-link active" href="/employeelogin">Employee Login
                    </a></li>
                    <li className="nav-item"><a className="nav-link" href="/customerlogin">Customer Login</a></li>
                </ul>
            </div>



            <br></br>

            <div className="container" style={{ objectFit: "cover" }}>
                <h4 className="text-centre">Welcome to Peoples' Bank</h4>

                <p className="container">Its' simpler, smarter & more intuitive than
                    ever.</p>
            </div>



            <div className="container text-white" style={{ objectFit: "cover" }}>
                <div className="jumbotron bg-cover"
                    style={{ backgroundImage: `url(${img})`, objectFit: "cover", padding: "20px", borderRadius: "5px" }}>
                    <h1 className="display-4" style={{ fontWeight: "Bold" }}>Presenting the all new Peoples' Banking</h1>
                    <p className="lead" style={{ fontWeight: "normal" }}>You can also login through the below "Login
                        Button".</p>
                    <hr className="my-4"></hr>
                    <p></p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="/customerlogin" role="button">Customer Login</a>
                    </p>
                </div>
            </div>

            <br></br>
            <br></br>



            <div className="container card-group ">
                <div className="card">

                    <div className="card-body p-5 my-10">
                        <h5 className="card-title">Locate Us</h5>
                        <p className="card-text">You are never too far away from quick,
                            efficient banking services. Locate your nearest branch or an ATM.</p>

                    </div>
                </div>
                <div className="card">

                    <div className="card-body p-5 my-10">
                        <h5 className="card-title">Call Us</h5>
                        <p className="card-text">In case you wish to speak to our phone
                            banking officer for urgent resolution.</p>
                    </div>
                </div>
                <div className="card">

                    <div className="card-body p-5 my-10">
                        <h5 className="card-title">Write to Us</h5>
                        <p className="card-text">Be it an enquiry, feedback or a simple
                            suggestion, write to us & we'll get back to you.</p>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>


            <div className="component text-white bg-secondary text-center" style={{ backgroundColor: '#e6ffff' }}>
                <div className="component container">
                    <br></br>
                    <h4>About Us</h4>
                    <div className="container">
                        <p className="row">Peoples' Bank Limited is an Indian private sector
                            bank headquartered in Mumbai, Maharashtra, India. It offers banking
                            products and financial services for corporate and retail customers
                            in the areas of personal finance, investment banking, life
                            insurance, and wealth management. As of February 2021, it is the
                            third largest Indian private sector bank by market capitalization,
                            with 1600 branches & 2519 ATMs.</p>
                        <p className="row">Peoples Bank was formed in September of 2000,
                            however, our story begins long before that time. Most of our
                            employees and directors started working together in the early 1980s,
                            for Grant County Bank. Throughout the 80s' and 90s', the name on the
                            outside of the building changed several times, but for the most
                            part, the people inside the bank stayed the same. The founders of
                            Peoples Bank came to realize that the name on the building didnt'
                            make the bank; rather, the employees and customers who passed
                            through its doors were its heart and soul. With this in mind,
                            Peoples Bank was born. Since then, its' been our mission to be the
                            bank where people come first. Nothing is more important than our
                            customers and it is our privilege to serve your banking needs with
                            care and excellence in mind. Today Peoples Bank is going strong,
                            continuously evolving to the needs of its customers while staying
                            rooted in its core principles, including friendly customer service
                            and personalized banking solutions.</p>
                    </div>


                    <div className="row">
                        <div className="col">
                            <h4 className="container">Connect to Us</h4>
                        </div>
                    </div>


                    {/* <a href="https://www.facebook.com/Cognizant" className="fa fa-facebook"></a>
                <a href="https://twitter.com/cognizant" className="fa fa-twitter"></a> <a
                    href="https://www.youtube.com/channel/UCXscwCVOk653HlNY9wwES_w"
                    className="fa fa-youtube"></a> <a
                    href="https://www.linkedin.com/company/cognizant"
                    className="fa fa-linkedin"></a> */}
                    <a href="https://www.facebook.com/Cognizant" className="fa fa-facebook">
                        <FontAwesomeIcon style={{ color: "white", marginLeft: "5px", fontSize: "large" }} icon={faFacebook} />
                    </a>
                    <a href="https://twitter.com/cognizant" className="fa fa-twitter">
                        <FontAwesomeIcon style={{ color: "white", marginLeft: "5px", fontSize: "large" }} icon={faTwitter} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCXscwCVOk653HlNY9wwES_w"
                        className="fa fa-youtube">
                        <FontAwesomeIcon style={{ color: "white", marginLeft: "5px", fontSize: "large" }} icon={faYoutube} />
                    </a>
                    <a href="https://www.linkedin.com/company/cognizant" style={{ color: "white", marginLeft: "5px", fontSize: "large" }} className="fa fa-linkedin">
                    <FontAwesomeIcon style={{ color: "white", marginLeft: "5px", fontSize: "large" }} icon={faLinkedin} />
                    </a>
                </div>
                <br></br>
                <br></br>
            </div>
        </>
    );
}

export default Home;