import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideosThunk } from "../features/relatedVedios/relatedVideoSlice";
import { computeVideoStates } from "../UtilityFunctions/UtilityFunctions";

export function useRelatedVideos({ id, tags }) {
    const { videos,
        isLoading,
        isError,
        error } = useSelector((state) => state.relatedVideos)
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchRelatedVideosThunk({ id, tags }))
    }, [id, tags])

    // return {
    //     videos,
    //     isLoading,
    //     isError,
    //     error
    // }

    return computeVideoStates(videos, isLoading, isError, error);

}