import React, { useContext } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RecipeBookContext from "../../../context/recipe-book-context";

const RecipeBook = () => {

    const recipeBook = useContext(RecipeBookContext);

    console.log('recipeBook component', recipeBook)

    return (
        <div className="recipe-book">
            <Tabs defaultActiveKey="breakfast"
            id="tab-example"
            className="mb-3">
                <Tab eventKey="breakfast" title="Breakfast">
                    <p>Breakfast</p>
                </Tab>
                <Tab eventKey="lunch" title="Lunch">
                    <p>Lunch</p>
                </Tab>
                <Tab eventKey="dinner" title>
                    <p>Dinner</p>
                </Tab>
            </Tabs>
        </div>
    )
};

export default RecipeBook;