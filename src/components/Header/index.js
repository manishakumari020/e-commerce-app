import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="header-container">
      <div className="nav-details">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
          alt="website logo"
          className="image1"
        />
        <button type="button" className="nav-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png a"
            alt="nav logout"
            className="nav-item-image"
          />
        </button>
      </div>
      <div className="header-container nav-large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
          alt="website logo"
          className="image1"
        />
        <ul className="nav-list-container">
          <li className="list-item">Home</li>
          <li className="list-item">Products</li>
          <li className="list-item">Cart</li>
        </ul>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-mobile-container">
      <ul className="mobile-list-container">
        <li className="nav-mobile-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-item-image"
          />
        </li>

        <li className="nav-mobile-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
            alt="nav product"
            className="nav-item-image"
          />
        </li>

        <li className="nav-mobile-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
            alt="nav cart"
            className="nav-item-image"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
