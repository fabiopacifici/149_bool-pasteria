// if the images are inside assets/
//import boolLogo from './assets/img/bool-pasta.png'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
// if the images are inside public/
//import boolLogo from '/img/bool-pasta.png'

function App() {

  const slogan = 'BoolPasta Buona buona'

  const menu = [
    {
      id: 1,
      link: '#',
      text: 'Home',
      is_active: false
    },
    {
      id: 2,
      link: '#',
      text: 'Prodotti',
      is_active: true
    },
    {
      id: 3,
      link: '#',
      text: 'Chi Siamo',
      is_active: false
    },
    {
      id: 4,
      link: '#',
      text: 'Contatti',
      is_active: false
    },
  ]
  const pastificio = [
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

  const products = [
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


  return (
    <>
      <Header slogan={slogan} menu={menu}/>
      <Main />
      <Footer pastificio={pastificio} products={products} />

    </>
  )
}

export default App
