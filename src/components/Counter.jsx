import { useState } from "react";

export default function Counter() {

  /* Here goes your js logic 👇 */


  // Destucturing of the state result values [value, function]
  const [count, setCount] = useState(0)


  function handleClick(){

    // ❌ This won't work
    // count++  
    // count = count + 1


    setCount(count + 1)

  }


  
  //  📌Standard variables are not reactive (the ui is not updated when the variable changes)
/*   let counter = 0

  function handleClick() {
    counter++
    console.log(counter);
    
  } */

  /* 
    function handleClick(message) {
      alert(message)
    } */



  /*   function handleClick() {
      alert('Click')
    }
   */


  /* Markup goes down here 👇 */
  return (
    <>

      <p>{count}</p>
      <button onClick={handleClick} className="btn btn-dark">Increment</button>
      <button onClick={()=> setCount(count - 1)} className="btn btn-dark">Decrement</button>

      {/* // Pass a callback function */}
      {/* <button onClick={() => handleClick('Ciao Event Handling in JSX')} className="btn btn-dark">Click me</button> */}
      {/* // Pass the function handler */}
      {/* <button onClick={handleClick} className="btn btn-dark">Click me</button> */}
    </>
  )
}
