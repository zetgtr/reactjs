import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { ROUTER } from "../../Router/constants";
import { authSelector } from "../../Store/Auth/selector";

export const PrivateRoute = ({ ...rest }) =>{
  const { auth } = useSelector(authSelector);
 return auth != null  ? <Route { ...rest } /> : <Redirect to={ROUTER.SIGN_IN} />;
}