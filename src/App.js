import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";

function Login() {
  return <p>Login</p>;
}

function Contact() {
  return <p>Contact</p>;
}

function Services() {

  return (
    <div>
      <p>Services</p>
      <Outlet />
    </div>
  )
}

function ServicesWeb() {
  return <p>Services - web</p>;
}

function ServicesServer() {
  return <p>Services - server</p>;
}

console.log("Application is starting : D");

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>

      <nav>
        <NavLink to="login">Login</NavLink> {" --- "}
        <NavLink to="contact">Contact</NavLink> {" --- "}
        <NavLink to="services">Services</NavLink> {" --- "}
        <NavLink to="services/web">WEB</NavLink> {" --- "}
        <NavLink to="services/server">SERVER</NavLink> {" --- "}



        
      </nav>

      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services">
          <Route index element={ <Services /> }/>
          <Route path="web" element={<ServicesWeb />} />
          <Route path="server" element={<ServicesServer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
