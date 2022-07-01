import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./CreateCustomer.css";
function CreateCustomer() {
    return (
        <>
            <div align="center">
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid ">
                        <div class="navbar-header ">
                            <a class="navbar-brand text-white" href="/dashboard"><h2><i>Peoples' Bank</i></h2></a>
                        </div>
                        <ul class="nav active nav-link ">
                            <li><a class="text-white nav-link btn btn-info" href="/dashboard">Home</a></li>

                        </ul>
                    </div>
                </nav>

                <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
                    <div className="container">
                        <div className="card login-card">
                            <div className="row no-gutters">

                                <div className="card-body">
                                    <h2 style={{ textAlignment: "center" }}>Customer Creation!!</h2>
                                    <br />
                                    <form style={{ maxWidth: "100%" }}>
                                        <table>
                                            <tr>
                                                <thead style={{ textAlignment: "initial" }}>Enter Customer ID</thead>
                                                <td style={{ width: "100px" }}></td>
                                                <td style={{ width: "200px" }}>
                                                    <input type="text" placeholder="CUST101"></input>
                                                </td>
                                            </tr>

                                            <tr>
                                                <thead style={{ textAlignment: "initial" }}>Enter Username</thead>
                                                <td style={{ width: "100px" }}></td>
                                                <td style={{ width: "200px" }}>
                                                    <input type="text" placeholder="Username"></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <thead style={{ textAlignment: "initial" }}>Password</thead>
                                                <td style={{ width: "100px" }}></td>
                                                <td style={{ width: "200px" }}>
                                                    <input type="password" placeholder=""></input>
                                                </td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <thead style={{ textAlignment: "initial" }}>Date of birth</thead>
                                                <td style={{ width: "100px" }}></td>
                                                <td style={{ width: "200px" }}>
                                                    <input type="date" placeholder=""></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <thead style={{ textAlignment: "initial" }}>Enter Pan Number</thead>
                                                <td style={{ width: "100px" }}></td>
                                                <td style={{ width: "200px" }}>
                                                    <input type="text" placeholder=""></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <thead style={{ textAlignment: "initial" }}>Enter Present Address</thead>
                                                <td style={{ width: "100px" }}></td>
                                                <td style={{ width: "200px" }}>
                                                    <input type="text" placeholder=""></input>
                                                </td>
                                            </tr>
                                            <tr>

                                                <input type="checkbox" placeholder=""></input>
                                                <td style={{ width: "200px" }}>
                                                    <thead style={{ textAlignment: "initial" }}>I Accept all terms and conditions*</thead>
                                                </td>
                                            </tr>
                                            <tr>
                                                <input type="submit" value="CREATE"></input>
                                            </tr>
                                        </table>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
};
export default CreateCustomer;