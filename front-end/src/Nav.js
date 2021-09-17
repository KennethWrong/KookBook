import './styles/nav.css'

function Nav() {
  return (
    <div className="menu">
      <p class='full-width'>KookBook</p>
      <ul>
        <li><a href='#'>Home</a> </li>
        <li><a href='#'>About us </a> </li>
        <li><a href='#'>Support</a> </li>
        <li id='git'><a href='https://github.com/KennethWrong' className='git2'>GitHub</a> </li>
      </ul>
    </div>
  );
}

export default Nav;
