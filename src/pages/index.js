import React, { useState , useEffect } from "react";
import Register from "../Components/Modal/Register";
import SignIn from "../Components/Modal/SignIn";
import { useSelector } from "react-redux";
import { Container , Header, Button , Search } from 'semantic-ui-react'
import CategoryList from "../Components/CategoryList";
import { BASE_URL } from "../constants";

export default function IndexPage({ openModalRegister }) {
    const [categoryList,setCategoryList] = useState();
    const session = useSelector(state => state.session.session);

    useEffect(() => {
        const handlerGetCategory = async () => {
            const request = await fetch(`${BASE_URL}category/getall`);
            const response = await request.json();
            setCategoryList(response);
        };
        handlerGetCategory();
    },[]);
    return(
        <>
            <Container fluid>
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
                                <>
                                    <p>Bienvenido, {session.userInfo.name}, </p>
                                </>
                            )
                        }
                    </div>
                </Header>
                <Header as="h4" textAlign="center">Vender nunca fue tan facíl</Header>
                <Header as="h1" textAlign="center">¿Qué estás buscando hoy?</Header>
                <CategoryList options={categoryList} />
            </Container>
        </>
    )
}