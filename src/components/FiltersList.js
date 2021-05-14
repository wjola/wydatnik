import React, { useState } from 'react';
import FilterIcon from '../../images/filter.svg';

const FiltersList = () => {
    const [filtersActive, setFiltersActive] = useState(false);

    const toggleFilters = () => {
        setFiltersActive(!filtersActive);
    }

    return (
        <div className='filters-container'>
            <div className='filters__button-container'>
                {!filtersActive && <button className='filter-button filter-button--dark'
                                           onClick={toggleFilters}>
                                        <img src={FilterIcon} className='icon icon--light' />
                                        Filtruj
                                   </button>
                }
                {filtersActive && <><button className='filter-button filter-button--light'>
                                        Resetuj filtry
                                    </button>
                                    <button className='filter-button filter-button--dark'>
                                        <img src={FilterIcon} className='icon icon--light' />
                                        Zmień filtry
                                    </button></>
                }
            </div>
            {filtersActive &&
                <div className='filters__settings'>
                    <p>Wydatki spełniające kryteria:</p>
                    <p>Data:</p>
                    <p>Kategorie:</p>
                    <p>Kwota:</p>
                </div>
            }
        </div>
    );
}

export default FiltersList;