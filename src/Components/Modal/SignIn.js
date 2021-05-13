import React , { useState } from "react";
import { Modal , Input , Form , Checkbox, Button } from 'semantic-ui-react'
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../constants";
import { useSelector , useDispatch } from "react-redux";

export default function SignIn() {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();
    const {register, handleSubmit, watch, formState: {errors} , reset } = useForm();
    
    const signInAccount = (info) => {
        const handlerRegisterRequest = async () => {
            const request = await fetch(`${BASE_URL}users/signin`,{
                method: 'POST',
                body: JSON.stringify({
                    ...info
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let response = await request.json();
            localStorage.setItem('session',JSON.stringify(response));
            setOpen(false);
        };
        handlerRegisterRequest();
        reset();
    };

    return (
        <Modal
            open={open}
            trigger={<Button>Inicia Sesión</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Modal.Content>
                <div>
                    <h5>¡Bienvenido de nuevo!</h5>
                </div>
                <Form onSubmit={handleSubmit(signInAccount)}>
                    <div>
                        <Input type="email" {...register('email')}  fluid placeholder='Dirección de email' />
                        <Input type="password" {...register('password')} fluid placeholder='Contraseña' />
                    </div>
                    <div>
                        <Button basic>
                            Iniciar Sesión
                        </Button>
                    </div>
                </Form>
                
            </Modal.Content>
        </Modal>
    )
}