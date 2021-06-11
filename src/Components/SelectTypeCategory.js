import React , { useState , useEffect } from "react";
import { Container , Header, Button , Search , Icon , Divider, Step } from 'semantic-ui-react';
import { useSelector } from "react-redux";

export default function SelectTypeCategory() {

    return(
        <section>
            <div>
                <Step.Group>
                    <Step>
                        <Icon name='truck' />
                        <Step.Content>
                            <Step.Title>¿QUÉ SUBIRÁS?</Step.Title>
                            <Step.Description>En chollox hay sitio para todo :)</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step>
                        <Icon name='truck' />
                        <Step.Content>
                            <Step.Title>INFORMACIÓN DE TU PRODUCTO</Step.Title>
                            <Step.Description>¿Qué estás vendiendo?</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step>
                        <Icon name='truck' />
                        <Step.Content>
                            <Step.Title>FOTOS</Step.Title>
                            <Step.Description>En chollox hay sitio para todo :)</Step.Description>
                        </Step.Content>
                    </Step>
                </Step.Group>
            </div>
        </section>
    )
}