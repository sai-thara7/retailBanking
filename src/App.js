

import Home from './Home';
import Login from "./Login"
import CustomerDashBoard from './CustomerDashboard';
import CreateAccount from './CreateAccount';
import Error403 from './Error403';
import Error404 from './Error404';
import Error405 from './Error405';
import Error500 from './Error500';
import CreateCustomer from './CreateCustomer';
import Dashboard from './Dashboard';
function App() {
  return (
    <div className="App">
      <Login></Login>
      <Home></Home>
      <CustomerDashBoard></CustomerDashBoard>
      <CreateAccount></CreateAccount>
      <Error403></Error403>
      <Error404></Error404>
      <Error405></Error405>
      <Error500></Error500>
      <CreateCustomer></CreateCustomer>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
