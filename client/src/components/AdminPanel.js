import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider"
import { NotAdminHolder, GoHome, Holder, Header, Menu, Options, AddButton } from '../styles/AdminStyles'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Users, Appointments} from './AdminComponents'


class AdminPanel extends React.Component {

  state={
    allUser: false
  }

  componentDidMount() {
    // this.changeValue('users', 'appointments')
    this.changeValue('appointments', 'users')

    
  }


  changeValue = (id, ids) => {
    document.getElementById('users').style.backgroundColor = 'rgba(105, 89, 100, 0)'
    document.getElementById('appointments').style.backgroundColor = 'rgba(105, 89, 100, 0)'
    document.getElementById(ids).style.backgroundColor = 'rgba(105, 89, 100, .5)'
    this.toggleShow(id)
  }

  toggleShow = (id) => {
    const {allUser} = this.state
    if(allUser === true){
      if(id=== 'appointments'){
        this.setState({
          allUser: false
        })
      }
    }
    else{
      if(id=== 'users'){
        this.setState({
          allUser: true
        })
      }
    }
  }

  
  render() {
    const { auth: { user } } = this.props
    const {users, allUser} = this.state
    return (
      <div>
        {user.role === 'admin' ?
          <Holder>
            <Header>Admin Panel</Header>
            <div style={{borderRadius:'10px', overflow:'hidden', backgroundColor:'rgba(105, 89, 100, .3)'}}>
              <Menu>
                <Options style={{ width: '50%', cursor:'pointer' }} id='users' onClick={() => this.changeValue('users', 'appointments')}>
                  All Users
              </Options>
                <Options style={{ width: '50%', cursor:'pointer' }} id='appointments' onClick={() => this.changeValue('appointments', 'users')}>
                  All Appointments
              </Options>
              </Menu>
              <div style={{ textAlign: 'center', padding: '2%' }}>
                {allUser ? 
                <Users/>
                :
                <Appointments />
                }
            </div>
            </div>
          </Holder>
          :
          <NotAdminHolder>
            <div>Sorry!</div>
            <div>But You Are Not An Admin</div>
            <div>Please Leave This Forbidden Place!</div>
            <GoHome as={Link} to='/'>Go Back To Home</GoHome>
          </NotAdminHolder>
        }
      </div>
    )
  }
}

export default class ConnectedAdminPanel extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <AdminPanel {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}