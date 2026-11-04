import "../css/navbar.css";
import "../css/global.css";
import ocbclogo from "../assets/OCBC-Logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <h1>OCBC</h1> */}
        <img src={ocbclogo} alt="OCBC Logo"/>
      </div>

      <div className="navbar-links">
        <a href="#" class="active">View Accounts</a>
        <a href="#">Transfer & Payments</a>
        <a href="#">AI Chatbot</a>
        <a href="#">Security</a>
        <a href="#">More</a>
      </div>

      <div className="navbar-profile">
        <button>Notifications</button>
        <button>Profile</button>
      </div>
    </nav>
  );
}

export default Navbar;
