import React , { useState } from "react";
import { Modal , Input , Form , Checkbox, Button } from 'semantic-ui-react'
import { useForm } from "react-hook-form";
import { useSelector , useDispatch } from "react-redux";
import { updateSession } from "../../redux/reducers/session";
import { BASE_URL } from "../../constants";

export default function Register() {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();
    const {register, handleSubmit, watch, formState: {errors} , reset } = useForm();

    const registerAccount = (info) => {
        const handlerRegisterRequest = async () => {
            const request = await fetch(`${BASE_URL}users/create`,{
                method: 'POST',
                body: JSON.stringify({
                    ...info
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let response = await request.json();
            dispatch(updateSession(response));
            setOpen(false);
        };
        handlerRegisterRequest();
        reset();
    };

    return (
        <Modal
            open={open}
            trigger={<Button>Regístrate</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Modal.Content>
                <div>
                    <h5>Registrate en chollox</h5>
                    <p>Escribé tus datos</p>
                </div>
                <Form onSubmit={handleSubmit(registerAccount)}>
                    <div>
                        <Input type="text" {...register('name',{required: true})}  fluid placeholder='Nombre y Apellidos' />
                        <Input type="email" {...register('email')}  fluid placeholder='Dirección de email' />
                        <Input type="password" {...register('password')} fluid placeholder='Contraseña' />
                    </div>
                    <div>
                        <div>
                            <Checkbox />
                            He leído y acepto las Condiciones de uso y la Política de privacidad de Chollox.
                        </div>
                    </div>
                    <div>
                        <Button type="submit" primary>
                            Crear una cuenta
                        </Button>
                        <Button basic>
                            Iniciar Sesión
                        </Button>
                    </div>
                </Form>
                
            </Modal.Content>
        </Modal>
    )
}