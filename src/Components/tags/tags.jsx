import React from 'react'
import Loading from '../loader/loader';
import { useTags } from '../../customHook/useTags';
import Tag from './tag';

export default function Tags() {
    const { tags, isLoading, hasError, error, isEmpty, hasTags } = useTags();

    let content;
    if (isLoading) content = <Loading />
    if (hasError) content = <div className="col-span-12">{error}</div>
    if (isEmpty) content = <div className="col-span-12">No tags found!</div>
    if (hasTags) {
        content = tags.map((tag) => (
            <Tag key={tag.id} id={tag.id} title={tag.title} />
        ));
    }

    return (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {content}
            </div>
        </section>
    );
}
