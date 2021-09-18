import {useState} from 'react'
import Content from './Content'

const NoteDivision = (props) => {
  let language = props.language
  let notes = language.notes
  let index = props.index
  let [show,setShow] = useState(false)  
  let rand = [1,2,3,4]



    return(
      <div key={index} className='menu-language  flex-col hover:bg-gray-600'>
        <button onClick={()=>setShow(!show)}>
            <div className='menu-language  border-0 full-width'>
                <div className='flex flex-row'>
                  <img src={`./assets/images/${language['name'].toLowerCase()}.png`} className='object-scale-down h-5 mr-1'alt="arrow"/>
                  {language['name']} 
                </div>
                <div className='px-0 mr-0 flex flex-row'>
                  {language["note-count"]}
                  <img src='./assets/images/arrow-left.png' className='object-scale-down h-5'alt="arrow" onClick={()=>console.log('drop down')} />
                </div>
            </div>
        </button>
            {show ? <Content notes={notes}/>:null}
      </div>
    )   
}

export default NoteDivision