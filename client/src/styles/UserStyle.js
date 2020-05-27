import styled from 'styled-components'

export const InfoHolder = styled.div`
  background-color: rgba(105, 89, 100, .3);
  margin: 2% 10%;
  padding: 2%;
  border-radius: 10px;
  display:flex;
  justify-content: space-between;
  @media(max-width: 800px) {
    margin: 2% 3%;
    flex-direction: column;
    padding:3%
  }
`
export const Other = styled.div`
  width: 50%;
  @media(max-width: 800px) {
    width:100%
  }
`

export const Buttons = styled.div`
  width: 10%;
  @media(max-width: 800px) {
    width:100%;
    margin-top: 5%;
  }
`

export const ImageHolder = styled.div`
  overflow:hidden;
  border-radius:50%;
  width:300px;
  height:300px;
  box-shadow: 0px 11px 79px -38px rgba(0,0,0,0.75);
`
export const Name = styled.div`
  text-align: center;
  font-family: 'Electrolize';
  font-size: 30px;
  margin-top: 3%;
`
export const Label = styled.div`
  font-family: 'Electrolize';
  font-weight: bolder;
  font-size: 25px;
  margin-top: 1%;
`

export const Info = styled.div`
  font-family: 'Electrolize';
  font-size: 20px;
  margin-top: 0.5%;
`

export const AppointmentHolder = styled.div`
  background-color: rgba(105, 89, 100, .3);
  margin: 2% 10%;
  padding: 2%;
  border-radius: 10px;
  @media(max-width: 800px) {
    margin: 2% 3%;
  }
`

export const Header = styled.div`
  font-family: 'Parisienne', cursive;
  font-weight: bolder;
  font-size: 50px;
  text-align:center;
`
export const Nothing = styled.div`
  font-family: 'Electrolize';
  font-size: 25px;
  text-align:center;
  margin-top: 2%;
`

const Button = styled.div`
  padding: 2%;
  border-radius: 30px;
  text-align:center;
  font-family: 'Electrolize';
  font-weight: bolder;
  font-size: 20px;
  cursor: pointer;
`

export const Delete = styled(Button)`
  color:#a8252c ;
  border: 2px solid #a8252c;
  text-decoration:none;
  margin-top: 3%;
  &:hover{
    background-color: #a8252c;
    color: white;
  }
`
export const Edit = styled(Button)`
  color:#597fc2;
  border: 2px solid #597fc2;
  text-decoration:none;
  &:hover{
    background-color: #597fc2;
    color: white;
  }
`