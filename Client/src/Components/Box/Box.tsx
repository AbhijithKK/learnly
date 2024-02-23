import { BoxInterface } from '../../Utils/Interfaces'
import dummyimg from '../../assets/dummycource.png'
import Button from '../Button/Button'
import './Box.css'
const Box = ({title,btnfnc,image}:BoxInterface) => {
  return (
    <div className='box-container'>
      <div className="imgcontainer">
        <img src={image?image:dummyimg} alt="" />
      </div>
      <div className="box-title">
       {title?title:'webdevolpopment'}
      </div>
      <div className="box-button">
<Button bColor='blue' height='2rem' name='Enroll now' width='6.5rem' BtnClick={btnfnc} />
      </div>
    </div>
  )
}

export default Box
