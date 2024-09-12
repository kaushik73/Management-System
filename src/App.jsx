import "./App.css";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="">
      <Header />
      {/* <Home />
       */}
      <SignIn />
      <br />
      <br />
      <br />
      <br />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
