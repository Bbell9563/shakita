import React from 'react'
import { FormHeader, Label, SubmitButton } from '../styles/ToggleFormStyle'
import axios from 'axios'
import { Input, Select, Dropdown, Form } from 'semantic-ui-react'

export default class TimeBlockForm extends React.Component {

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
      full: false,
      scheduled_users: []
    }
    axios.post('/api/appointments', appointment).then(res => {
      this.props.toggleAddForm()
      this.props.getAllAppointments()
    })
      .catch(e => console.log(e))
  }


  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormHeader>Create TimeSlot</FormHeader>
          <div>
            <div >
              <Form.Group widths='equal'>
                <Form.Input id='start'  label='Start (HH:MM)' />
                <Dropdown selection id='endType' options={dateOptions} label='type'/>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input id='end' label='End (HH:MM)' />
                <Select id='endType' options={dateOptions} />
              </Form.Group>
                <Form.Input id='date' type='date' label='Date'/>
            </div>

            <SubmitButton onClick={this.handleSubmit}>Add</SubmitButton>
          </div>
        </Form>
      </div>
    )
  }
}

const dateOptions = [
  { key: 'AM', value: 'AM', text: 'AM' },
  { key: 'PM', value: 'PM', text: 'PM' },

]