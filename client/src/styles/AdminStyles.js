import styled from 'styled-components'

export const NotAdminHolder = styled.div`
  margin: 2% 10%;
  background-color: rgba(105, 89, 100, .3);
  padding: 2%;
  font-family: 'Electrolize';
  font-size: 50px;
  text-align: center;
  border-radius: 10px;
`

export const Holder = styled.div`
  margin: 2% 5%;
  background-color: rgba(105, 89, 100, .3);
  border-radius: 10px;  
  overflow:hidden;
  padding: 2%;
`
export const UserHolder = styled.div`
  background-color: rgba(255,255,255, .3);
  border-radius: 20px;
  margin-top: 1%;
  padding: 1%;
  text-align: left;
  display:flex;
  justify-content: space-between;
`

export const Button = styled.div`
  padding: 1%;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
`

export const AddButton = styled(Button)`
  color:#333;
  border: 2px solid #333;
  &:hover{
    background-color: #333;
    color: white;
  }
`

export const Header = styled.div`
  font-family: 'Parisienne', cursive;
  font-size: 60px;
`

export const Menu = styled.div`
  display:flex;
  justify-content: space-between;
`
export const Options = styled.div`
  font-family: 'Electrolize';
  font-size: 20px;
  padding: 1%;
  font-weight: bolder;
  text-align:center;
`

export const GoHome = styled.div`
  padding:1%;
  color:#a8252c ;
  border: 2px solid #a8252c;
  cursor: pointer;
  text-align:center;
  border-radius: 10px;
  margin-top: 5%;
  font-family: 'Electrolize';
  font-weight: bolder;
  font-size: 20px;
  text-decoration:none;
  &:hover{
    background-color: #a8252c;
    color: white;
`