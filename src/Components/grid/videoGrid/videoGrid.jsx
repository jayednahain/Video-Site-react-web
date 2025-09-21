import React, { useEffect } from 'react'
import VideoGridItem from './videoGridItem'
import Loading from '../../loader/loader';
import { useVideoGrid } from '../../../customHook/useVideoGrid';
import { useVideoGridOnlyValues } from '../../../customHook/useVideoGridOnlyValues';

// export default function VideoGrid() {

//     const dispatch = useDispatch();
//     let { videos, isLoading, isError, error } = useSelector((state) => state.videoStore);

//     useEffect(() => {
//         dispatch(fetchVideosThunk());
//     }, [dispatch]);

//     let content;
//     if (isLoading) content = <Loading />
//     if (!isLoading && isError)
//         content = <div className="col-span-12 ">{error}</div>

//     if (!isError && !isLoading && videos?.length === 0) {
//         content = <div className="col-span-12">No videos found!</div>;
//     }

//     if (!isError && !isLoading && videos?.length > 0) {
//         content = videos.map((video) => (
//             <VideoGridItem key={video.id} video={video} />
//         ));
//     }

//     return (
//         <section className="pt-12">
//             <section className="pt-12">
//                 <div
//                     className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
//                 >
//                     {content}
//                 </div>
//             </section>
//         </section>
//     )
// }

//hook returns jsx
// export default function VideoGrid() {
//     const { content } = useVideoGrid();
//     return (
//         <section className="pt-12">
//             <section className="pt-12">
//                 <div
//                     className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
//                 >
//                     {content}
//                 </div>
//             </section>
//         </section>
//     )
// }

// hook returns data
export default function VideoGrid() {
    const { videos, isLoading, hasError, error, isEmpty, hasVideos } = useVideoGridOnlyValues();

    let content;
    if (isLoading) content = <Loading />
    if (hasError) content = <div className="col-span-12">{error}</div>
    if (isEmpty) content = <div className="col-span-12">No videos found!</div>
    if (hasVideos) {
        content = videos.map((video) => (
            <VideoGridItem key={video.id} video={video} />
        ));
    }

    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {content}
                </div>
            </section>
        </section>
    )
}
