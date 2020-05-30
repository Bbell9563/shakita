import React from 'react'
import { HomeHeader, Holder, Option, Title, Main, Sub } from '../styles/HomeStyle'

export default class Home extends React.Component {

  render() {
    return (
      <>
        <Title>
          <Main>
            HEATH, WELLNESS & BEAUTY BY DUSTY LADAWN BAILEY
        </Main>
          <Sub>Shakti LLC</Sub>
        </Title>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Holder style={{width:'50%',marginTop:'2%', marginLeft:'2%'}}>
            <HomeHeader>Services</HomeHeader>
            <Option>
              <div style={{ fontSize: '20px', marginRight: '1%' }}>♦ </div>
              <div>Retail Square: Health, Yoga & Beauty Products</div>
            </Option>
            <Option>
              <div style={{ fontSize: '20px', marginRight: '1%' }}>♦ </div>
              <div>One on One Yoga Classes & Private Groups</div>
            </Option>
            <Option>
              <div style={{ fontSize: '20px', marginRight: '1%' }}>♦ </div>
              <div>Pressure Points & Salt Scrubs</div>
            </Option>
            <Option>
              <div style={{ fontSize: '20px', marginRight: '1%' }}>♦ </div>
              <div>Yoga Classes: Proper Breathing And Focused Stretching</div>
            </Option>
            <Option>
              <div style={{ fontSize: '20px', marginRight: '1%' }}>♦ </div>
              <div>Morning Coffee & Yoga Chats: Along With Guided Meditation</div>
            </Option>
            <Option>
              <div style={{ fontSize: '20px', marginRight: '1%' }}>♦ </div>
              <div>Permanent Makeup Artistry, Permanent Brows(Not Micro-Blading), Permanent Eyeliner, And Permanent Lip Liner And/Or Full Lip Color</div>
            </Option>
            <Option>
              <div style={{ fontSize: '20px', marginRight: '1%' }}>♦ </div>
              <div>
                If You Intend To Do Permanent Makeup: Schedule Appt About A Week Out And REquest Pre-Care Instructions And
                Documents To Be Signed Prior To Service. We Will Provide You A Hand Out For All Post-Care Instructions
        </div>
            </Option>
          </Holder>
          <Holder style={{width:'45%',marginTop:'2%', marginRight:'2%'}}>
            <HomeHeader>To Make An Appointment</HomeHeader>
            <Option>
              <div>
                - Login Into Facebook And Go To
              <a href='www.facebook.com/Shaktillc' style={{ color: 'black', textDecoration: 'underline' }}> www.facebook.com/Shaktillc</a>

              </div>
            </Option>
            <Option>
              <div>- Find The Appointment Availability Section And Select A Time</div>
            </Option>
          </Holder>
        </div>
      </>
    )
  }
}