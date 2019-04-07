import React, {Component} from 'react';
import Swal from 'sweetalert2';

class Logout extends Component {
  componentDidMount(){
    console.log(this.props);
    Swal.fire({
      title: "Sure?",
      text: "Your Schedule will be cleared when your logout?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Sure"
    }).then(res => {
      if (res.value) {
        localStorage.clear();
        console.log(this.props);
        this.props.history.push("/login");
      }
    });
  }
  render(){
    return null;
}
}

export default Logout;