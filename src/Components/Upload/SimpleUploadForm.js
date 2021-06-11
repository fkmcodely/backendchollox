import React from "react";
import { Form, Grid, Select, TextArea } from 'semantic-ui-react';

export default function SimpleUploadForm(props) {
    return(
        <Form className="block block__middle">
            <h4>INFORMACIÓN DE TU PRODUCTO</h4>
            <Form.Group>
                <Form.Field>
                    <label>¿Qué estas vendiendo?</label>
                    <input placeholder='' />
                </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Field>
                    <label>Categoria</label>
                    <Select />
                </Form.Field>
                <Form.Field>
                    <label>Precio</label>
                    <input type="text" />
                </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Field>
                    <label>Subcategoría</label>
                    <Select />
                </Form.Field>
                <Form.Field>
                    <label>Estado del producto</label>
                    <input type="text" />
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