import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import '../styles/App.css';

const SearchBar = ({ setPosition, setZoom }) =>
{
    const [query, setQuery] = useState('');

    const handleSearch = async (e) =>
    {
        e.preventDefault();
        if (query)
        {
            try
            {
                const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
                    params: {
                        q: query + ", Recife, Brazil",
                        format: 'json'
                    }
                });
                if (response.data.length > 0)
                {
                    const { lat, lon } = response.data[0];
                    setPosition([parseFloat(lat), parseFloat(lon)]);
                    setZoom(15);
                } else
                {
                    alert('Bairro não encontrado.');
                }
            } catch (error)
            {
                console.error('Erro ao buscar o bairro:', error);
                alert('Erro ao buscar o bairro.');
            }
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Buscar bairro"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">
                <FaSearch />
            </button>
        </form>
    );
};

export default SearchBar;
