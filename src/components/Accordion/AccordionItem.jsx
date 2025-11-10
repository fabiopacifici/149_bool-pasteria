export default function AccordionItem({item, active, onToggle}){



  return (
    <div className="item">
      <h3 onClick={onToggle} className="d-flex justify-content-between align-items-center">
        {item.question}

        <span>{item.id === active ? '-' : '+'}</span>
      </h3>
      {item.id === active && <p>{item.answer}</p>}
    </div>
  )
}