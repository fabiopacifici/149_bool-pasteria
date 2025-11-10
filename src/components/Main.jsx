import AccordionList from "./Accordion/AccordionList"
import Alert from "./Alert"
import ProductsList from "./ProductList"
const title = 'BoolPasteria'
const jumboMessage = 'Benvenuti nel nostro pastificio! Qui troverete la migliore selezione di paste artigianali, preparate con ingredienti di alta qualità e seguendo le tradizioni italiane. Esplorate il nostro catalogo e scoprite i sapori autentici della nostra pasta.'
const pastas = ['Rigatoni', 'Penne', 'Spaghetti']

// add realistic faqs data
const faqs = [
  {
    id: 1,
    question: 'What are your opening hours?',
    answer: 'We are open Monday to Thursday from 11:30 AM to 10:00 PM, Friday and Saturday from 11:30 AM to 11:00 PM, and Sunday from 12:00 PM to 9:00 PM. Kitchen closes 30 minutes before closing time.'
  },
  {
    id: 2,
    question: 'Do you offer gluten-free pasta options?',
    answer: 'Yes! We offer a variety of gluten-free pasta made from rice and corn flour. Please inform your server about any dietary restrictions when ordering, and our kitchen will take extra care to avoid cross-contamination.'
  },
  {
    id: 3,
    question: 'Can I make a reservation online?',
    answer: 'Absolutely! You can make reservations through our website or by calling us directly at (555) 123-PASTA. We recommend booking in advance, especially for weekend dinners and special occasions.'
  }
]

const newFaqs = [
  {
    id: 1,
    question: 'How do you make pasta?',
    answer: 'We are open Monday to Thursday from 11:30 AM to 10:00 PM, Friday and Saturday from 11:30 AM to 11:00 PM, and Sunday from 12:00 PM to 9:00 PM. Kitchen closes 30 minutes before closing time.'
  },
  {
    id: 2,
    question: 'Do you offer gluten-free pasta options?',
    answer: 'Yes! We offer a variety of gluten-free pasta made from rice and corn flour. Please inform your server about any dietary restrictions when ordering, and our kitchen will take extra care to avoid cross-contamination.'
  },
  {
    id: 3,
    question: 'Can I make a reservation online?',
    answer: 'Absolutely! You can make reservations through our website or by calling us directly at (555) 123-PASTA. We recommend booking in advance, especially for weekend dinners and special occasions.'
  }
]



export default function Main() {


  return (
    <main>

      <div className="p-5 mb-4 bg-light">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">{title}</h1>
          <p className="col-md-8 fs-4">
            {jumboMessage}
          </p>
        </div>
      </div>


      {/* <Alert message={'Success! Your pasta is ready'} /> */}

      <div className="container-fluid">

        <Alert type={'success'}>
          <p>Success! Your pasta is ready</p>
        </Alert>

      </div>

      <ProductsList />


      <div className="container">
        <AccordionList faqs={faqs} />
      </div>



      <div className="container">
        <AccordionList faqs={newFaqs} />
      </div>


      <Alert type={'warning'}>
        <h4 className="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr />
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </Alert>
    </main>
  )
}