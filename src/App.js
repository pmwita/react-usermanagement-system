import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import NavBar from './components/layout/NavBar';
import {BrowserRouter as Router, Route, Routes }from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import ViewUser from './components/user/ViewUser';
// import AddUserNew from './components/user/AddUserNew';



// import HelloFunctional from './components/HelloFunctional';
// import HelloClass from './components/HelloClass';
// import HelloES6 from './components/HelloFunctionalES6';

// import Count from './components/Count';
// import FormComponent from './components/FormComponent';


//named import should be always in brackets
//import {HelloFunctionalES6} from './components/HelloFunctionalES6';

// import Display from './components/Display';
// import Welcome from './components/Welcome';



// function App() {
//   return (
//     <div>
      {/* <h2>Hello App Component</h2> */}

      {/* <HelloFunctional></HelloFunctional> */}
      {/* comment out this way*/}
  {/* {self closing style} */}

  {/* <HelloFunctional/>
 <HelloClass name="Max" age="22" />
 <HelloClass name="Jane" age="26" />
 <HelloES6/> */}

 {/* <HelloFunctionalES6/> */}

{/* <Display firstName="John" lastName="Doe" age="27">
  <p>Some Text data from John</p>
</Display><br/> */}

{/* <Display firstName="Peter" lastName="Mwita" age="28">
  <input type="text" placeholder="Enter your details" />
</Display> */}

{/* <Welcome /> */}
{/* <Count /> */}

{/* <FormComponent /> */}


{/* <h2>UMS Application</h2> */}


function App() {
  return (
    <Router>
    <div>

<NavBar />

<Routes>
  <Route exact path="/" element={<HomePage/>} />
  <Route exact path="/about" element={<AboutPage/>} />
  <Route exact path="/contact" element={<ContactPage/>} />
  <Route exact path="/users/add" element={<AddUser/>} />
  {/* <Route exact path="/users/add" element={<AddUserNew/>} /> */}
  <Route exact path="/users/edit/:userId" element={<EditUser/>} />
  <Route exact path="/users/view/:userId" element={<ViewUser/>} />
  <Route path="*"  element={<PageNotFound/>} />
  
</Routes>

    </div>
  </Router>
  );
}


export default App;
