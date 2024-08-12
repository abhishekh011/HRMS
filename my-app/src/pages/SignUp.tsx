import { useState } from "react";
import { GetImage } from "../assets/image";
import AddButton from "../components/Button";
import TextInput from "../components/TextInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  
  const obj = {
    color: "#fff",
    font: "50px",
    class: "btn btn-warning",
  };
  const handelSubmit = async() => {
    if (password !== confirmPassword) 
     return console.log("Password and ConfirmPassword Not Match");

    try {
        let response = await axios.post('http://localhost:3002/user/signUp',{name,email,password});
        alert(response.data.message)
        navigate('/Login');
        console.log(response.data.message);
    } catch (error) {
          console.log(error);
          alert("Imtenal Error");
    }
  };
  return (
    <>
      <div className="container loginPage">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="d-sm-none d-none d-md-none d-lg-inline col-md-6 signUpImageDiv1">
            <img className="img-fluid" src={GetImage.LoginImage} alt="Login" />
          </div>
          <div className="ms-3 col-md-6 d-flex justify-content-center"
            >
            <div className=" signupdiv" >
              <div className="mt-5  text-center">
                <img src={GetImage.Logo} alt="Logo" />
              </div>
              <div className="card-body">
                <h5 className="text-warning mb-1">Sign Up</h5>
                <form onSubmit={handelSubmit}>
                  <TextInput
                    type="text"
                    label="Full Name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextInput
                    type="email"
                    label="Email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />{" "}
                  <TextInput
                    type="password"
                    label="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <TextInput
                    type="password"
                    label="Confirm Password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div className="d-grid">
                    <AddButton
                      onClick={handelSubmit}
                      type="button"
                      label={"Add Employee"}
                      obj={obj}
                    />
                     <p style={{fontSize:'12px',cursor:'pointer',color:'rgba(102, 102, 102, 1)'}} onClick={()=>navigate('/Login')}>Alrady have account</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
