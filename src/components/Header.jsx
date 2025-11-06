import Logo from "./Logo";
import NavBar from "./NavBar";
//import boolLogo from '../assets/img/bool-pasta.png'


export default function Header({slogan, menu}) {

 

  return (
    <header>
      <Logo slogan={slogan} />
      <NavBar menu={menu} />
    </header>
  )
}