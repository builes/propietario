import React from 'react'
import { Background, Contenedor, Input, TextLeft, TextDecoration, Boton, Iconos, Facebook } from '../../styles/LoginRegister'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password2: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .min(1, 'estructura no valida')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .required('campo obligatorio'),
            password2: Yup.string()
                .required('campo obligatorio')
                .oneOf([Yup.ref('password')], 'las contrasenas no coinciden')
        }),
        onSubmit: values => {
            dispatch(startRegisterWithEmailPasswordName(values.email, values.password, values.name))
        },
    });

    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formValues;


    return (
        <Background>
            <Contenedor className="col-md-4">
                <form onSubmit={formik.handleSubmit}>



                    <div className="form-group text-center">
                        <h5>Registro</h5>
                        <div className="form-group mx-sm-4 my-3">
                            <Input type="text" className="form-control"
                                id=""
                                placeholder="Nombre completo "
                                name='name'
                                value={formik.values.name}
                                onChange={formik.handleChange} />
                            {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                        </div>
                        <div className="form-group mx-sm-4 my-3">
                            <Input type="email" className="form-control"
                                id=""
                                placeholder="Correo electrónico"
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange} />
                            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                        </div>
                        <div className="form-group mx-sm-4 my-3">
                            <Input type="password" className="form-control"
                                id=""
                                placeholder="Contraseña"
                                name='password'
                                value={formik.values.password}
                                onChange={formik.handleChange} />
                            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                        </div>
                        <div className="form-group mx-sm-4 my-3">
                            <Input type="password" className="form-control"
                                id=""
                                placeholder="Confirmar contraseña"
                                name='password2'
                                value={formik.values.password2}
                                onChange={formik.handleChange} />
                            {formik.errors.password2 ? <div>{formik.errors.password2}</div> : null}
                        </div>
                        <div className="form-group mx-sm-4 ms-1">
                            <Boton type="submit" className="btn  my-sm-2"
                                onClick={formik.handleReset}>Borrar</Boton>
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
