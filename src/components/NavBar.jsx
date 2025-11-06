export default function NavBar({menu}){

  return (

    <nav className="nav justify-content-center">
      {
        menu.map(item => (
          <a key={item.id} className={`nav-link ${item.is_active ? 'current' : ''}`} href={item.link}>{item.text}</a>
        ))
      }
    </nav>
  )
}