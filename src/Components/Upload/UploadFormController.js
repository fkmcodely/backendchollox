import React , { useEffect , useState } from 'react'
import { useSelector } from "react-redux";
import SimpleUploadForm from "./SimpleUploadForm";
import VehicleUploadForm from "./VehicleUploadForm";
import HomeUploadForm from "./HomeUploadForm";

const FORM_BASIC = 1;
const FORM_VEHICLE = 2;
const FORM_HOME = 3;

function UploadFormController(props) {
    const idFormActive = useSelector(state => state.upload.categorySelected);
    
    const handlerControllerForm = () => {
        if(parseInt(idFormActive) === FORM_BASIC) {
            return <SimpleUploadForm /> 
        } 
        if(parseInt(idFormActive) === FORM_VEHICLE) {
            return <VehicleUploadForm />
        } 
        if (parseInt(idFormActive) === FORM_HOME) {
            return <HomeUploadForm />
        } 
    };

    return (
        <div>
            {handlerControllerForm()}
        </div>
    )
}



export default UploadFormController
