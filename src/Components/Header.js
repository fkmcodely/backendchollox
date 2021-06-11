import React , { useState , useEffect } from "react";
import { useSelector } from "react-redux";
import {Header, Button , Search } from 'semantic-ui-react';
import Register from "../Components/Modal/Register";
import SignIn from "../Components/Modal/SignIn";

export default function HeaderChollox() {
    const session = useSelector(state => state.session.session);

    return(
        <Header className="flex-sides flex-center" as="h4" block>
                    <div className="flex-sides">
                        <p style={{marginRight: '1rem'}}>CHOLLOX</p>
                        <Search />
                    </div>
                    <div>
                        {
                            !session ? (
                                <>
                                    <Register/>
                                    <SignIn />
                                </>
                            ) : (
                                <div className="flex flex-center "> 
                                    <p className="mg-right">Bienvenido, {session.userInfo.name} </p>
                                    <Button positive circular icon='settings' >
                                        Subir producto
                                    </Button>
                                </div>
                            )
                        }
            </div>
        </Header>
    )
}