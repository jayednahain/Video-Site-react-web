import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tagRemoved, tagSelected } from '../../features/filter/filterSlice'

export default function Tag({ id, title }) {

    let dispatch = useDispatch()

    let { tags: selectedTags } = useSelector((state) => state.filterStore)

    let isSelected = selectedTags.includes(title) ? true : false;

    let tagContainerStyle = isSelected ?
        `bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer`
        : `bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer`

    const handleOnClick = () => {
        if (isSelected) {
            dispatch(tagRemoved(title))
        }
        else {
            dispatch(tagSelected(title))
        }
    }

    return (
        <div onClick={handleOnClick}
            className={tagContainerStyle}
        >
            {title}
        </div>
    )

}



