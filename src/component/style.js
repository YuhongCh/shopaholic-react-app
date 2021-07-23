import styled from "styled-components";

export const SectionWrapper = styled.section`
  box-shadow: 0 0 5px #ccc;
  padding: 15px 10px;
  width: 1200px;
  height: 480px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
`

export const DetailImageWrapper = styled.img`
  max-width: 500px;
  min-width: 290px;
  height: 300px;
  display: block;
  object-fit: cover;
  margin: 25px;
`

export const ButtonWrapper = styled.button`
  background: #333;
  color: white;
  text-decoration: none;
  padding: 10px 35px;
  margin-top: 30px;
  display: inline-block;
  font-family: 'Georgia', sans-serif;
`

export const TitleWrapper = styled.div`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  padding: 0;
  box-sizing: border-box;
  margin: 0;
  font-family:  'Segoe UI',serif;
  -webkit-font-smoothing: antialiased;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const TextWrapper = styled.div`
  padding: 0;
  box-sizing: border-box;
  font-family: 'Georgia', sans-serif;
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
  margin: 15px 0;
`

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 50px 0;
  box-sizing: border-box;
`

export const BoxWrapper = styled.div`
  max-width: 500px;
  min-width: 290px;
  margin: 25px;
`