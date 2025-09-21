import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideosThunk } from '../features/vedios/vediosThunkFunctions';
import { computeVideoStates } from '../UtilityFunctions/UtilityFunctions';

export const useVideoGridOnlyValues = () => {
    const dispatch = useDispatch();
    const { videos, isLoading, isError, error } = useSelector((state) => state.videosStore);
    const { search, tags } = useSelector((state) => state.filterStore);

    // useEffect(() => {
    //     // if (videos.length === 0 && !isLoading && !isError) {

    //     // }
    //     dispatch(fetchVideosThunk({ search, tags }));

    // }, [dispatch, videos.length, isLoading, isError, search, tags]);

    useEffect(() => {
        dispatch(fetchVideosThunk({ search, tags }));
    }, [dispatch, search, tags]);

    // return {
    //     videos,
    //     isLoading,
    //     isError,
    //     error,
    //     hasVideos: videos.length > 0,
    //     isEmpty: !isLoading && !isError && videos.length === 0,
    //     hasError: !isLoading && isError
    // };

    return computeVideoStates(videos, isLoading, isError, error);

};