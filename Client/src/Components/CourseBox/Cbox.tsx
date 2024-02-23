import { CboxInterface } from '../../Utils/Interfaces'
import dummyimg from '../../assets/dummycource.png'
import './Cbox.css'

const Cbox = ({image,hedding,discription,lesson,payment}:CboxInterface) => {
  return (
    <div className='cb-container'>
      <div className="cb-image">
        <img src={image?image:dummyimg} alt="imagess" />
      </div>
      <div className="cb-text-main">
        <h2 className='cb-headding'>{hedding}</h2>
        <p className='cb-discription'>
            {discription}
        </p>
        <div className="cb-prize">
            <p>{lesson}</p>
            <p>₹{payment}</p>
        </div>
      </div>
    </div>
  )
}

export default Cbox
