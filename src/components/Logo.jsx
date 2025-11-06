import boolLogo from '../assets/img/bool-pasta.png'

export default function Logo({ slogan }) {

  console.log(slogan); // undefined if not used in the template
  
  return (
    <figure>
      <img className='logo' width="60" src={boolLogo} alt="" />

      {slogan && <p>{slogan}</p>}
      
    </figure>
  )

}