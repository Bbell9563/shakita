import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom'
import { NavHolder, style, ImageHolder, LoginLink, RegisterLink, IconDiv } from '../styles/NavStyle'
import Logo from '../images/Logo.png'

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1% 0 1% 0' }}>
            <LoginLink onClick={() => handleLogout(this.props.history)}>
              Logout
            </LoginLink>
            <RegisterLink as={Link} to='/userpage' >
              {user.name}
            </RegisterLink>
            {user.role === 'admin' ? 
            <RegisterLink as={Link} to='/adminpanel' >
              Admin Panel
            </RegisterLink>
            : <></>
            }
          </div>
        </div>


      )
    } else {
      return (
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1% 0 1% 0' }}>
            <LoginLink as={Link} to='/login'>
              Login
            </LoginLink>
            <RegisterLink as={Link} to='/register'>
              Register
            </RegisterLink>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <NavHolder>
        <div >
          <IconDiv as={Link} to='/' >

            <img src={Logo} style={{ width: '100px'}} />
            <div style={{bottom:'10px', right:'20px', display:'flex', flexDirection:'column', justifyContent:'flex-end', marginLeft: '-35px', fontSize:'10px', marginBottom:'14px'}}>Yoga And Holistics</div>

          </IconDiv>
        </div>
        {this.rightNavItems()}
      </NavHolder>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);