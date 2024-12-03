import { Button } from '@consta/uikit/Button';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from '@consta/uikit/Layout';
import Menu from '../menu/Menu';
import React from 'react';
import style from "./Header.module.css";
import { getToken, dropToken } from "../../services/token";
import { useSelector } from 'react-redux';

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    const handleLogout = () => {
        dropToken();
        navigate("/");
    };

    return (
        <Layout className={style.Header}>
            <Menu />

            <div className={style.rightBlock}>
                {getToken() ?
                    <NavLink to='/profile'>
                        <Button 
                            style={{
                                backgroundColor: '#a084ca',
                                color: 'white',
                                border: '2px solid transparent',
                                borderRadius: '8px',
                            }} 
                            label={`${user?.firstName} ${user?.lastName}`} />
                    </NavLink>
                    : ''}
                <NavLink to='/login'>
                    {getToken() ? 
                        <Button
                            style={{
                                backgroundColor: '#a084ca',
                                color: 'white',
                                border: '2px solid transparent',
                                borderRadius: '8px',
                            }} 
                            onClick={handleLogout} 
                            label='Log out' />
                        : 
                        <Button
                            style={{
                                backgroundColor: '#a084ca',
                                color: 'white',
                                border: '2px solid transparent',
                                borderRadius: '8px',
                            }} 
                            label='Sign in' />
                    }
                </NavLink>
            </div>
        </Layout>
    );
};

export default Header;
