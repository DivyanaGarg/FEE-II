
import { useState } from "react";
import "./App.css";

function App() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Enter a valid 10-digit mobile number");
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters");
    } else {
      setError("");
      alert("Login successful!");
    }
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input type="tel" placeholder="Mobile number" value={mobile}
          onChange={(e) => 
            setMobile(e.target.value.replace(/\D/g, ""))
          }/>
        <input type="password" placeholder="Enter password" value={password}
          onChange={(e) => 
            setPassword(e.target.value)
          }/>
          
        {error && <p className="error">{error}</p>}

        <button type="submit">Sign In</button>

        <p>
          Don't have an account?{" "}
          <a href="#" onClick={(e) => 
            e.preventDefault()
            }> Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

export default App;