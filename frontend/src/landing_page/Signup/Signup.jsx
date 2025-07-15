import "./Signup.css";
import Account from "./account";
import Benefits from "./Benefits";
import Faqs from "./Faqs";
import Investment from "./Investment";
import Signup1 from "./Signup1";
import TypesAccount from "./TypesAccount";
import Openaccount from "../Openaccount";

const Signup = () => {
  return (
    <>
      <Signup1 />
      <Investment />
      <Account />
      <Benefits />
      <TypesAccount />
      <Faqs />
      <Openaccount />
    </>
  );
};

export default Signup;
