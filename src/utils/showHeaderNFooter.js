import { useContext } from "react";
import GlobalContext from "../contexts/globalContext";

export default function ShowHeaderNFooter(){
  const {  setShowHeader, setShowFooter } = useContext(GlobalContext);
  setShowHeader(true);
  setShowFooter(true);
  return(<></>)
}