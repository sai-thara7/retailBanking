import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./CreateAccount.css"
function CreateAccount() {
    return (
<>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header ">
                        <a className="navbar-brand text-white" href="/dashboard"><h2><i>Peoples' Bank</i></h2></a>
                    </div>
                    <ul className="nav active nav-link ">
                        <li><a className="text-white nav-link btn btn-info" href="/dashboard">Home</a></li>

                    </ul>
                </div>
            </nav>

            <div align="center">
                <div id="login-box">

                    <h1 className="signup"><i>Customer Account Creation</i></h1>
                    <br></br>
                    <form action="/finishedAccountCreation" method="post"
                        modelAttribute="account">

                        CUSTOMER ID: <input type="text" path="customerId" name="customerId"
                            value="${customerId}" readonly="true" />
                        {/* <!--  ACCOUNT ID: <form:input type="number" path="accountId" name="accountId"
					value="${account.accountId}" autocomplete="off" />--> */}
                        OPENING AMOUNT: <input type="number" path="currentBalance" min="0"
                            name="currentBalance" placeholder="Amount" value="0" autocomplete="off" />
                        ACCOUNT TYPE: <select type="text" path="accountType" placeholder="Account Type" name="accountType" autocomplete="off">
                            <input type="radio" value="Savings"/>
                            <input type="radio" value="Current"/>
                        </select>

                        <input path="openingDate" name="openingDate" id="openingDate" type="hidden" className="form-control-lg" value="<%=(new Date()).toLocaleString() %>" />


                        OWNER NAME: <input type="text" path="ownerName" name="ownerName"
                            placeholder="OwnerName" autocomplete="off" />

                        <input type="checkbox" required Accepting Terms and Conditions/>
                            <br></br>
                                <input type="submit" name="signup_submit" value="Create" />

                            </form>
                            <br></br>
                                <p id="message">accmsg</p>
                                <p>


                                    <a className="active btn btn-warning" href="/dashboard?custmsg=Customer Created">Go Back</a> and Create Account Later....!!</p>
                            </div>


                        </div>
                    </>
                    );
}

                    export default CreateAccount;