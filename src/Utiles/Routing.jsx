import React from 'react';
import { BrowserRouter as ReactRouter, Route, Routes } from 'react-router-dom'
import NavbarComponent from '../Components/navbar/navbar';
import Home from '../Pages/home';
import VideoPage from '../Pages/vedio';
import Footer from '../Components/footer/footer';


export default function AppRouting() {

    return (
        <ReactRouter>
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video/:videoId" element={<VideoPage />} />
            </Routes>
            <Footer />
        </ReactRouter>
    
    )
}
