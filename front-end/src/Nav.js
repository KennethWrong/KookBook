import './styles/index.css'

function Nav() {
  return (
    <div className="grid grid-cols-2 px-1.5 py-2  border-b-2 border-pink-300">
      <h1 className='text-white text-2xl'> KookBook </h1>
      <ul className="grid grid-cols-4 text-white text-xl">
        <li className='text-center'><a href='#' className='nav-items'>Home</a></li>
        <li className='text-center'><a href='#' className='nav-items'>About us</a></li>
        <li className='text-center'><a href='#' className='nav-items'>Support</a></li>
        <li className='text-center'><a href='#' className='nav-items'>GitHub</a></li>
      </ul>
    </div>
  );
}

export default Nav;
