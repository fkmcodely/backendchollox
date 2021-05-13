import React , { useState , useEffect} from "react";
import { Container, Header , Menu, Search, Card, Icon, Image } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { updateSession } from "../redux/reducers/session";
import { BASE_URL } from "../constants";
import Register from "../Components/Modal/Register";
import SignIn from "../Components/Modal/SignIn";

export default function SearchView() {
    const [productList,setProductList] = useState([]);
    const session = useSelector(state => state.session.session.userInfo);

    useEffect(() => {
        const handlerRequest = async () => {
            const request = await fetch(`${BASE_URL}product/getAll`);
            const response = await request.json();
            setProductList(response);
        };
        handlerRequest();
    },[]);

    return(
        <>
            <Container fluid>
                <HeaderSearch></HeaderSearch>
                <section className="flex">
                    <Filter />
                    <ProductList options={productList} />
                </section>
            </Container>
        </>
    )
}

function Filter() {
    const categorySelected = useSelector(state => state.ui.categorySelected);
    return(
        <section className="filter">
            <div>
                <h3>Filtros en: {categorySelected}</h3>  
                <Search />              
            </div>
        </section>
    )
}

function ProductList({ options }) {
    return(
        <>
         <section className="product-list">
         {
             options.map(entry => (<CreateCard data={entry}/>))
         }
         </section>
        </>
        
    )
}

function CreateCard({data}){
    return(
        <Card >
            <Image src='https://i.picsum.photos/id/974/200/200.jpg?hmac=3skiM35hn9GtUF77ruZWI1mTtIROBBhkDIOmGwS7kpY' wrapped ui={false}  />
            <Card.Content>
                <Card.Header as='h4'>{data.title}</Card.Header>
                <p>{data.description}</p>
                <div className="card-footer">
                    <Icon color="red" size="large" name="like" />
                    <Icon color="blue" size="large" name="commenting" />
                </div>
            </Card.Content>
        </Card>
    )
}

function HeaderSearch() {
    const session = useSelector(state => state.session.session);
    
    return(
        <>
            <Menu fluid>
                <Menu.Item>CHOLLOX</Menu.Item>
                <Menu.Item>
                    <Search/>
                </Menu.Item>
                <Menu.Item position="right">
                    {
                        !session ? (
                            <>
                                <Register/>
                                <SignIn />
                            </>
                        ) : (
                            <>
                                <p>Bienvenido, <i>{session.userInfo.name}</i>, </p>
                            </>
                        )
                    }
                </Menu.Item>
            </Menu>
        </>
    )
}