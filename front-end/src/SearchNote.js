import {useEffect, useState} from 'react'
import DisSearchRes from './DisSearchRes'

const SearchNote = (props) => {
    const [noteDisplay,setNoteDisplay] = useState([])
    const [noteSearching, setNoteSearching] = useState('')
    const [focused, setFocused] = useState(false)
    const nonEmptyNotes = props.dummy.filter(item => item['notes']? item['notes']: null)
    const allNotes = nonEmptyNotes.map(language => language['notes'])
    useEffect(() => {
        let notes = []
        for (let x in Object.entries(allNotes)){
            for (let language in allNotes[x]){
                if (allNotes[x][language].toLowerCase().includes(noteSearching.toLowerCase())){
                    let position = {"index":language,
                                    "title":allNotes[x][language]}
                    notes.push(position)
                    
                }
            }
        }
        setNoteDisplay(notes)
    },[noteSearching])

    return(
        <div>
            <input type='text'value={noteSearching} className='search-note' 
            placeholder="Search for note" 
            onChange={(e)=>setNoteSearching(e.target.value)} 
            onFocus={() => setFocused(!focused)}>
            </input>
            {focused?<DisSearchRes notes={noteDisplay} />:null}
        </div>
    )
}

export default SearchNote
