import React from 'react'
import {FormHeader, FormInput, Label} from '../styles/ToggleFormStyle'

export default class CreateUser extends React.Component{

  render(){
    return(
      <div>
        <form>
          <FormHeader>Create A User</FormHeader>
          <div style={{textAlign:'left'}}>
            <Label>Name</Label>
            <FormInput/>
            <Label>Age</Label>
            <FormInput/>
            <Label>Gender</Label>
            <FormInput/>
            <Label>Email</Label>
            <FormInput/>
            <Label>Phone</Label>
            <FormInput/>
          </div>
        </form>
      </div>
    )
  }
}