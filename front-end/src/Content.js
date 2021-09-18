const Content = (props) => {
    let notes = props.notes
    if(notes){
        let thing = Object.entries(notes)
        return(
            <div>
            {thing.map((item) => 
            <p key={item[0]} className='text-white p-1 pl-10 hover:bg-green-600 flex flex-row'>
                <img src='/assets/images/code-file.png' className='object-scale-down h-5 mr-2'/>
                {truncate_string(item[1])}
                </p>)}
            </div>
        )
    }
    return(
        <p className=' text-gray-400'>No entries yet</p>
    )
}

const truncate_string = (title) => {
    let truncated = ''
    if (title.length > 30){
        let truncated = title.substring(0,30)
        return truncated.trim()+'...'
    } else{
        return title
    }

}

export default Content