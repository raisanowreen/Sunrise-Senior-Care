import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import Blogs from './Pages/Home/Blogs/Blogs';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Service from './Pages/Home/Service/Service';
import Services from './Pages/Home/Services/Services';
import Testimonials from './Pages/Home/Testimonials/Testimonials';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/banner">
          <Banner></Banner>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <Route exact path="/service/:serviceId">
          <Service></Service>
        </Route>
        <Route exact path="/testimonials">
          <Testimonials></Testimonials>
        </Route>
        <Route exact path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
