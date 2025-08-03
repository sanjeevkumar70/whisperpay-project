import "./UserHome.css";
import { NavLink, Outlet } from "react-router-dom";
import dash from '../../../assets/dashboard.svg';
import money from '../../../assets/money_bag.svg';
import share from '../../../assets/share_windows.svg';
import payment from '../../../assets/payment_arrow.svg';

export default function UserHome({ onLogout }) {
  return (
    <div className="dashboard-container">
      
      {/* ✅ Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
       
          <h2 className="username">Ashish</h2>
        </div>

        <nav>
          <ul className="sidebar-menu">
            <li>
              <NavLink to="/user/dashboard" end>
                <img src={dash} alt="" /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/withdraw">
                <img src={payment} alt="" /> Withdraw
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/add-fund">
                <img src={money} alt="" /> Add Funds
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/refer-account">
                <img src={share} alt="" /> Refer Account
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* ✅ Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <h1 className="welcome-text">Welcome, Ashish!</h1>
          <div className="profile-section">
            <img
              src="https://i.pravatar.cc/50"
              alt="User Profile"
              className="profile-img"
            />
            <button onClick={onLogout} className="logout-icon-btn" title="Logout">
              Logout
            </button>
          </div>
        </header>

        <section className="content-info">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
