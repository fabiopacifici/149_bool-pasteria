export default function Card({title, src, type, time}) {
/*   console.log(props);
  const {title, src, type} = props
  console.log(title, src, type); */
  
  return (
    <div className="col">
      <div className="card h-100">
        <img className="card-img-top" src={src} alt='' />
        <div className="card-body">
          <h4>{title}</h4>
          <div>Type: {type}</div>
          <div>Cooking time: {time}min</div>
        </div>
      </div>
    </div>
  )
}