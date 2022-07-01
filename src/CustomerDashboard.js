import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./CustomerDashboard.css";
import withdraw from "./Images/withdraw.jpg";
import trans from "./Images/trans1.png";
function CustomerDashBoard() {
    return (
        <>
            <nav
                className="navbar navbar-expand-sm bg-secondary navbar-dark justify-content-between">
                <div className="navbar-brand active nav-link text-white"><h3><i>Peoples' Bank</i></h3></div>
                <div className="form-inline">
                    <a className="btn btn-outline-light my-2 my-sm-0" href="/logout">Logout</a>&nbsp;&nbsp;
                </div>
            </nav>
            <center>
                <h1><i>Welcome to The Peoples' Bank</i></h1>
            </center>

            <br></br>

            <div align="center">
                <caption>
                    <h2>Customer Details</h2>
                </caption>
                <br></br>

                <table border="2" cellpadding="5" className="table container table-striped">
                    <tr >
                        <th>CUSTOMER ID</th>
                        <th>CUSTOMER NAME</th>
                        <th>DOB</th>
                        <th>PAN</th>
                        <th>ADDRESS</th>
                        <th>ACCOUNTS</th>
                    </tr>
                    <tr>
                        <td>customer.userid</td>
                        <td>customer.username</td>
                        <td>customer.dateOfBirth</td>
                        <td>customer.pan</td>
                        <td>customer.address</td>
                        <td><table border="1" cellpadding="5">

                            <tr>
                                <th>ACCOUNT ID</th>
                                <th>CURRENT BALANCE</th>
                                <th>ACCOUNT TYPE</th>
                                <th>OWNER NAME</th>
                            </tr>

                            <tr>

                                <td>acc.accountId </td>
                                <td>acc.currentBalance</td>
                                <td>acc.accountType</td>
                                <td>acc.ownerName</td>
                            </tr>

                        </table></td>

                    </tr>
                </table>



            </div>

            <br></br>
            <div align="center" className="container">
                <caption>
                    <h2>Transaction Details</h2>
                </caption>
                <br></br>

                <form action="/customerdashboard/getTransactionsInCustomerdashboard" method="post">
                    <select path="accountId" name="accountId">
                        {/* <c:forEach var="acc" items="${customer.accounts}">
                            <option value="${acc.accountId }">${acc.accountId}</option>
                        </c:forEach> */}
                    </select>
                    <input className="btn btn-warning" type="submit" value="Submit" />
                </form>
                {/* <c:if test="${empty transactions}"> */}
                <br></br>

                <div className="bg-success container text-white">
                    <p>No Transactions are done till now!!</p>
                </div>
                {/* </c:if> */}
                {/* <c:if test="${!empty transactions}"> */}
                <br></br>
                <table border="2" cellpadding="5" className="table table-striped">

                    <tr>
                        <th>sourceAccountId</th>
                        <th>sourceOwnerName</th>
                        <th>targetAccountId</th>
                        <th>targetOwnerName</th>
                        <th>amount</th>
                        <th>initiationDate</th>
                        <th>reference</th>
                    </tr>
                    {/* <c:forEach var="trans" items="${transactions}"> */}
                    <tr>

                        <td>value="trans.sourceAccountId" </td>
                        <td>value="trans.sourceOwnerName" </td>
                        <td>value="trans.targetAccountId" </td>
                        <td>value="trans.targetOwnerName" </td>
                        <td>value="trans.amount" </td>
                        <td>value="trans.initiationDate" </td>
                        <td>value="trans.reference" </td>
                    </tr>
                    {/* </c:forEach> */}
                </table>


                {/* </c:if> */}



            </div>

            <div className="row container justify-content-around">

                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div style={{ margin: "9em 120em 14em 14em" }}>
                        <div className="card bg-dark text-white" style={{ width: "500px", backgroundColor: "#f3d8d8" }}>
                            <img alt="" className="card-img-top" src={withdraw} style={{ height: "200px" }}></img>
                            <div className="card-body">
                                <h4 className="card-title">Withdraw Amount</h4>
                                <form action="/withdraw" method="post" modelAttribute="accountinput">
                                    <label>From Account:</label>
                                    <select path="accountId" name="accountId">
                                        {/* <c:forEach var="acc" items="${customer.accounts}"> */}
                                        <input type="radio" value="${acc.accountId }"></input>
                                        {/* </c:forEach> */}
                                    </select>
                                    <label></label><br></br>
                                    <label>Enter the Amount to Withdraw:</label>
                                    <input type="number" path="amount" name="amount" placeholder="Enter the amount" min="100" />
                                    <input type="hidden" name="reference" value="withdraw" />
                                    <br></br> <br></br> <input type="submit" name="View" value="Withdraw Amount" className="btn btn-primary" style={{ width: "190px" }} />
                                </form>
                                <p id="message">msg</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div style={{ margin: "9em 120em 14em 14em" }}>
                        <div className="card bg-dark text-white" style={{ width: "500px", backgroundColor: "#f3d8d8" }}>
                            <img alt="" className="card-img-top" src={trans} style={{ height: "200px" }}></img>
                            <div className="card-body">
                                <h4 className="card-title">Transfer Amount</h4>
                                <form className="container" action="/transfer" method="post" modelAttribute="accountinput">
                                    <label>From Account:</label>
                                    <select path="accountId" name="accountId">
                                        {/* <c:forEach var="acc" items="${customer.accounts}"> */}
                                        <input type="radio" value="${acc.accountId }"></input>
                                        {/* </c:forEach> */}
                                    </select>
                                    <label></label><br></br>
                                    <label>Enter the Target Account No:</label>
                                    <input type="number" name="targetAccount" placeholder="Enter the Target Account ID" required />
                                    <label>Enter the Amount to Transfer:</label>
                                    <input type="number" name="amount" placeholder="Enter the amount" min="100" />
                                    <input type="hidden" name="reference" value="transfer" />
                                    <br></br> <br></br> <input type="submit" name="View" value="Transfer Amount" className="btn btn-primary" style={{ width: "190px" }} />
                                </form>
                                <p id="message">transfermsg</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default CustomerDashBoard