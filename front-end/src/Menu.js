import NoteDivision from "./NoteDivision";

function Menu() {
  let dummy = [
    {'name':'Javascript',
      'note-count':0
    },
   {'name':"Python",
    'note-count':0
  }, 
   {'name':"C++",
   'note-count':3,
   'notes':{
    '1':'List comprehensions',
    '2':'Best way to create a lambda function',
    '3':'Sckitlearn'
  }
}, 
   {'name':"TypeScript",
   'note-count':3,
   'notes':{
    '1':'Difference between typescript and javascript',
    '2':'variable declaration',
    '3':'Number of trials'
  }
}, 
   {'name':"Java",
   'note-count':3,
   'notes':{
      '1':'How to be a better programmer',
      '2':'SpringBoot',
      '3':'MVC'
    }
   },
  ]


  return (
    <div className='col-start-1 col-end-4 row-start-1 row-end-6 bg-gray-600 shadow-md rounded-md'>
      <input className='search-note' placeholder="Search for note"></input>
<button onClick={()=>console.log('hi')} className='create-note-button'>Create Note</button>
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
