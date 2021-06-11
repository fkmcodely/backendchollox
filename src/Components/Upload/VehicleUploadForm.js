import React from "react";
import { Form, Grid, Select, TextArea } from 'semantic-ui-react';

export default function VehicleUploadForm(props) {
    return(
        <Form className="block block__middle">
            <h4>INFORMACIÓN BÁSICA</h4>
            <Form.Group widths="equal">
                <Form.Field>
                    <label>Marca</label>
                    <Select />
                </Form.Field>
                <Form.Field>
                    <label>Modelo</label>
                    <Select />
                </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Field>
                    <label>Precio al contado</label>
                    <input type="number" />
                </Form.Field>
                <Form.Field>
                    <label>Precio financiado (opcional)</label>
                    <input type="number" />
                </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Field>
                    <label>Año</label>
                    <input type="number" />
                </Form.Field>
                <Form.Field>
                    <label>Titulo</label>
                    <input type="text" />
                </Form.Field>
            </Form.Group>
            <h4>INFORMACIÓN DE TU VEHÍCULO</h4>
            <Form.Group widths="equal">
                <Form.Field>
                    <label>Versión</label>
                    <Select />
                </Form.Field>
                <Form.Field>
                    <label>Número de plazas</label>
                    <input type="text" />
                </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Field>
                    <label>Numero de puertas</label>
                    <input type="number" />
                </Form.Field>
                <Form.Field>
                    <label>Caballos</label>
                    <input type="number" />
                </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Field>
                    <label>Tipo de coche</label>
                    <Select />
                </Form.Field>
                <Form.Field>
                    <label>Kilometros</label>
                    <input type="number" />
                </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Field>
                    <label>Motor</label>
                    <Select />
                </Form.Field>
                <Form.Field>
                    <label>Cambio</label>
                    <Select/>
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