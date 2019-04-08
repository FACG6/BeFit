import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

function Nav(props) {
  const loggedIn = localStorage.login;
  function handleLogout() {
    Swal.fire({
      type: "warning",
      title: "Sure?",
      text: "Your Schedule will be cleared when you logout!",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Sure"
    }).then(res => {
      if (res.value) {
        localStorage.clear();
        props.history.push("/login");
      }
    });
  }
  return (
    <nav className="nav">
      <h1 className="logo">BeFit</h1>
      <div className="links">
        {loggedIn ? (
          <a href="#" onClick={handleLogout}>
            LOGOUT
          </a>
        ) : null}
      </div>
    </nav>
  );
}

export default withRouter(Nav);
