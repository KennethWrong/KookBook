import {useHistory} from 'react-router-dom'
import {useState} from 'react'

const CreateNote = () => {
    const [language, setLanguage] = useState('')
    const [toggle, setToggle] = useState(false)
    const [icon, setIcon] = useState(null)

    const history = useHistory()
    const returnHomePage = () =>{
        history.push('/')
    }

    const unToggle = () => {
        setTimeout(() => {
            setToggle(false)
        },170)
    }

    const filterFunc = () => {
        const languageList = ['Python','JavaScript',,'Java','C++',]
        let filtered_list = languageList.filter(lang => lang.toLowerCase().includes(language.toLowerCase()))
        return filtered_list
    }


    const changeIcon = (lang) => {
        setLanguage(lang)
        setIcon(`./assets/images/${lang.toLowerCase()}.png`)
    }

    return(
        <div className='col-start-2 col-end-10 row-start-1 row-end-6 bg-white p-2 rounded-xl grid grid-rows-3 grid-cols-5'>
            <div className='flex flex-col center items-center row-start-1 row-end-3  col-start-2 col-end-5 p-8 bg-blue-300 justify-between rounded-md'>
                <h1 className='text-black text-center text-5xl mb-16 text-gray-500'>Create Note</h1>
                <div className='flex flex-col w-min'>
                    <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-3">
                        <img src={icon} className='object-scale-down h-5 mr-1'/>
                    </span>
                    <input type="text" placeholder="Programming Language" 
                     className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
                     value={language} onFocus={()=>setToggle(true)} onBlur={unToggle} onChange={(e) => setLanguage(e.target.value)}/>
                    <input placeholder="Enter title" className='create-note-input-field'></input>
                    {toggle?
                    <div className='absolute bg-black text-white list-none mt-14 w-72 p-2'>
                        {filterFunc().map((lang,index) => 
                        <li key={index} className='hover:bg-purple-400 cursor-pointer' 
                        onClick={() => changeIcon(lang)}>{lang}</li>)}
                        </div>:null}
                    <input className='create-note-input-field h-40' placeholder='Enter Description'></input>
                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                </div>
                </div>
                <button className='rounded-xl bg-green-600 h-16 w-36'> Create Note </button>
                <button onClick={returnHomePage} className=' outline-none text-red-600 hover:text-red-500 hover:border-red-600 border-transparent border-b-2 hover:border-current'>Back to notes</button>
            </div>
        </div>
    )
}

export default CreateNote