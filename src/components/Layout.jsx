import  {Outlet, NavLink}  from "react-router-dom"
import './layout.css'



const Layout = () => {
    return (
      <div>
        <header className="header">
          <div className="container">
            <nav>
              <ul className="header__list">
                <li className='header__item'><NavLink className='header__link' to="/">Home</NavLink></li>
                <li className='header__item'><NavLink className='header__link' to="/todos">Todos</NavLink></li>
                <li className='header__item'><NavLink className='header__link' to="/favorite">Favorite</NavLink></li>
              </ul>
            </nav>
          </div>
      </header>
      <div className="container">
        <Outlet />
      </div>
      <footer>
        <div className="container">
        2021
        </div>
      </footer>
      </div>
    )
  }

  export default Layout;