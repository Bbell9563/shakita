import React from 'react'
import {FormHeader, FormInput, Label, SubmitButton} from '../styles/ToggleFormStyle'
import axios from 'axios'

export default class TimeBlockForm extends React.Component{

  handleSubmit = (e) => {
    e.preventDefault()
    let time = `
    ${document.getElementById('start').value}
    ${document.getElementById('startType').value} -
    ${document.getElementById('end').value}
    ${document.getElementById('endType').value}
    `
    let appointment = {
      time: time, 
      date: document.getElementById('date').value, 
      user_id: 1, 
      full:false, 
      scheduled_users: []}
    axios.post('/api/appointments', appointment).then(res => this.props.getAllAppointments())
    .catch(e=> console.log(e))
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormHeader>Create TimeSlot</FormHeader>
          <div>
            <Label>Start (HH:MM)</Label>
            <FormInput  id='start' style={{width:'10%'}}/>
            <select id='startType' style={{width:'10%', textAlign:'center', height:'50px', fontSize:'20px', marginRight:'1%'}}>
              <option value='AM'>AM</option>
              <option value='PM'>PM</option>
            </select>
            <Label>End (HH:MM)</Label>
            <FormInput  id='end' style={{width:'10%'}}/>
            <select id='endType' style={{width:'10%', textAlign:'center', height:'50px', fontSize:'20px', marginRight:'1%'}}>
              <option value='AM'>AM</option>
              <option value='PM'>PM</option>
            </select>
            <Label>Date (MM/DD/YYYY)</Label>
            <FormInput id='date' style={{width:'20%'}}/>
            <SubmitButton onClick={this.handleSubmit}>Add</SubmitButton>
          </div>
        </form>
      </div>
    )
  }
}