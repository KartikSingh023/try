// import eye from "./images/eye.png";
import mail from "./images/mail.png";
import user from "./images/user.png";
import lock from "./images/lock.png";
const Left = () => {

    return(
        <div className="left">
        <p id="titl">Sign Up</p>
        <h5 id="sig">Create New Account Here</h5>
        <div className="mail2"><img src={user} alt="hui" id="user"/><input  className="mail" type ="text" placeholder="Name"></input></div>
        <div className="password2"><img src={mail} alt="hui" id="eye"/><input className="password" type="email" placeholder="College Mail"></input></div>
        <div className="password2"><img src={lock} alt="hui" id="eye"/><input className="password" type="text" placeholder="Password"></input></div>
        <div className="password2"><img src={lock} alt="hui" id="eye"/><input className="password" type="text" placeholder="Confirm Password"></input></div>
        <button id="log">Login</button>
        <p id="forgot">Already have an Account</p>
        <button id="crt">Create New Account</button>
        {/* <img src={eye} alt="hui"></img> */}

    </div>
    );
}
export default Left;