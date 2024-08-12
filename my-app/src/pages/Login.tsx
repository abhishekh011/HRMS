import { useState } from "react";
import { GetImage } from "../assets/image";
import AddButton from "../components/Button";
import TextInput from "../components/TextInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/Store";
import { setCurrentUser } from "../redux/UserSlice";
function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const obj = {
    color: "#fff",
    font: "50px",
    class: "btn btn-warning",
  };

  const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault();
      try {
        let response  = await axios.post('http://localhost:3002/user/signIn',{email,password});
        dispatch(setCurrentUser(response.data.user))
        navigate('/');
      } catch (error) {
         console.log(error);
         alert("somtjink went wrong");
         return
      }


  };

  return (
    <>
      <div className="container loginPage">
        <div className="row justify-content-center align-items-center ">
          <div
            className="d-sm-none d-none d-md-none d-lg-inline col-md-6"
            style={{ width: "300px", height: "350px" }}>
            <img className="img-fluid" src={GetImage.LoginImage} alt="Login" />
          </div>
          <div className="ms-3 col-md-6 d-flex justify-content-center"style={{ width: "40%", height: "100%" }}>
            <div className="" style={{width: "300px",height: "550px",}}>
              <div className="mt-5 mb-2 text-center">
                <img src={GetImage.Logo} alt="Logo" />
              </div>
              <div className="card-body">
                <h5 className="text-warning mb-2">LogIn</h5>
                <form onSubmit={handleSubmit}>
                  <TextInput
                    type="text"
                    label="Enter Email"
                    id="name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="mb-3">
                    <TextInput
                      type="password"
                      label="Password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <p style={{fontSize:'12px',cursor:'pointer',color:'rgba(102, 102, 102, 1)'}}>Forget Password</p>
                  <div className="d-grid">
                    <AddButton
                      onClick={handleSubmit}
                      type="submit"
                      label={"Sign In"}
                      obj={obj}
                    />
                    <small onClick={() => navigate("/Signup")}>
                      Don't Have Account
                      <span className="ms-2 text-warning">Create Account</span>
                    </small>
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

export default Login;
