import React from 'react'
import { 
  Words1, Words2, Words3, Words4, Words5, Words6, Words7, Words8, Words9, MainBox
 } from '../styles/HomeStyle'

export default class Home extends React.Component {

  render() {
    return (
      <>
        <div style={{backgroundColor:'RGBA(204, 143, 151, 0)'}}>
          <MainBox>
            <Words1>Founded on a vision of Loyalty</Words1>
            <Words1 style={{textAlign: 'center'}}> & Love</Words1>
            <Words2>DEDICATION TO HUMANITY</Words2>
            <Words3>Respect and sacrifice....</Words3>
            <Words4>Healing Light and</Words4>
            <Words4>Internal Growth</Words4>
            <Words5>Peace & Chaos</Words5>
            <Words6>Self love and Self Compassion....</Words6>
            <Words7>Chance Meetings</Words7>
            <Words8>And A connection that binds us.....</Words8>
            <Words9>Shakti holds truth for always</Words9>
          </MainBox>
        </div>
      </>
    )
  }
}