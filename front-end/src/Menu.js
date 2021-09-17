import './styles/menu.css'

function Menu() {
  return (
    <div class='dashboard-menu'>
<button onClick={()=>console.log('hi')}>Create Note</button>
      <ul>
          <li>Python</li>
          <li>C++</li>
      </ul>
    </div>
  );
}

export default Menu;
