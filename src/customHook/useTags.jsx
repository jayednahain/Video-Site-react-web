import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideosThunk } from '../features/vedios/vediosThunkFunctions';
import { fetchTagsThunk } from '../features/tags/tagsThunkFunctions';

export const useTags = () => {
    const dispatch = useDispatch();
    const { tags, isLoading, isError, error } = useSelector((state) => state.tagsStore);

    useEffect(() => {
        if (tags.length === 0 && !isLoading && !isError) {
            dispatch(fetchTagsThunk());
        }
    }, [dispatch, tags.length, isLoading, isError]);

    return {
        tags,
        isLoading,
        isError,
        error,
        hasTags: tags.length > 0,
        isEmpty: !isLoading && !isError && tags.length === 0,
        hasError: !isLoading && isError
    };
};