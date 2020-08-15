import React from 'react';
import classes from './BurgerIngredients.module.css';
import PropTypes from 'prop-types';

const BurgerIngredients = props => {

    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            return ingredient = <div className={classes.BreadBottom}></div>;
        case ('bread-top'):
            return ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
        case ('meat'):
            return <div className={classes.Meat}></div>;
        case ('cheese'):
            return <div className={classes.Cheese}></div>;
        case ('salad'):
            return <div className={classes.Salad}></div>;
        case ('bacon'):
            return <div className={classes.Bacon}></div>;
        default:
            ingredient = null;
    };

    return ingredient;
};

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired,
};

export default BurgerIngredients;