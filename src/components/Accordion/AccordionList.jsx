import { useState } from "react"
import AccordionItem from "./AccordionItem"

export default function AccordionList({faqs}) {

  const [active, setActive] = useState(1)


  function handleClick(id) {
    if (active === id) {
      setActive(0)
    } else {
      setActive(id)
    }
  }


  if(!faqs){
    return (<p>No faqs to show</p>)
  }


  return (

    <>

      <h4 className="text-muted">Frequently Asked Questions</h4>
      <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="card p-3 my-3">

        {
          faqs.map((item) => (


            <AccordionItem onToggle={() => handleClick(item.id)} active={active} item={item} key={item.id} />

            /* 
            📌 Refactored inside the AccordionItem component with props: onToggle, active, item  
            <div className="item">
              <h3 onClick={() => handleClick(item.id)} className="d-flex justify-content-between align-items-center">
                {item.question}

                <span>{item.id === active ? '-' : '+'}</span>
              </h3>
              {item.id === active && <p>{item.answer}</p>}
            </div> */

          ))
        }

      </div>
    </>



  )
}