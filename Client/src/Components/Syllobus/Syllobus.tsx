import { useState } from 'react'
import { syllobusInterface } from '../../Utils/Interfaces'
import './Syllobus.css'

const Syllobus = ({obj,index}:syllobusInterface) => {
  const [height,setHeight]=useState<boolean>(false)
    const [idm,setId]=useState<string>('all')
    const btnclick=(id:string)=>{
console.log(idm);

      if(id==='all'){
        setId(id)
        setHeight(true)
      }else{
        if (id===idm) {
          setId('all')
        }else{
          setId(id)
          setHeight(true)
        }
      }
     
    }
 
    
  return (
    <>
     
        <div className="syllobus-main" 
        style={{
          height:height ? obj.id===idm ? `${5+obj.arrayLesson[parseInt(idm)]?.length-1}rem`:"5rem":"5rem"
        }}
        >
          <div className="syllobus-sub">
            <div className="syllobus-count">{index}</div>
            <div className="syllobus-title">{obj?.title?obj?.title:"java script-from scratch"}</div>
            <div className="syllobus-drop-btn">
              <button onClick={()=>btnclick(obj.id)} >&gt;</button>
            </div>
          </div>
          <div className="syllobus-lesson-count">{obj.arrayLesson?`${obj.arrayLesson.length} Lessons`:"15 lessons"}</div>
          <div className="syllobus-lesson-container">
          {
            obj?.arrayLesson.map((value,index)=>(

          <div className="syllobus-lesson-main" 
          style={{
            display:obj.id===idm ? "flex":"none"
          }}
          key={index}>
            <div className="lesson-count">{index+1}.</div>
            <div className="lesson-title">{value?value:"session 1"}</div>
          </div>
            ))
          }
            </div> 
        </div>
        
    </>
  )
}

export default Syllobus
