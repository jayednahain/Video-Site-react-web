import React from 'react'
import NavbarComponent from '../Components/navbar/navbar'
import VideoGrid from '../Components/grid/videoGrid/videoGrid'
import Tags from '../Components/tags/tags'
import Footer from '../Components/footer/footer'
import Pagination from '../Components/pagination/pagination'

export default function Home() {
    return (
        <>
            <Tags />
            <VideoGrid />
            <Pagination />
        </>
    )
}
