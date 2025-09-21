import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searching } from '../../features/filter/filterSlice';
import { useMatch, useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const dispatch = useDispatch()
    const { search } = useSelector((state) => state.filterStore);
    const [input, setInput] = useState("");


    const routeMatch = useMatch("/");
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(searching(input))

        if (!routeMatch) {
            navigate("/");
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    )
}
