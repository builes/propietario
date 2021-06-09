import React from 'react'
import { Background, Contenedor, Input, TextLeft, TextDecoration, Boton, Iconos, Facebook } from '../../styles/LoginRegister'
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'
import { Box, Grid } from '@material-ui/core'

const Register = () => {
    return (
        <Background>
            <Contenedor className="col-md-4">
                <form>
                    <div className="form-group text-center">
                        <h5>Registro</h5>
                        <div className="form-group mx-sm-4 my-3">
                            <Input type="text" className="form-control" id="" placeholder="Nombre completo " />
                        </div>
                        <div className="form-group mx-sm-4 my-3">
                            <Input type="text" className="form-control" id="" placeholder="Correo electrónico" />
                        </div>
                        <div className="form-group mx-sm-4 my-3">
                            <Input type="password" className="form-control" id="" placeholder="Contraseña" />
                        </div>
                        <div className="form-group mx-sm-4 my-3">
                            <Input type="password" className="form-control" id="" placeholder="Confirmar contraseña" />
                        </div>
                        <div className="form-group mx-sm-4 ms-1">
                            <Boton type="submit" className="btn  my-sm-2">Ingresar</Boton>
                        </div>

                        <TextLeft className="form-group">
                            <span><TextDecoration href="">Ya tengo cuenta</TextDecoration></span>
                        </TextLeft>
                    </div>
                </form>
            </Contenedor>

        </Background>
    )
}

export default Register
