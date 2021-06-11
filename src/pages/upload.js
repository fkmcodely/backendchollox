import React , { useState , useEffect } from "react";
import { Container , Grid } from 'semantic-ui-react';
import HeaderChollox from "../Components/Header";
import SelectCategory from "../Components/SelectCategory";
import UploadFormController from "../Components/Upload/UploadFormController";

export default function Upload() {
    
    return (
        <Container fluid>
            <HeaderChollox/>
            
            <Grid>
                <Grid.Column width={2}>
                    menu uzquierdo
                </Grid.Column>
                <Grid.Column className="flex" width={14} centered>
                    <SelectCategory />
                    <UploadFormController />
                </Grid.Column>
            </Grid>
        </Container>
    )
}

