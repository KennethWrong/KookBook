function Menu() {
  let dummy = ['Javascript', "C++", "Python", "TypeScript", "Java"]


  return (
    <div className='col-start-2 col-end-4 row-start-1 row-end-6 bg-gray-600'>
<button onClick={()=>console.log('hi')} className='create-note-button'>Create Note</button>
      <ul className='flex flex-col justify-between'>
          {dummy.map((language, index) => <li className='menu-language'>{language}</li> )}
      </ul>
    </div>
  );
}

export default Menu;
