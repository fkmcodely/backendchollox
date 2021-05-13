import React , { useState } from "react";
import { List } from 'semantic-ui-react';
import { useSelector , useDispatch } from "react-redux";
import { updateCategory } from "../redux/reducers/ui";

import Slider from "react-slick";
import {
    Link
  } from "react-router-dom";

export default function CategoryList({options}) {
    const dispatch = useDispatch();
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
    };
    const updateCategorySelected = (categoryName) => {
        dispatch(updateCategory(categoryName))
    };

    return(
        <>
            <Slider {...settings}>
                {
                    options?.map(entry => (
                        <Link to={`/busqueda/${entry.name}`} onClick={() => updateCategorySelected(entry.name)}>
                            <div className="category-item">
                                <p>{entry.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </Slider>
        </>
    )
}