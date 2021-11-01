import React from 'react';
import SignUPButton from './SignUPButton';
const Boxstyle={
    padding: "70px 40px",
    position: "absolute",
    left: "800px",
    top: "80px",
    width: "550px",
    height: "650px",

    background: "#90E0DB",
    borderRadius: "106px",
    
}
const TxtStyle={

    // position: "absolute",
    // width: "462px",
    // height: "402px",
    // left: "821px",
    // top: "211px",

    fontFamily: "Sahitya",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    // lineHeight: "78px",

    color: "#ffffff"
}



function Right() {
    return(
        <>
        <div className="rightBox" style={Boxstyle}> 
        <div className="textHeading" style={{fontSize:"25px",color: "#ffffff",fontFamily: "Sahitya",fontStyle: "normal",fontWeight: "bold"}}><h1>HOLA!! FRIENDS,</h1></div>
        <div className="introTxt"><p>Join the exclusive community of  
ABV -IIITM and share your opinion ,you can also answer to some questions and peek into the weired journey of an engineer.</p></div>
{<SignUPButton/>}
</div>
        </>

    );
}

export default Right;