import Alert from "./Alert"
import ProductsList from "./ProductList"
const title = 'BoolPasteria'
const jumboMessage = 'Benvenuti nel nostro pastificio! Qui troverete la migliore selezione di paste artigianali, preparate con ingredienti di alta qualità e seguendo le tradizioni italiane. Esplorate il nostro catalogo e scoprite i sapori autentici della nostra pasta.'
const pastas = ['Rigatoni', 'Penne', 'Spaghetti']
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

        <Alert type={'warning'}>
          <h4 className="alert-heading">Well done!</h4>
          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
          <hr />
          <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </Alert>
      </div>

      <ProductsList />


    </main>
  )
}