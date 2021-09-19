const DisSearchRes = (props) => {
    let notes = props.notes

    return(
        <div className='absolute  bg-gray-900'>
            {notes.map(item => <p key={item.id} 
            className='text-white p-3 hover:bg-purple-500 hover:text-black cursor-pointer' 
            onClick={()=>console.log('sad')}>
                {truncate_string(item.title)}
                </p>)}
        </div>
    )

}

const truncate_string = (title) => {
    let truncated = ''
    if (title.length > 30){
        let truncated = title.substring(0,28)
        return truncated.trim()+'...'
    } else{
        return title
    }

}

export default DisSearchRes