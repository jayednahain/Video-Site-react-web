import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTags } from "../../service/apiRequestFunctions";

export const fetchTagsThunk = createAsyncThunk(
    "tags/fetchTags",
    async () => {
        // const response = await getTags();

        // console.log("Fetched tags: fetchTagsThunk ", response);
        // return response.data;

        const tags = await getTags();
        return tags;
    }
);
