import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import cust from "./Images/create-customer.jpg";
import acc from "./Images/createaccount.jpeg";
import all from "./Images/getAllCustomers.png";
import deposit from "./Images/deposit.jpg";
import trans1 from "./Images/trans1.png";
function Dashboard() {

    return (
        <>
            <nav
                class="navbar navbar-expand-sm bg-secondary navbar-dark justify-content-between">
                <div class="navbar-brand active nav-link text-white"><h3><i>Peoples Bank</i></h3></div>
                <div class="form-inline">
                    <a class="btn btn-outline-light my-2 my-sm-0" href="/logout">Logout</a>&nbsp;&nbsp;
                </div>
            </nav>
            <br />
            <h1 align="center">Welcome to Peoples' Bank</h1>

            <div class="container-ls row">

                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div style={{ margin: "5em 10em 2em 3em" }}>
                        <div class="card bg-dark text-white" style={{ width: "350px" }}>
                            <img alt="" src={cust} style={{ height: "200px" }} />
                            <div class="card-body">
                                <h4 class="card-title">Create Customer</h4>
                                <p class="card-text">Click the button to create the customer</p>
                                <br /> <a href="/createCustomer" class="btn btn-primary">Create or Update</a>
                            </div>
                            <p id="message">custmsg</p>
                        </div>
                    </div>
                </div>


                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div style={{ margin: "5em 10em 2em 3em" }}>
                        <div class="card bg-dark text-white" style={{ width: "350px" }}>
                            <img alt="" src={acc} style={{ height: "200px" }} />
                            <div class="card-body">
                                <h4 class="card-title">Create Account for Customer</h4>
                                <form action="/createAccount" method="post">
                                    Customer ID:<input type="text" name="customerId" placeholder="Enter the CustomerId" autocomplete="off" />
                                    <br /> <input type="submit" name="View" value="Create Account" class="btn btn-primary" style={{ width: "170px" }} />
                                </form>
                                <p id="message">accmsg</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div style={{ margin: "5em 10em 2em 3em" }}>
                        <div class="card bg-dark text-white" style={{ width: "350px" }}>
                            <img alt="" src={all} style={{ height: "200px" }} />
                            <div class="card-body">
                                <h4 class="card-title">View the Customer</h4>
                                <form action="/viewCustomer" method="get">
                                    User ID:<input type="text" name="userId" id="userId" placeholder="Enter the UserId" autocomplete="off" />
                                    <br /> <input type="submit" name="View" value="View"
                                        class="btn btn-primary" />
                                </form>
                                <p id="message">viewmsg</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="container-ls row">

                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div style={{ margin: "4em 10em 14em 3em" }}>
                            <div class="card bg-dark text-white" style={{ width: "350px" }}>
                                <img alt="" src={all} style={{ height: "200px" }} />
                                <div class="card-body">
                                    <h4 class="card-title">View the Customer</h4>
                                    <form action="/viewCustomer" method="get">
                                        User ID:<input type="text" name="userId" id="userId" placeholder="Enter the UserId" autocomplete="off" />
                                        <br /> <br /> <input type="submit" name="View" value="View"
                                            class="btn btn-primary" />
                                    </form>
                                    <p id="message">viewmsg</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div style={{ margin: "4em 0em 0em 3em" }}>
                            <div class="card bg-dark text-white" style={{ width: "350px" }}>
                                <img alt="" src={deposit} style={{ height: "200px" }} />
                                <h4 class="card-title">Deposit Amount</h4>
                                <form action="/deposit" class="form-group container" method="post">
                                    <label>Account ID: </label>
                                    <input type="number" name="accountId" placeholder="Enter the AccountId" autocomplete="off" required />

                                    <label>Amount: </label>
                                    <input type="number" name="amount" placeholder="Enter the amount" autocomplete="off" required />

                                    <input type="submit" name="View" value="Deposit Amount" class="btn btn-primary" style={{ width: "170px" }} />
                                </form>
                                <p id="message">msg</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div style={{ margin: "4em 10em 14em 3em" }}>
                            <div class="card bg-dark text-white" style={{ width: "350px" }}>
                                <img alt="" src={trans1} style={{ height: "200px" }} />
                                <div class="card-body">
                                    <h4 class="card-title">Service Charge Deduction</h4>
                                    <p class="card-text">Charges will be deducted for not maintaining minimum balance </p>
                                    <form action="/deductServiceTax" method="post">
                                        <input type="submit" name="View" value="Deduct" class="btn btn-primary" />
                                    </form>
                                    <p id="message">servicemsg</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Dashboard;