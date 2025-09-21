import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/vedios/videosSlice";
import tagsReducer from "../features/tags/tagsSlice";
import { videoReducer } from "../features/vedio/vedioSlice";
import { relatedVideoReducer } from "../features/relatedVedios/relatedVideoSlice";
import filterReducer from "../features/filter/filterSlice";

const store = configureStore(
    {
        reducer: {
            videosStore: videosReducer,
            tagsStore: tagsReducer,

            videoStore: videoReducer,
            relatedVideos: relatedVideoReducer,
            filterStore: filterReducer
        },
    });

export default store;