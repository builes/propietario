import styled from 'styled-components'

export const Background = styled.div`
   background-image: url("https://i.ibb.co/PTvHqsF/logo-transparent.png");
   background-repeat: no-repeat;
   background-size: cover;
   background-size: 700px 700px!important;
   background-position-x: center;
   background-position-y: center;
   height: 100vh;
   display: flex;
    justify-content: center;
    align-items: center;
   @media only screen and (max-width: 768px){
    background-size: 100%!important;  
   } 
`

export const Contenedor = styled.div`
   background: rgba(255,255,255,0.5);
  padding:20px;
  border-radius:10px;
  box-shadow:0 0 30px rgba(0,0,0, 0.568);
`

export const Input =styled.input`
        background: rgba(0,0,0,.2);
        border-style:none;
        ::placeholder{
            color:black;
        }
        :focus{
            background:none;
        }
`
export const TextLeft = styled.div`
    text-align:left;
    text-decoration:none;
`
export const TextDecoration = styled.a`
    color:black;
    text-decoration:none;
    :hover{
        color:black;
    }
`

export const Boton = styled.button`
    width: 250px;
    border: 1px solid;
    border-color:#ff8800;
    :hover{
        background:#ff8800;
    }
    @media only screen and (max-width: 768px){
    width:100px; 
   }
`

export const Iconos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    margin: 3px!important;
    text-align: -webkit-center;
    border:none;
    background-color: transparent;
`

export const Facebook = styled.div`
       color:#142aee!important;
`