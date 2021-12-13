import { Redirect, Route } from "react-router-dom";
import { ROUTER } from "../../Router/constants";

export const PrivateRoute = ({ auth, ...rest }) =>
  auth ? <Route {...rest} /> : <Redirect to={ROUTER.SIGN_IN} />;