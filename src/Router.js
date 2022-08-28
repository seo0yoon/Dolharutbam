import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HostingRouter from './pages/Hosting/HostingRouter';
import User from './pages/User';
import Main from './pages/Main';
import Staylist from './pages/Staylist/Staylist';
import Staydetail from '../src/pages/Staydetail/Staydetail';
import KakaoLogin from './pages/KakaoLogin/KakaoLogin';
import Nav from './components/Nav';
import Registered from './pages/Hosting/HostingPages/Registered';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hosting/*" element={<HostingRouter />} />
        <Route path="/user/*" element={<User />} />
        <Route path="/hosting/registered" element={<Registered />} />
        <Route path="/staylist" element={<Staylist />} />
        <Route path="/staydetail" element={<Staydetail />} />
        {/* 카카오 디벨로퍼 리다이렉트 URI로 설정한 주소와 동일해야한다. */}
        <Route path="/kakaologin" element={<KakaoLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
