import axiosInstance from "./axiosBaseInstances";

const getVideos = async (search, tags) => {

    console.log("search:", search, "tags:", tags);
    let searchQueryString = "";
    searchQueryString += tags.length > 0 ? tags.map(tag => `tags_like=${tag}`).join("&") : "";
    searchQueryString += search ? `&q=${search}` : "";

    console.log('/videos/?' + searchQueryString);
    const response = await axiosInstance.get('/videos/?' + searchQueryString);
    return response.data;
}

const getTags = async () => {
    const response = await axiosInstance.get('/tags');
    return response.data;
}

const getVideoById = async (id) => {
    const response = await axiosInstance.get(`/videos/${id}`);
    return response.data;
}

const getRelatedVideos = async ({ id, tags }) => {

    let pageLimit = `&_limit=${5}`;
    let exceptNotShowingVideo = `&id_ne=${id}`
    let tagsQuery = tags.length > 0 ? tags.map(tag => `tags_like=${tag}`).join("&") : "";

    const response = await axiosInstance.get(`/videos?${tagsQuery}${exceptNotShowingVideo}${pageLimit}`);
    console.log(response.data)
    return response.data;
}

export { getVideos, getTags, getVideoById, getRelatedVideos };
