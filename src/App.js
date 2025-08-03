import AOS from 'aos';
import 'aos/dist/aos.css';
import Cookies from "js-cookie";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";
import Mission from "./Page/Mission/Mission";
import Register from "./Page/Signup/Register";
import ErrorPage from "./Page/Error/ErrorPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import React, { useState, useEffect } from "react";
import UserHome from "./Page/UserDashboard/UserHome/UserHome";
import AdminHome from './Page/AdminDashboard/AdminHome/AdminHome';
import Withdraw from "./Page/UserDashboard/Withdraw/Withdraw";
import AddFunds from "./Page/UserDashboard/AddFunds/AddFunds";
import Dashboard from "./Page/UserDashboard/Dashboard/Dashboard";
import ForgotPassword from "./Page/ForgotPassword/ForgotPassword";
import ReferAccounts from "./Page/UserDashboard/ReferAccounts/ReferAccounts";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import AdminDashboard from './Page/AdminDashboard/AdminDashboard/AdminDashboard';
import Members from './Page/AdminDashboard/Members/Members';
import PrivacyPolicy from './Page/PrivacyPolicy/PrivacyPolicy';
import FAQ from './Page/Faq/FAQ';
import TermsAndConditions from './Page/TermsAndConditions/TermsAndConditions';
import ScrollToTop from './components/Scroll/ScrollToTop';

function AppWrapper() {
    const [token, setToken] = useState(Cookies.get("authToken"));
    const [userType, setUserType] = useState(Cookies.get("userType") || "user");

    const location = useLocation();

    useEffect(() => {
        const savedToken = Cookies.get("authToken");
        if (savedToken) setToken(savedToken);
        AOS.init({ duration: 1000 });
    }, []);

    const handleLogin = (newToken, type) => {
        Cookies.set("authToken", newToken, { expires: 7, secure: true, sameSite: "Strict" });
        Cookies.set("userType", type || "user", { expires: 7, secure: true, sameSite: "Strict" });

        setToken(newToken);
        setUserType(type || "user");
    };

    const handleLogout = () => {
        Cookies.remove("authToken");
        Cookies.remove("userType");
        setToken(null);
        setUserType("user");
        window.location.reload()
    };

    const hideNavFooterPaths = [
        "/user", "/user/dashboard", "/forgot-password", "/user/withdraw",
        "/user/add-fund", "/user/refer-account", "/admin/dashboard", "/admin/members"
    ];

    // const hideNavFooterPaths = ["/user", "/user/dashboard", "/forgot-password", "/user/withdraw", "/user/add-fund", "/user/refer-account"];
    const showNavbarFooter = !hideNavFooterPaths.includes(location.pathname);

    return (
        <>
            <ScrollToTop />
            {showNavbarFooter && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/missions" element={<Mission />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/term-conditions" element={<TermsAndConditions />} />
                <Route path="/faq" element={<FAQ />} />
                <Route
                    path="/login"
                    element={
                        token
                            ? userType === "admin"
                                ? <Navigate to="/admin/dashboard" />
                                : <Navigate to="/user/dashboard" />
                            : <Login onLogin={handleLogin} />
                    }
                />
                <Route path="/register" element={token ? <Navigate to="/user/dashboard" /> : <Register onRegister={handleLogin} />} />
                <Route
                    path="/user"
                    element={token && userType === "user" ? <UserHome onLogout={handleLogout} /> : <Navigate to="/login" />}
                >
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="withdraw" element={<Withdraw />} />
                    <Route path="add-fund" element={<AddFunds />} />
                    <Route path="refer-account" element={<ReferAccounts />} />
                </Route>
                <Route
                    path="/admin"
                    element={token && userType === "admin" ? <AdminHome onLogout={handleLogout} /> : <Navigate to="/login" />}
                >
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="members" element={<Members />} />
                </Route>

                <Route path="*" element={<ErrorPage />} />
            </Routes>
            {showNavbarFooter && <Footer />}
        </>
    );
}

export default function App() {
    return (
        <Router>
            <AppWrapper />
        </Router>
    );
}
