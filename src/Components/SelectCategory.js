import React from 'react'
import { useDispatch , useSelector } from "react-redux";
import { Card, Icon, Image , Grid} from 'semantic-ui-react'
import { setTypeProductUpload } from "../redux/reducers/upload";
import '../styles/block.scss';
import '../styles/utils.scss';

function SelectCategory(props) {
    const dispatch = useDispatch();
    const idSelected = useSelector(state => state.upload.categorySelected);

    const categoryList = [
        {
            title: 'ALGO QUE YA NO NECESITO',
            image: '',
            id: '1'
        },
        {
            title: 'UN VEHICULO',
            image: '',
            id: '2'
        },
        {
            title: 'UNA PROPIEDAD',
            image: '',
            id: '3'
        },
        {
            title: 'MIS SERVICIOS',
            image: '',
            id: '4'
        },
        {
            title: 'EMPLEO',
            image: '',
            id: '5'
        }
    ]

    const updateUploadCategorySelected = (categoryId) => {
        dispatch(setTypeProductUpload(categoryId))
    };

    const generateCategoryCard = () => (
        categoryList.map((category,index) => (
            <Grid.Column>
                <Card className={`${idSelected === category.id && ('card-selected')}`} onClick={() => {updateUploadCategorySelected(category.id)}}>
                    <Card.Content>
                        <Card.Header className="block-subtitle">{category.title}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name="user" />
                        5000 Productos
                    </Card.Content>
                </Card>
            </Grid.Column>
        ))
    );

    return (
        <section className="block__middle block">
            <div className="block__subtitle block">
                <h2 className="block-title">¿QUÉ SUBIRÁS?</h2>
                <p>En Chollox hay sitio para (casi) todo</p>
            </div>
            <Grid columns={5}>
                {generateCategoryCard()}
            </Grid>
        </section>
    )
}

SelectCategory.propTypes = {

}

export default SelectCategory

