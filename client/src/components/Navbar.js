import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom'
import { NavHolder, IconPhoto, IconDiv, SidebarButton, ContactInfo, IconWords } from '../styles/NavStyle'
import Logo from '../images/Shakti.png'
import { Image, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
const topNavBar = (
  <div>
    NavBar
  </div>
)



class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (<div>Nope</div>)
    } else {
      return (
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1% 0 1% 0' }}>

            <SidebarButton onClick={() => this.props.toggleSideBar('open')}>
              <div> <Icon name='sidebar' style={{ color: 'black'}} size='big' /></div>
            </SidebarButton>

            <ContactInfo>
              <div style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bolder', color: 'black' }}>Contact Us</div>
              <div style={{ width: '125px', display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <a href='mailto:ladashton@gmail.com' style={{ color: 'black', marginLeft: '5px' }} ><Icon name='mail' size='large' /></a>
                <a href='tel:3852272091' style={{ color: 'black' }} ><Icon name='phone' size='large' /></a>
                <a href='https://www.facebook.com/Shaktillc' style={{ color: 'black ' }} ><Icon name='facebook official' size='large' /></a>
              </div>
            </ContactInfo>


          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <NavHolder>
        <div>
          <IconDiv as={Link} to='/' style={{ color: 'black' }}>
            <IconPhoto>
              <Image src={Logo} />
            </IconPhoto>
            <IconWords>
              HEALTH, WELLNESS & BEAUTY
            </IconWords>

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