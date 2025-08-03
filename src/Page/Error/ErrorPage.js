import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Oops! The page you are looking for doesn’t exist.</p>
      <Link to="/" style={styles.link}>⬅ Go Back Home</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "10%",
    height:"100vh",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "3rem",
    color: "#e74c3c",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  link: {
    fontSize: "1rem",
    textDecoration: "none",
    color: "#3498db",
    fontWeight: "bold",
  }
};
