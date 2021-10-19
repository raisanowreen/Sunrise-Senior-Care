import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Banner from './Pages/Home/Banner/Banner';
import Blogs from './Pages/Home/Blogs/Blogs';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import Services from './Pages/Home/Services/Services';
import Testimonials from './Pages/Home/Testimonials/Testimonials';
import WhyUs from './Pages/Home/WhyUs/WhyUs';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SingleService from './Pages/SingleService/SingleService';

function App() {
  return (
  
    <AuthProvider>
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
      <Route exact path="/login">
        <Login></Login>
      </Route>
      <Route exact path="/testimonials">
        <Testimonials></Testimonials>
      </Route>
      <Route exact path="/whyus">
        <WhyUs></WhyUs>
      </Route>
      <Route exact path="/blogs">
        <Blogs></Blogs>
      </Route>
      <Route exact path="/contact">
        <Contact></Contact>
      </Route>
      <Route exact path="/singleservice/:id">
        <SingleService></SingleService>
      </Route>
      <Route exact path="*">
        <NotFound></NotFound>
      </Route>
    </Switch>
    <Footer></Footer>
  </Router>
    </AuthProvider>
    
  );
}

export default App;
