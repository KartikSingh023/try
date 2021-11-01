import eye from "./images/eye.png";
import user from "./images/user.png";
const Left = () => {

    return(
        <div className="left">
        <p id="titl">Login</p>
        <h5 id="sig">Sign in to your Account</h5>
        <div className="mail2"><img src={user} alt="hui" id="user"/><input  className="mail" type ="email" placeholder="Username"></input></div>
        <div className="password2"><img src={eye} alt="hui" id="eye"/><input className="password" type="password" placeholder="Password"></input></div>
        <button id="log">Login</button>
        <a href="google.com" id="forgot">Forgot password</a>
        <button id="crt">Create New Account</button>
        {/* <img src={eye} alt="hui"></img> */}

    </div>
    );
}
export default Left;