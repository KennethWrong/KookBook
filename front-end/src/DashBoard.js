import Menu from './Menu'
import Code from './Code'

function DashBoard() {
  return (
    <div className="grid grid-cols-10  grid-rows-6 pl-8 pt-4 min-h-screen">
      <Menu />
      <Code />
    </div>
  );
}

export default DashBoard;
