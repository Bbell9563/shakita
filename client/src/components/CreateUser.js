import React from 'react'
import { FormHeader, FormInput, Label } from '../styles/ToggleFormStyle'
import { Form, Dropdown } from 'semantic-ui-react'
import { CancelButton, SubmitButton, ButtonGroup } from '../styles/FormStyle'
import axios from 'axios'


export default class CreateUser extends React.Component {
  state = {
    name: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    medical_history: '',
    password: 'Password',
    role: '',
    image: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
  }
  componentDidMount() {
    const { user } = this.props
    if (user) {
      this.setState({
        name: user.name, age: user.age, gender: user.gender, email: user.email,
        phone: user.phone, medical_history: user.medical_history, password: user.password,
        role: user.role, image: user.image
      })
    }
    else {
      if (this.props.who === 'Admin') {
        this.setState({ role: 'admin' })
      }
      else { this.setState({ role: 'user' }) }
    }
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  handleOnChange = (e, data) => {
    this.setState({ gender: data.value })
  }

  handleSubmit = () => {
    const { edit, user } = this.props
    if (edit) {
      let newUser = {
        ...this.state,
        id: user.id,
        provider: user.provider,
        uid: user.uid,
        allow_password_change: user.allow_password_change,
        nickname: user.nickname,
        created_at: user.created_at,
        updated_at: user.updated_at
      }
      axios.put(`/api/users/${user.id}`, newUser)
        .then(res => alert('user updated'))
        .catch(e => console.log(e))
    }
    else {
      let newUser = { ...this.state }
      axios.post("/api/auth", newUser)
        .then(res => alert('User Created'))
        .catch(e => console.log(e))
    }
  }

  render() {
    const { who, edit } = this.props
    const { name, age, gender, email, phone, medical_history } = this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormHeader>Create A {who}</FormHeader>
          <div style={{ textAlign: 'left' }}>
            <Form.Field>
              <Label>Name</Label>
              <input
                placeholder='Name'
                name='name'
                value={name}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Group >
              <Form.Field style={{width:'50%'}}>
                <Form.Input
                  label='Age'
                  placeholder='Age'
                  name='age'
                  fluid
                  value={age}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field style={{width:'50%'}}>
                <Form.Dropdown
                  label='Gender'
                  fluid
                  placeholder='Gender'
                  options={genderOptions}
                  name='gender'
                  selection
                  value={gender}
                  onChange={this.handleOnChange}
                />
              </Form.Field>

            </Form.Group>
            < Form.Field >
              <Label>Email</Label>
              <input
                placeholder='Email'
                name='email'
                value={email}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Label>Phone</Label>
              <input
                placeholder='Phone'
                name='phone'
                value={phone}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Label>Medical History</Label>
              <input
                placeholder='Medical History'
                name='medical_history'
                value={medical_history}
                onChange={this.handleChange}
              />
            </Form.Field>
          </div>
          <ButtonGroup style={{ justifyContent: 'flex-end' }}>
            <SubmitButton onClick={this.handleSubmit}>{edit ? 'Update' : 'Create'}</SubmitButton>
          </ButtonGroup>
        </Form>
      </div >
    )
  }
}

const genderOptions = [
  { key: 'Female', value: 'Female', text: 'Female' },
  { key: 'Male', value: 'Male', text: 'Male' },
  { key: 'Other', value: 'Other', text: 'Other' },
]