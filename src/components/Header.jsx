import Logo from "./Logo";
//import boolLogo from '../assets/img/bool-pasta.png'

export default function Header() {

  return (
    <header>

      <Logo />
      <nav className="nav justify-content-center">
        <a className="nav-link" href="#">
          Home
        </a>
        <a className="nav-link current" href="#">Prodotti</a>
        <a className="nav-link" href="#">Chi siamo</a>
        <a className="nav-link" href="#">Contatti</a>
      </nav>

    </header>
  )
}