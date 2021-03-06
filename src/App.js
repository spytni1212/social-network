import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navigation from "./components/Navigation/Navigation";
import DialogsContainer from './components/Dialogs/DialogsContainer'
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navigation />
        <div className="app-wrapper-content">
          <Route path = '/dialogs' render={ () => <DialogsContainer />} />
          <Route path = '/profile:userId?' render={ () => <ProfileContainer />} />
          <Route path = '/news' component={News} />
          <Route path = '/music' component={Music} />
          <Route path = '/users' render={ () => <UsersContainer /> } />
          <Route path = '/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
