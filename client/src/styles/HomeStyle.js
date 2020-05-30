import styled from 'styled-components'

export const HomeHeader = styled.div`
  font-size: 40px;
  font-family: 'Parisienne', cursive;
  font-weight: bolder;
  padding:1%;
  @media(max-width: 600px) {
    font-size: 30px;
  }
`
export const Holder = styled.div`
  
  @media(max-width: 600px) {
    margin: 2% 2%;
  }
`
export const Title = styled.div`
  text-align:center;
  background-color: rgba(105, 89, 100, .3);
  margin: 10px 2%;
  border-radius: 10px;
  padding:1%;
  @media(max-width: 600px) {
    margin: 2% 2%;
  }
  
`

export const Main = styled.div`
  font-family: 'Electrolize';
  font-size: 20px;
  font-weight: bolder;
  @media(max-width: 600px) {
    font-size: 20px;
  }
`

export const Sub = styled.div`
  font-family: 'Parisienne', cursive;
  font-size: 40px;
  font-weight: bolder;
  margin-top: 2%;
  @media(max-width: 600px) {
    font-size: 40px;
  }
`

export const Option = styled.div`
  font-family: 'Electrolize';
  font-size: 20px;
  margin: 2%;
  display:flex
`