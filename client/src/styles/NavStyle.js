import styled from 'styled-components'
import Sparkle from '../images/sparkles.jpg'

export const NavHolder = styled.div`{
  color:black;
  display:flex;
  justify-content: space-between;
  padding: 10px 3%;
  @media(max-width: 600px){
    padding: 5px;
  }
}`

export const SidebarButton = styled.div`
  display:none;
  @media(max-width: 600px) {
    display:flex;
    justify-content: center;
    flex-direction: column;
    marginLeft:10px;
    cursor:pointer;
    margin-right:20px;
    margin-top: 30px;
  }
`

export const ContactInfo = styled.div`
  @media(max-width: 600px){
    display:none;
  }
`

export const style = {
  link:{
    color:'black',
    textDecoration:'none',
    fontWeight: 'bolder',
  }
}

export const ImageHolder = styled.div`
  margin: 0
`
export const IconDiv = styled.div`
  display:flex;
  text-decoration:none;
  color:black;
  width:300px;
  @media(max-width: 600px){
    width: 250px;
  }
`
export const IconPhoto = styled.div`
  width:150px;
  @media(max-width: 600px){
    width:120px;
  }
`


export const IconWords = styled.div`
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: -60px;
  font-size: 10px;
  margin-bottom: 14px;
  @media(max-width: 600px){
    margin-left: -40px;
  }
`

export const LoginLink = styled.div`
  padding:1%;
  width: 25%;
  margin: 1%;
  color: #222;
  text-align:center;
  font-family: 'Electrolize';
  border-radius: 20px;
  border: 2px solid #333;
  font-weight: bolder;
  text-decoration: none;
  &:hover{
    background-color: #333;
    color: white !important;
  };
  @media(max-width: 600px) {
    font-size: 10px;
    width: 70%;
    padding:4%
  }
`

export const RegisterLink = styled.div`
  padding:1%;
  width: 25%;
  margin: 1%;
  color: #222;
  text-decoration: none;
  font-family: 'Electrolize';
  font-weight: bolder;
  text-align:center;
  border-radius: 20px;
  border: 2px solid #333;
  &:hover{
    background-color: #333;
    color: white !important;
  };
  @media(max-width: 600px) {
    font-size: 10px;
    width: 70%;
    padding:4%
  }
`