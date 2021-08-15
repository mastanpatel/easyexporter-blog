import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ReactGA from 'react-ga';


ReactGA.initialize('UA-204991172-1 ');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Post} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
