import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./landingpage/landingpage"
import Register from "./register/register";
import Login from "./login/login";
// import ForgotPassword from "./forgot/forgotpassword";
// import ChangePassword from "./changepassword/changepassword"
// import Home from "./home/homepage"
 import MovieView from "./home/movieview";
// import MyPlan from "./myplan/myplan";
// import SubscriptionHome from "./subscription/subscriptionhome";
// import PasswordReset from "./forgot/passwordreset";
// import WatchLater from "./watchlater/watchlater";
// import WatchHistory from "./watchhistory/watchhistory";
// import MovieCards from "./home/moviecards";
import Home from "./home/homepage";



const router= createBrowserRouter([

 {path:"/",element:<LandingPage/>},
{path:"/register",element:<Register/>},
// {path:"/logout",element:<Logout/>},
{path:"/login",element:<Login/>},
// {path:"/forgot",element:<ForgotPassword/>},
// {path:"/change",element:<ChangePassword/>},
// {path:"/change",element:<ChangePassword/>},
{path:"/home",element:<Home/>},
 {path:"/movieview/:id",element:<MovieView/>},
// {path:"/myplans",element:<MyPlan/>},
// {path:"/subscription",element:<SubscriptionHome/>},
// // {path:"/subscribe",element:<Subscribe/>},
// {path:"/later",element:<WatchLater/>},
// {path:"/history",element:<WatchHistory/>},
// {path:"/passwordreset/:reset_token",element:<PasswordReset/>},



]);

export default router;