import styled from 'styled-components'

export const FormHeader = styled.div`
  text-align: center;
  font-size: 50px;
  font-family: 'Parisienne', cursive;
  font-weight: bolder;
`

export const Form = styled.form`
  margin: 3% 15%;
  background-color: rgba(105, 89, 100, .3);
  border-radius: 10px;
  overflow:hidden;
  @media(max-width: 600px) {
    margin: 3% 3%;
  }
`

export const FormInput = styled.input`
  border: none;
  border-radius: 5px;
  width:100%;
  height: 50px;
  font-size: 20px;
  outline:none;
  margin: 1%;
  font-family: 'Electrolize';
  @media(max-width: 600px) {
    font-size: 25px;
    padding-top: 3%;
    padding-bottom: 3%;
  }
`

export const Label = styled.label`
  font-size: 16px;
  font-family: 'Electrolize';
  font-weight: bolder;
`
const Button = styled.div`
  cursor: pointer;
  padding-top: .5%;
  padding-bottom: .5%;
  text-align:center;
  border-radius: 10px;
  width:100%;
  font-family: 'Electrolize';
  font-weight: bolder;
  font-size: 20px;
`
export const SubmitButton = styled(Button)`
  color: #333;
  border: 2px solid #333;
  &:hover{
    background-color: #333;
    color: white;
  }
  
`