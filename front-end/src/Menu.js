import NoteDivision from "./NoteDivision";
import SearchNote from "./SearchNote";
import {useHistory} from 'react-router-dom'

function Menu() {
  let dummy = [
    {'name':'Javascript',
      'note-count':0
    },
   {'name':"Python",
    'note-count':1,
    'notes':{
      '1512352':'Python best practices'
    }
  }, 
   {'name':"C++",
   'note-count':3,
   'notes':{
    '1134':'List comprehensions',
    '2415':'Best way to create a lambda function',
    '351235':'Sckitlearn'
  }
}, 
   {'name':"TypeScript",
   'note-count':3,
   'notes':{
    '512352':'Difference between typescript and javascript',
    '314325':'variable declaration',
    '6346236':'Number of trials'
  }
}, 
   {'name':"Java",
   'note-count':3,
   'notes':{
      '45678322':'How to be a better programmer',
      '4234123':'SpringBoot',
      '54532523':'MVC'
    }
   },
  ]

  const history = useHistory()
  const routeChange = () => {
    let path = '/create-note'
    history.push(path)
  }

  return (
    <div className='col-start-1 col-end-4 row-start-1 row-end-6 bg-gray-600 shadow-md rounded-md'>
    <SearchNote dummy={dummy} />
<button onClick={routeChange} className='create-note-button'>Create Note</button>
    {mapLogos(dummy)}
    </div>
  );
}

function mapLogos(dummy){
  return(
    <ul className='flex flex-col justify-between'>
      {dummy.map((language, index) => 
            <NoteDivision language={language} index={index}/>
            )}
    </ul>
      )
}


//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
export default Menu;
