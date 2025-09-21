import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideosThunk } from '../features/vedios/vediosThunkFunctions';
import VideoGridItem from '../Components/grid/videoGrid/videoGridItem';
import Loading from '../Components/loader/loader';

export const useVideoGrid = () => {
    const dispatch = useDispatch();
    const { videos, isLoading, isError, error } = useSelector((state) => state.videoStore);

    useEffect(() => {
        if (videos.length === 0 && !isLoading && !isError) {
            dispatch(fetchVideosThunk());
        }
    }, [dispatch, videos.length, isLoading, isError]);

    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>

    if (!isError && !isLoading && videos?.length === 0) {
        content = <div className="col-span-12">No videos found!</div>;
    }

    if (!isError && !isLoading && videos?.length > 0) {
        content = videos.map((video) => (
            <VideoGridItem key={video.id} video={video} />
        ));
    }

    return { content, videos, isLoading, isError, error };
};