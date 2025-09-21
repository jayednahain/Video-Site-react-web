import React, { useEffect } from 'react'
import RelatedVideoListItem from './relatedVideoListItem'
import { useRelatedVideos } from '../../customHook/useRelatedVedios'
import Loading from '../loader/loader';

export default function RelatedVideoList({ id, tags }) {

    const { videos, isLoading, hasError, error, isEmpty, hasVideos } = useRelatedVideos({ id, tags })

    let content = null;

    if (isLoading) content = <Loading />
    if (hasError) content = <div className="col-span-12 ">{error}</div>
    if (isEmpty) content = <div className="col-span-12">No related videos found!</div>
    if (hasVideos) {
        content = videos.map((video) => (
            <RelatedVideoListItem id={video.id} video={video} key={video.id} />
        ));
    }

    return (
        <div
            class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {content}

        </div>
    )
}
