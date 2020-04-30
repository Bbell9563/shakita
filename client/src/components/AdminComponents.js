import React from 'react'
import AddTimeForm from './AddTimeBlock'
import { AddButton, UserHolder } from '../styles/AdminStyles'
import { Delete, Edit } from '../styles/UserStyle'
import CreateUser from './CreateUser'
import axios from 'axios'
import EditUser from './EditUser'

export class Users extends React.Component {

  state = {
    addUserForm: false,
    users: [],
  }

  componentDidMount() {
    this.getAllUsers()
  }

  toggleAddUser = () => {
    const { addUserForm } = this.state
    this.setState({
      addUserForm: !addUserForm
    })
  }

  getAllUsers = () => {
    axios.get('/api/users').then(res=> this.setState({users: res.data}))
    .catch(e=> alert(e))
  }

  deleteUser = (id) => {
    axios.delete(`/api/users/${id}`)
    .then(res=> this.getAllUsers())
    .catch(e => console.log(e))
  }

  showEdit = (id) => {
    let form = document.getElementById(id).style.display = 'block'
  }

  render() {
    const { addUserForm, users } = this.state
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '48%' }}>
            <input placeholder='Search...' style={{ border: 'none', width: '100%', padding: '1.5%', fontSize: '16px', backgroundColor: 'rgba(0,0,0, 0', borderBottom: '1px solid #777', outline: 'none' }} />
          </div>
          <div style={{ width: '48%' }}>
            <AddButton onClick={this.toggleAddUser}>{addUserForm ? 'Cancel' : 'Create A User'}</AddButton>
          </div>
        </div>
        {addUserForm ? <CreateUser /> : <></>}
        {users.map(u =>
        <div>
          <UserHolder key={`user-${u.id}`}>
            <div style={{width:'30%'}}>
              <div>{u.name}</div>
              <div>Age:{u.age}</div>
              <div>{u.gender}</div>
            </div>
            <div style={{ width: '50%' }}>
              <div>Email:{u.email}</div>
              <div>Phone:{u.phone}</div>
              <div>Medical History: {u.medical_history}</div>
            </div>
            <div style={{width:'10%'}}>
              <Delete onClick={()=>this.deleteUser(u.id)} style={{fontSize:'12px'}}>Delete User</Delete>
              <Edit onClick={()=> this.showEdit(`userForm-${u.id}`)} style={{fontSize:'12px',marginTop:'2%'}}>Edit User</Edit>
            </div>
          </UserHolder>
          <div id={`userForm-${u.id}`} style={{display:'none'}}>
          <EditUser />
          </div>
        </div>
        )}
      </div>
    )
  }
}

export class Appointments extends React.Component {

  state = {
    addForm: false,
    appointments: []
  }

  componentDidMount = () => {
    this.getAllAppointments()
  }

  toggleAddForm = () => {
    const { addForm } = this.state
    this.setState({
      addForm: !addForm
    })
  }

  getAllAppointments = () => {
    axios.get('/api/appointments')
      .then(res => this.setState({ appointments: res.data }))
      .catch(e => console.log(e))
  }

  deleteAppointment = (id) => {
    axios.delete(`/api/appointments/${id}`)
    .then(res => this.getAllAppointments())
    .catch(e => console.log(e))
  }

  render() {
    const { addForm, appointments } = this.state
    return (
      <div style={{ textAlign: 'left' }}>
        <AddButton onClick={this.toggleAddForm}>{addForm ? 'Done' : 'Create A TimeSlot'}</AddButton>
        {addForm ? <AddTimeForm getAllAppointments={this.getAllAppointments} /> : <></>}
        {appointments.map(a =>
          <UserHolder key={`appointment-${a.id}`}>
            <div style={{width:'25%'}}>
              <div>Time:{a.time}</div>
              <div>Date:{a.date}</div>
              <div>Type:{a.kind === null ? '(No Type Yet)' : a.kind}</div>
            </div>
            <div style={{width:'45%', borderLeft:'1px solid #555', paddingLeft:'2%'}}>
              <div style={{display:'flex'}}>
                <div style={{display:'flex', flexDirection:'column', width:'130px'}}>
                  Users Scheduled:
                  <Edit style={{fontSize:'12px',marginTop:'2%'}}>Add User</Edit>
                </div>
                <div style={{marginLeft:'1%'}}>
                  {!a.scheduled_users.length > 0 ? 'No Users Scheduled' :
                  <div>
                    {a.scheduled_users.map(user=> 
                    <div key={`scheduled-${a.id}-${user.id}`} style={{display:'flex', flexWrap:'wrap', width:'200px'}}>
                      {user.name}
                      <div style={{color:'red', cursor:'pointer', marginLeft:'3%'}}>X</div>

                      </div>)}
                  </div>
                  }
                </div>
              </div>
            </div>
            <div style={{width:'20%'}}>
              <Delete onClick={()=>this.deleteAppointment(a.id)} style={{fontSize:'12px'}}>Delete Appointment</Delete>
              <Edit style={{fontSize:'12px',marginTop:'1%'}}>Edit Appointment</Edit>
            </div>
          </UserHolder>)}
      </div>
    )
  }
}