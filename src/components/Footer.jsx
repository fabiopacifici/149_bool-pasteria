import Logo from "./Logo";


export default function Footer() {

  return (
    <>
      <footer className='py-5'>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            <div className="col">

              <Logo />

            </div>
            <div className="col">
              <h3>Pastificio</h3>
              <ul className="list-unstyled">
                <li>Il pastificio</li>
                <li>Il pastificio</li>
                <li>Il pastificio</li>
                <li>Il pastificio</li>
                <li>Il pastificio</li>
              </ul>
            </div>
            <div className="col">
              <h3>Prodotti</h3>
              <ul className="list-unstyled">
                <li>la Boolclassica</li>
                <li>Il pastificio</li>
                <li>Il pastificio</li>
                <li>Il pastificio</li>
                <li>Il pastificio</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}