import React from "react";
import { Form, Grid, Select, TextArea } from 'semantic-ui-react';

export default function HomeUploadForm(props) {
    return(
        <Form className="block block__middle">
            <h4>INFORMACIÓN DE TU INMUEBLE</h4>
            <Form.Group widths="equal">
                <Form.Field>
                    <label>¿Alquiler o venta?</label>
                    <Select />
                </Form.Field>
                <Form.Field>
                    <label>Tipo de espacio</label>
                    <Select />
                </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Field>
                    <label>Precio</label>
                    <input type="number" />
                </Form.Field>
                <Form.Field>
                    <label>Superficie m2</label>
                    <input type="text" />
                </Form.Field>
            </Form.Group>
            <Form.Group>
                <Form.Field>
                    <label>Título</label>
                    <input placeholder='' />
                </Form.Field>
            </Form.Group>
            <Form.Group>
                <Form.Field>
                    <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
                </Form.Field>
            </Form.Group>
        </Form>
    )
}