import React, { useState, useEffect } from 'react';
import PokByName from '../PokByName/PokByName';

const Searcher = () => {
    const [searchValue, setSearchValue] = useState('');
    const [pokByname, setPokByName] = useState(false);
    const [finalSearchValue, setFinalSearchValue] = useState(''); 

    const handleSearchByName = (event) => {
        event.preventDefault();
        setFinalSearchValue(searchValue.trim());
        setPokByName(false)
        setPokByName(true)
       };
       const handleSearchByType = (event) => {
        event.preventDefault();
        setPokByName(false)
        setFinalSearchValue('');
       }

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
      
    }, [searchValue]);

    return (
        <div>
            <ul>
                <li>
                    <form>
                        <label htmlFor="searchInput">Nombre:</label>
                        <input
                            type="text"
                            id="searchInput"
                            value={searchValue}
                            onChange={handleChange}
                        />
                        <button onClick={handleSearchByName} type="submit" disabled={searchValue.trim() === ''}>Buscar</button>
                    </form>
                </li>
                <li><button onClick={handleSearchByType}>Type</button></li>
                <li><button>Juego</button></li>
                <li><button>Area de ubicación</button></li>
            </ul>
          
             {
                pokByname && (
                    <PokByName searchValue={finalSearchValue} />
                )
             }
        </div>
    );
};

export default Searcher;
