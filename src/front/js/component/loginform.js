import React,{useContext, useState} from "react";
 import { Context } from "../store/appContext";
 import { useNavigate} from "react-router-dom";
 import "../../styles/index.css";

 export const LoginForm = () => {
    const {actions} = useContext(Context)
    const [loginError,setLoginError] = useState(false);
    const [inputEmail, setInputEmail]=useState("")
    const [inputPassword, setInputPassword]=useState("")
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        let isLogged = await actions.login(inputEmail, inputPassword) 
        if (isLogged){
            console.log('Login successful');
            navigate("/"); 
        } else {
            setLoginError(true);
            console.log('Login failed');
        }
    };
    return (
        <div className="contactForm">
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit}>
                 <div className="mb-3">
                     <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: 'brown' }}>Email</label>
                     <input type="email" className="form-control" id="exampleInputEmail1" placeholder="enter your email" onChange={(e) => setInputEmail(e.target.value)} />
                 </div>
                 <div className="mb-3">
                     <label htmlFor="exampleInputPassword" className="form-label" style={{ color: 'brown' }}>Password</label>
                     <input type="password" className="form-control" id="exampleInputPassword" placeholder="xxxxxxx" onChange={(e) => setInputPassword(e.target.value)} />
                 </div>
                 {loginError ? <div className="text-danger mb-3">Wrong email or password</div> : null}
                 <button type="submit" className="login btn btn-dark">Login</button>
            </form>
        </div>
    )
};