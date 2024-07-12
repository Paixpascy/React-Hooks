
import {  useContext } from "react";
import { sloganContext } from "./Header";
function Footer(){
  const slogan=useContext(sloganContext)
    return(
        <>
        <p>&copy; {new Date().getFullYear()} SELIN MARKET</p>
        <p>{slogan}</p>
        </>
    );
}
export default Footer;