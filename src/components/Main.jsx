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



      <ProductsList />



    </main>
  )
}