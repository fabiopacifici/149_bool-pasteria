export default function Alert({ type, children }) {

//console.log(message, type);


  return (
    <div
      class={`alert alert-${type || 'info'}`}
      role="alert">

      {/* <p>{message}</p> */}
      {children}
    
    </div>

  )
}