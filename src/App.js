import React,{useState,useEffect} from 'react';
import './App.css';
import './Custom.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RegForm from './User/NewCompoment/Registration';
import LogForm from './User/NewCompoment/Login';
import UserDashbord from './User/NewCompoment/UserDashbord';
import Dashboard from './Admin/Dashboard';
import Index from './Admin/Index';
import SignUp from './Admin/SignupPage';
import UserTableInfo from './Admin/UserTableInfo';
import First_Container from './User/NewCompoment/First_container/FirstContainerPage';

import Sports from './User/NewCompoment/SportsNews/SportsNewsPage'

import SportsNewsPage from './User/NewCompoment/PoliticesNews/PoliticesNewsPage';

import BollywoodNews from './User/NewCompoment/BollywoodNews/BollywoodNewsPage'

import RecentArticlesSliderPage from './User/NewCompoment/Slider/RecentArticlesSliderPage';

function App(props) {
  //const [showPage, setShowPage] = useState(<MainPage/>)

  return (
    <div className="App">

      <Router>
          <Route
          path="/RegForm"
          exactly
          strict
          component={RegForm}
          history={props.history}
         /> 

         <Route
          path="/LogForm"
          exactly
          strict
          component={LogForm}
          history={props.history}
         />

         <Route
          path="/UserDashbord"
          exactly
          strict
          component={UserDashbord}
          history={props.history}
         />

        <Route
          path='/Dashboard'
          component={Dashboard}
          strict
          exactly
          history={props.history}
        />

        <Route
          path='/SignUp'
          component={SignUp}
          strict
          exactly
          history={props.history}
        /> 

        <Route
          path='/UserTableInfo'
          component={UserTableInfo}
          strict
          exactly
          history={props.history}
        />

        <Route
          path='/First_Container'
          component={First_Container}
          strict
          exactly
          history={props.history}
        />

        <Route
          path='/Sports'
          component={Sports}
          strict
          exactly
          history={props.history}
        />

        <Route
          path='/SportsNewsPage'
          component={SportsNewsPage}
          strict
          exactly
          history={props.history}
        />

        <Route
          path='/BollywoodNews'
          component={BollywoodNews}
          strict
          exactly
          history={props.history}
        />

       <Route
          path='/RecentArticlesSliderPage'
          component={RecentArticlesSliderPage}
          strict
          exactly
          history={props.history}
        />

      </Router>
     
    </div>
  );
}

export default App;
