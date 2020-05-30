import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom'
import { NavHolder, LoginLink, RegisterLink, IconDiv } from '../styles/NavStyle'
import Logo from '../images/Shakti.png'
import { Image, Icon } from 'semantic-ui-react'

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
            {user.role === 'admin' ?
              <></> :
              <RegisterLink as={Link} to='/userpage' >
                {user.name}
              </RegisterLink>
            }
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
            {/* <LoginLink as={Link} to='/login'>
              Login
            </LoginLink>
            <RegisterLink as={Link} to='/register'>
              Register
            </RegisterLink> */}
            <div>
              <div style={{textAlign:'center', fontSize:'20px', fontWeight:'bolder'}}>Contact Us</div>
            <div style={{width:'200px', display:'flex', justifyContent:'space-between', marginTop:'10px'}}>
              <a href='mailto:ladashton@gmail.com' style={{ color: 'black', marginLeft: '2%' }} ><Icon name='mail' size='big' /></a>
              <a href='tel:3852272091' style={{ color: 'black', marginLeft: '2%' }} ><Icon name='phone' size='big' /></a>
              <a href='https://www.facebook.com/Shaktillc' style={{ color: 'black', marginLeft: '2%' }} ><Icon name='facebook official' size='big' /></a>
            </div>
            </div>

          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <NavHolder>
        <div >
          <IconDiv as={Link} to='/' style={{ color: 'black' }}>
            <div style={{ width: '150px' }}>
              <Image src={Logo} />
            </div>
            <div style={{ bottom: '10px', right: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginLeft: '-60px', fontSize: '10px', marginBottom: '14px' }}>
              HEALTH, WELLNESS & BEAUTY
            </div>

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