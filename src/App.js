import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Banner from './Pages/Home/Banner/Banner';
import Contact from './Pages/Home/Contact/Contact';
// import DepartmentDetails from './Pages/Home/DepartmentDetails/DepartmentDetails';
// import Departments from './Pages/Home/Departments/Departments';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import Services from './Pages/Home/Services/Services';
import Testimonials from './Pages/Home/Testimonials/Testimonials';
import WhyUs from './Pages/Home/WhyUs/WhyUs';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SingleService from './Pages/SingleService/SingleService';
import Appointment from './Pages/UserInfo/Appointment/Appointment';
import ConfirmAppointment from './Pages/UserInfo/ConfirmAppointment/ConfirmAppointment';
import PrivateRoute from './Pages/UserInfo/PrivateRoute/PrivateRoute';

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
      <PrivateRoute exact path="/contact">
        <Contact></Contact>
      </PrivateRoute>
      <PrivateRoute exact path="/singleservice/:id">
        <SingleService></SingleService>
      </PrivateRoute>
      <PrivateRoute exact path="/appointment">
        <Appointment></Appointment>
      </PrivateRoute>
      <PrivateRoute exact path="/confirm">
        <ConfirmAppointment></ConfirmAppointment>
      </PrivateRoute>
      {/* <PrivateRoute exact path="/departments">
        <Departments></Departments>
      </PrivateRoute>
      <PrivateRoute exact path="/departmentdetails">
        <DepartmentDetails></DepartmentDetails>
      </PrivateRoute> */}
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
