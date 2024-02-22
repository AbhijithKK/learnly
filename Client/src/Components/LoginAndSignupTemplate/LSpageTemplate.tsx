import { FunctionComponent } from 'react'
import { LSTemplateInterface } from '../../Utils/Interfaces'

import './LSpageTemplate.css'

const LSpageTemplate:FunctionComponent<LSTemplateInterface> = ({title,InputComponent,link,BtnComponent ,rboxHeight}) => {
 
  return (
    <div className='login-t-main'>
        <div className="login-t-left">
            <div className="login-t-left-img"></div>
        </div>
        <div className="login-t-right">
            <div className="login-t-right-center" style={{
                 height:rboxHeight
            }}>
                <div className='login-t-right-form'>
                <h2 className='login-t-right-title'>{title}</h2>
               {
                InputComponent?.map((Comp:any,index)=>(
                    <div className="login-t-right-inputbox" key={index}>
                        {Comp}
                    </div>
                ))
               }
                
                <p className='login-t-right-text'>Dont have an account...?<span><a href={link}>Signup</a></span></p>
                <div className="login-t-right-button">
                    {BtnComponent}
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default LSpageTemplate
