import styled from "styled-components";
import { Link } from "react-router-dom";

//general layout for shopaholic
export const SectionWrapper = styled.section`
  box-shadow: 0 0 5px #ccc;
  padding: 15px 10px;
  max-width: 1200px;
  margin: 80px auto;
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
`

// style for home page
export const ProductListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-content: flex-start;
  flex-wrap: wrap;
  
`

export const CardWrapper = styled.div`
  min-width: 300px;
  min-height: 400px;
  border: 1px solid #eee;
  overflow: hidden;
  padding: 10px;
  box-shadow: 2px 8px 20px #ddd;
  margin: 10px 15px;
  transition: 0.5s linear;
  box-sizing: border-box;
  font-family: 'Georgia', sans-serif;
  display: block;
`

export const CardInfoWrapper = styled.div`
  margin: 10px 15px;
  text-decoration: none;
  a{
    text-decoration: none;
    color: #333;
  }
  a:hover{
    color: darkblue;
  }
`

export const CardImageWrapper = styled.img`
  max-width: 300px;
  max-height: 300px;
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
`

export const CardTextWrapper = styled.div`
  padding: 0;
  box-sizing: border-box;
  font-family: 'Georgia', sans-serif;
  line-height: 1.5;
  margin: -5px 0;
  -webkit-font-smoothing: antialiased;
`

export const CardTitleLinkWrapper = styled(Link)`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: -5px;
  font-family:  'Segoe UI',serif;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
`

export const CardDetailLinkWrapper = styled(Link)`
  background:  #333;
  text-align: center;
  width: 300px;
  margin-left: 10px;
  height: 25px;
  padding-top: 15px;
  padding-bottom: 10px;
  font-size: 1em;
  color: white;
  text-decoration: none;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
`

// style for detail page
export const ProductDetailWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 50px 0;
  box-sizing: border-box;
`

export const DetailImageWrapper = styled.img`
  max-width: 500px;
  min-width: 290px;
  height: 300px;
  display: block;
  object-fit: cover;
  margin: 25px;
`

export const DetailInfoWrapper = styled.div`
  max-width: 500px;
  min-width: 290px;
  margin: 25px;
`

export const DetailTitleWrapper = styled.div`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  font-weight: bold;
  box-sizing: border-box;
  font-family:  'Segoe UI',serif;
  letter-spacing: 1px;
`

export const DetailButtonWrapper = styled.button`
  background: #333;
  color: white;
  text-decoration: none;
  padding: 10px 35px;
  margin-top: 30px;
  display: inline-block;
  font-family: 'Georgia', sans-serif;
`

export const DetailTextWrapper = styled.div`
  box-sizing: border-box;
  font-family: 'Georgia', sans-serif;
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
  margin: 10px 0;
`

