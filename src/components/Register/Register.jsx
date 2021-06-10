import React from 'react'
import { Background, Contenedor, Input, TextLeft, TextDecoration, Boton, Iconos, Facebook } from '../../styles/LoginRegister'
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/uiError';

const Register = () => {

    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formValues;

    const { msjError } = useSelector(state => state.ui)


    const formValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Nombre requerido'))
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email requerido'))
            return false
        } else if (password < 5) {
            dispatch(setError('La contraseña debe ser mayor de 5 caracteres'))
            return false
        } else if (password !== password2) {
            dispatch(setError("Las contraseñas deben coincidir"))
            return false
        }
        dispatch(removeError(''))
        return true;
    }

    const handleRegister = (e) => {
        e.preventDefault();
        formValid();
    }

    return (
        <Background>
            <Contenedor className="col-md-4">
                <form onSubmit={handleRegister}>

                   

                    <div className="form-group text-center">
                        <h5>Registro</h5>
                        {
                        msjError &&
                        (
                            <div class="alert alert-danger" role="alert">
                                {msjError}
                            </div>
                        )
                    }
                        <div className="form-group mx-sm-4 my-3">
                            <Input type="text" className="form-control"
                                id=""
                                placeholder="Nombre completo "
                                name='name'
                                value={name}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group mx-sm-4 my-3">
                            <Input type="email" className="form-control"
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
                        <div className="form-group mx-sm-4 my-3">
                            <Input type="password" className="form-control"
                                id=""
                                placeholder="Confirmar contraseña"
                                name='password2'
                                value={password2}
                                onChange={handleInputChange} />
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
