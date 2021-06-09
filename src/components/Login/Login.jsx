import React from 'react'
import { Background, Contenedor, Input, TextLeft, TextDecoration, Boton, Iconos, Facebook } from '../../styles/LoginRegister'
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'
import { Box, Grid } from '@material-ui/core'
import {useForm} from '../../hooks/useForm'
import {useDispatch} from 'react-redux'
import { login } from '../../actions/auth';

const Login = () => {

    const dispatch = useDispatch();
   const [formValues, handleInputChange] = useForm({
       email:'',
       password:''
   })

   const {email, password} = formValues;

   const handleLogin = (e) => {
      e.preventDefault();
      dispatch(login(122,'Gustavo'))
   }


    return (
        <Background>
            <Contenedor className="col-md-4">
                <form onSubmit={handleLogin}>
                    <div className="form-group text-center">
                        <h5>Iniciar Sesión</h5>
                        <div className="form-group mx-sm-4 my-3">
                            <Input type="text" className="form-control"
                             id="" 
                             placeholder="Correo electrónico"
                             name='email'
                             value={email}
                             onChange={handleInputChange} />
                        </div>
                        <div className="form-group mx-sm-4 my-3">
                            <Input type="password" className="form-control"
                             id=""
                             placeholder="Contraseña"
                             name='password'
                             value={password}
                             onChange={handleInputChange} />
                        </div>
                        <div className="form-group mx-sm-4 ms-1">
                            <Boton type="submit" className="btn  my-sm-2">Ingresar</Boton>
                        </div>


                        {/* <div>
                            <Grid templateColumns="repeat(3, 1fr)" gap={2} width='100%' mt='10px'>
                                <Box w="100%" h="10" mt='13px'><hr color='black' /></Box> */}
                        <Box w="100%" h="10" textAlign='center'>o inicia con</Box>
                        {/* <Box w="100%" h="10" mt='13px'><hr color='black' /></Box>
                            </Grid> 
                            */}



                        <Iconos>
                            <Facebook className="form-group ">
                               <button> <FaFacebookF fontSize="25px"/></button>
                            </Facebook>
                            <div className="form-group ">
                               <button type="submit"><FcGoogle fontSize="30px"/></button> 
                            </div>
                        </Iconos>

                        <TextLeft className="form-group">
                            <span><TextDecoration href="">Quiero registrarme</TextDecoration></span>
                        </TextLeft>
                    </div>
                </form>
            </Contenedor>

        </Background>
    )
}

export default Login
