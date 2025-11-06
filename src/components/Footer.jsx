import Logo from "./Logo";


export default function Footer({pastificio, products}) {



  const footerMenu = [
    {
      id: 1,
      title: 'Pastificio',
      links: [
        {
          id: 1,
          link: '#',
          text: 'Il pastificio'
        },
        {
          id: 2,
          link: '#',
          text: 'Il pastificio'
        },
        {
          id: 3,
          link: '#',
          text: 'Il pastificio'
        },
        {
          id: 4,
          link: '#',
          text: 'Il pastificio'
        },
        {
          id: 5,
          link: '#',
          text: 'Il pastificio'
        }
      ]
    },
    {
      id: 2,
      title: 'Products',
      links: [
        {
          id: 1,
          link: '#',
          text: 'Boolclassica'
        },
        {
          id: 2,
          link: '#',
          text: 'Boolclassica'
        },
        {
          id: 3,
          link: '#',
          text: 'Boolclassica'
        },
        {
          id: 4,
          link: '#',
          text: 'Boolclassica'
        },
        {
          id: 5,
          link: '#',
          text: 'Boolclassica'
        }
      ]
    }
  ]


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
                {
                  pastificio.map(item => (
                    <li key={item.id}><a href={item.link}>{item.text}</a></li>
                  ))
                }

              </ul>
            </div>
            <div className="col">
              <h3>Prodotti</h3>
              <ul className="list-unstyled">
                {
                  products.map(item => (
                    <li key={item.id}><a href={item.link}>{item.text}</a></li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}