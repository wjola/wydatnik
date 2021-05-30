import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FilterIcon from '../../images/filter.svg';
import { defaultFilters } from '../reducers/filters';
import { categoriesData } from '../reducers/expenses';

const FiltersList = ({ filters }) => {
    const [filtersActive, setFiltersActive] = useState(false);

    useEffect(() => {
        for(const property in filters) {
            if (!filtersActive && isFilterSet(property)) {
                setFiltersActive(true);
                return;
            } else if (filtersActive && isFilterSet(property)) {
                return;
            }
        }
        setFiltersActive(false);
    }, [filters]);

    const isFilterSet = (filterName) => {
        if (filterName === 'categories') {
            return filters[filterName].length !== defaultFilters[filterName].length;
        }
        return filters[filterName] !== defaultFilters[filterName];
    }

    const clearFilters = () => {
        for(const property in filters) {
            filters[property] = defaultFilters[property];
        }
        setFiltersActive(false);
    }

    const getCategoryDisplayedName = (name) => {
        const index = categoriesData.findIndex(category => category.name === name);
        return categoriesData[index].displayedName;
    }

    const getCategoriesSetting = () => {
        return (isFilterSet('categories') &&
            <p>
                Kategorie: {filters.categories.map(category => getCategoryDisplayedName(category)).join(', ')}
            </p>
        );
    }

    const getDatesSetting = () => {
        let datesString = ``;

        if (isFilterSet('startDate')) {
            datesString += `od ${filters.startDate}`;
        }
        if (isFilterSet('endDate')) {
            datesString += ` do ${filters.endDate}`
        }

        return (datesString.length > 0 && <p>Data: {datesString} </p>);
    }

    const getAmountSetting = () => {
        let amountString = ``;

        if (isFilterSet('amountFrom')) {
            amountString += `od ${filters.amountFrom} zł`
        }
        if (isFilterSet('amountTo')) {
            amountString += ` do ${filters.amountTo} zł`
        }

        return (amountString.length > 0 && <p>Kwota: {amountString}</p>);
    }

    const getSortSetting = () => {
        return (<p>Sortowanie po: {filters.sortBy === 'date' ? 'dacie' : 'kwocie'}</p>);
    }

    return (
        <div className='filters-container'>
            <div className='filters__button-container'>
                {filtersActive && <button
                                      className='button button--dark filter-button'
                                      onClick={clearFilters}
                                  >
                                      Resetuj filtry
                                  </button>
                }
                <Link
                    to='/filters'
                    className='button button--full filter-button'
                >
                    <img src={FilterIcon} className='icon icon--light' />
                    {filtersActive ? 'Zmień filtry' : 'Filtruj'}
                </Link>
            </div>
            {filtersActive &&
                <div className='filters__settings'>
                    <p>Wydatki spełniające kryteria:</p>
                    {getDatesSetting()}
                    {getCategoriesSetting()}
                    {getAmountSetting()}
                    {getSortSetting()}
                </div>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(FiltersList);