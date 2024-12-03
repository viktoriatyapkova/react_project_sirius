import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import style from './MainLayout.module.css'
import { Layout } from '@consta/uikit/Layout';

const MainLayout = () => {
    return (
        <Layout className={style.MainLayout}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                minHeight: "100vh",
                maxHeight: "100vh"
            }}>
                <Header />
                <hr className={style.line}/>
                <div style={{
                    flexGrow: 1,
                    overflow: "auto"
                }}>
                    {}
                    <main className={style.main}>
                <Outlet />
            </main>
                </div>
                <hr className={style.line}/>
                <Footer />
            </div>

            {}
        </Layout>
    )
}

export default MainLayout