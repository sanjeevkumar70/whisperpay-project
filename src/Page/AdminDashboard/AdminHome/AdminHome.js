import "./AdminHome.css";
import { NavLink, Outlet } from "react-router-dom";
import dash from '../../../assets/dashboard.svg';
import members from '../../../assets/members.svg';

export default function AdminHome({ onLogout }) {
  return (
    <div className="admin-dashboard-container">
      {/* ✅ Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
       
          <h2 className="username">Admin</h2>
        </div>

        <nav>
          <ul className="sidebar-menu">
            <li>
              <NavLink to="/admin/dashboard" end>
                <img src={dash} alt="" /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/members">
                <img src={members} alt="" /> Members
              </NavLink>
            </li>
           
          </ul>
        </nav>
      </aside>

      {/* ✅ Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <h1 className="welcome-text">Welcome, Admin!</h1>
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
