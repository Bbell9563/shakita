import React from 'react';
import FetchUser from './components/FetchUser'
import './App.css';
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar'
import { Switch, Route, Link } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login'
import { WebPage } from './styles/AppStyle'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import User from './components/User'
import AdminPanel from './components/AdminPanel'
import {Icon, Visibility} from 'semantic-ui-react'
import Story from './components/Story';


class App extends React.Component{
  state = {
    sideBarTop: 0,
  }
  toggleSideBar = (type) => {
    if (type === 'close') {
      document.getElementById('sidebar').style.display = 'none'
    }
    else {
      document.getElementById('sidebar').style.display = 'flex'
    }

  }
  render(){
    const {sideBarTop } = this.state

    return (
      <div>
        <FetchUser>
          <WebPage style={{ minHeight: window.innerHeight }}>
            <div>
              <Navbar toggleSideBar={this.toggleSideBar}/>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/story' component={Story} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <ProtectedRoute exact path='/userpage' component={User} />
                <ProtectedRoute exact path='/adminpanel' component={AdminPanel} />
                <Route component={NoMatch} />
              </Switch>
            </div>
            <Footer />
            <div id='sidebar' style={{ ...styles.links, top: `${sideBarTop}px` }}>
                <div>
                  <div style={{ textAlign: 'right', cursor: 'pointer' }} onClick={() => this.toggleSideBar('close')}><Icon name='close' /></div>
                  <div  style={{ fontSize: '20px', padding: '15px', textAlign: 'center' }} onClick={() => this.toggleSideBar('close')}>
                     <Link style={{color:'white'}} to='/' >Home</Link>
                  </div>
                  <div style={{ fontSize: '20px', padding: '15px', textAlign: 'center' }} onClick={() => this.toggleSideBar('close')}>
                    <Link style={{color:'white'}} to='/STORY'>Our Story</Link>
                  </div>
                  <div style={{ fontSize: '20px', padding: '15px', textAlign: 'center' }} onClick={() => this.toggleSideBar('close')}>
                    <Link style={{color:'white'}} to='/programs'>Products/Services</Link>
                  </div>
                  
                </div>
                <div>
                  <div><a href='https://www.facebook.com/Shaktillc' style={{ color: 'white', fontSize: '17px' }}>
                    <Icon name='facebook' size='large' style={{ margin: '10px' }} />facebook.com/Shaktillc
                </a></div>
                  <div><a href='tel:3852272091' style={{ color: 'white', fontSize: '17px' }}>
                    <Icon name='phone' size='large' style={{ margin: '10px' ,transform: 'scaleX(-1)'}} />  385-227-2091
                </a></div>
                  <div><a href='mailto:shaktibydusty@gmail.com' style={{ color: 'white', fontSize: '17px' }}>
                    <Icon name='mail' size='large' style={{ margin: '10px' }} /> shaktibydusty@gmail.com
                </a></div>
                </div>
              </div>
          </WebPage>
        </FetchUser>
      </div>
    );
  }
}

export default App;

const styles = {
  links: {
    display: 'none',
    position: 'absolute',
    right: `0px`,
    width: '300px',
    color: 'white',
    backgroundColor: 'RGBA(240, 170, 179)',
    minHeight: window.innerHeight,
    padding: '15px',
    zIndex: '2',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}