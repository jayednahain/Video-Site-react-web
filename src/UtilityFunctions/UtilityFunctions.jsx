export const computeVideoStates = (videos, isLoading, isError, error) => {
    return {
        videos,
        isLoading,
        isError,
        error,
        hasVideos: videos.length > 0,
        isEmpty: !isLoading && !isError && videos.length === 0,
        hasError: !isLoading && isError
    };
};