import React, { useState, } from 'react';
import { connect, } from 'react-redux';
import Auxx from '../Auxx/Auxx';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {

    const [sideDrawerIsVisable, setSideDrawerIsVisable] = useState(false);

    const sideDrawerCloseHandler = () => {
        setSideDrawerIsVisable(false);
    };

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisable(!sideDrawerIsVisable);
    };

    return (
        <Auxx>
            <Toolbar isAuth={props.isAuthenticated} drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={sideDrawerIsVisable}
                closed={sideDrawerCloseHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxx>
    )
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

export default connect(mapStateToProps,)(Layout);