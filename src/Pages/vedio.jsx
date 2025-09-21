import React, { useEffect } from 'react'
import NavbarComponent from '../Components/navbar/navbar'
import Footer from '../Components/footer/footer'
import VideoPlayer from '../Components/description/player'
import VideoDescription from '../Components/description/videoDescription'
import RelatedVideoList from '../Components/list/relatedVideoList'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchVideoThunk } from '../features/vedio/vedioSlice'
import useVideo from '../customHook/useVedio'
import Loading from '../Components/loader/loader'

export default function VideoPage() {

    const { videoId } = useParams();
    const { video, isLoading, isError, error } = useVideo({ videoId });
    const { title, description, link, like, unlike, tags } = video || {};

    let content = null;

    if (isLoading) content = <Loading />
    if (!isLoading && isError)
        content = <div className="col-span-12 ">{error}</div>

    if (!isError && !isLoading && Object.keys(video).length === 0) {
        content = <div className="col-span-12">No video found!</div>;
    }

    if (!isError && !isLoading && Object.keys(video).length > 0) {
        content = (<div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
                <VideoPlayer title={title} link={link} />
                <VideoDescription title={title} description={description} like={like} unlike={unlike} />
            </div>
            <RelatedVideoList id={videoId} tags={tags} />
        </div>);
    }


    try {
        return (
            <>
                {/* <NavbarComponent /> */}
                <section class="pt-6 pb-20">
                    <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                        {content}
                    </div>
                </section>
                <Footer />
            </>
        )

    }
    catch (error) {
        console
    }

}
