import Content from "./Content";
import Footer from "./Footer";
import React,{createContext, useState} from "react";

const word='selin market'
export const sloganContext=createContext()

function Header(){
 const [slogan,setSlogan]=useState('at your service since 1800')
    return(
      <>
      <h1>{word.toUpperCase()}</h1>
      <div className="navigation">
      <img src="./images/logo.jpeg" height="60px"></img>
      <ul>
        <li><a href="#">home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">contact</a></li>
      </ul>
      </div>
      <p>selin is a well equipt market ready to serve you and your family at any time with our experienced expertised 
        workers<br/>{slogan}</p>
        <Content/>
        <sloganContext.Provider value={slogan}>
          <Footer value={slogan}/>
        </sloganContext.Provider>
     
      </>
    );
}

export default Header;