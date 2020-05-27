import React from 'react';
import { Select, Form } from 'semantic-ui-react'
import { Label } from '../styles/ToggleFormStyle';
import {CancelButton, SubmitButton,ButtonGroup } from '../styles/FormStyle'

const sizeOptions = [
  { key: '12', value: '12', text: '12' },
  { key: '16', value: '16', text: '16' },
  { key: '20', value: '20', text: '20' },
  { key: '30', value: '30', text: '30' },
  { key: '40', value: '40', text: '40' },
  { key: '50', value: '50', text: '50' }
]

const fontOptions = [
  { key: 'Electrolize', value: 'Electrolize', text: 'Electrolize' },
  { key: 'Parisienne', value: 'Parisienne', text: 'Parisienne' },
]

export default class HomepageDisplay extends React.Component {

  render() {
    return (
      <Form  style={{marginTop:'2%'}}>
        <div style={{textAlign:'center', fontSize:'35px', fontFamily:'Electrolize', fontWeight:'bolder'}}>Update Homepage</div>
        <div style={{marginTop:'2%'}}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Label style={{display:'flex', flexDirection:'column', justifyContent:'flex-end', fontSize:'25px' }}>Mission Statement</Label>
            <div style={{ width: '50%', display:'flex',justifyContent: 'flex-end' }}>
              <Select placeholder='Font Type' options={fontOptions} style={{ marginRight: '1%',backgroundColor:'#fff0f9' }} />
              <Select placeholder='Font Size' options={sizeOptions} style={{backgroundColor:'#fff0f9'}}/>
            </div>
          </div>
          <Form.Field  style={{marginTop:'1%'}}>
            <input style={{backgroundColor:'#fff0f9'}} placeholder='Mission Statement' />
          </Form.Field>
        </div>
        <div style={{marginTop:'2%'}}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Label style={{  display:'flex', flexDirection:'column', justifyContent:'flex-end', fontSize:'25px' }}>Services</Label>
            <div style={{ width: '80%', display:'flex',justifyContent: 'flex-end' }}>
              <Select placeholder='Font Type' options={fontOptions} style={{ marginRight: '1%',backgroundColor:'#fff0f9' }} />
              <Select placeholder='Font Size' options={sizeOptions} style={{backgroundColor:'#fff0f9'}} />
            </div>
          </div>
          <Form.Field  style={{marginTop:'1%'}}>
            <textarea style={{backgroundColor:'#fff0f9'}} placeholder='Services' />
          </Form.Field>
        </div>
        <ButtonGroup>
          <CancelButton>Cancel</CancelButton>
          <SubmitButton>Update</SubmitButton>
        </ButtonGroup>
      </Form>
    )
  }
}