import React, { Suspense } from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../../layouts/main-layout/MainLayout';
import { AppRoute } from '../../../const';
import { Loader } from '@consta/uikit/Loader';
import { Responses404 } from '@consta/uikit/Responses404';
const MainPage = React.lazy(() => import('../../pages/main-page/MainPage'));
const ServicePage = React.lazy(() => import('../../pages/service-page/ServicePage'));
const AuthPage = React.lazy(() => import('../../pages/auth-page/AuthPage'));
const ProfilePage = React.lazy(() => import('../../pages/profile-page/ProfilePage'));
const ServiceDetailPage = React.lazy(() => import('../../pages/servie-detail-page/ServiceDetailPage'));



const App = function() {
  return (
   
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <Suspense fallback={
            <div style={{width:"100vw", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <Loader size="m" style={{strokeColor: '#168500f7', color: 'green'}}/>
            </div>
          }
        >
        <Routes>
          <Route path={AppRoute.main} element={<MainLayout />}>
            <Route index element={<MainPage />}/>
            <Route path={AppRoute.service} element={<ServicePage />}/>
            <Route path={AppRoute.auth} element={<AuthPage />}/>
            <Route path={AppRoute.profile} element={<ProfilePage />}/>
            <Route path='/service/:id' element={<ServiceDetailPage />}/>
          </Route>
          <Route path='*' element={
            <div style={{width:"100vw", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <Responses404
              />
            </div>}/>
        </Routes></Suspense>
      </BrowserRouter>
    </Theme>
  );
}

export default App
