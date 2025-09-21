import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoThunk } from "../features/vedio/vedioSlice";


export default function useVideo({ videoId }) {
    const dispatch = useDispatch();
    const { video, isLoading, isError, error } = useSelector((state) => state.videoStore);

    useEffect(() => {
        dispatch(fetchVideoThunk(videoId));
    }, [dispatch, videoId]);

    return { video, isLoading, isError, error };
}