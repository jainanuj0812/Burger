import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIndegreint/BurgerIngredient';
import { withRouter } from 'react-router-dom';

const burger = (props) => {
    let transformedIng = Object.keys(props.ingredients)
        .map(igKey => {
             return [...Array(props.ingredients[igKey])].map((_, i) => {
                 return <BurgerIngredient key={igKey + i} type={igKey}/>
            });
        }).reduce((arr, ele) => {
            return arr.concat(ele);
        }, []);
    if (transformedIng.length === 0) {
        transformedIng = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIng}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default withRouter(burger);