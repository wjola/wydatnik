import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FilterIcon from "../../images/filter.svg";
import { defaultFilters } from "../reducers/filters";
import { getDisplayedNameForCategory } from "../utils/categoriesData";
import { resetFilters } from "../actions/filters";

const FiltersList = ({ filters, resetFilters }) => {
  const [filtersActive, setFiltersActive] = useState(false);

  useEffect(() => {
    for (const property in filters) {
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
    if (filterName === "categories") {
      return filters[filterName].length !== defaultFilters[filterName].length;
    }
    return filters[filterName] !== defaultFilters[filterName];
  };

  const clearFilters = () => {
    for (const property in filters) {
      filters[property] = defaultFilters[property];
    }
    setFiltersActive(false);
    resetFilters();
  };

  const getCategoriesSetting = () => {
    return (
      isFilterSet("categories") && (
        <p>
          Kategorie:{" "}
          {filters.categories
            .map((category) => getDisplayedNameForCategory(category))
            .join(", ")}
        </p>
      )
    );
  };

  const getDatesSetting = () => {
    let datesString = ``;

    if (isFilterSet("startDate")) {
      datesString += `od ${filters.startDate.format("D/MM/YYYY")}`;
    }
    if (isFilterSet("endDate")) {
      datesString += ` do ${filters.endDate.format("D/MM/YYYY")}`;
    }

    return datesString.length > 0 && <p>Data: {datesString} </p>;
  };

  const getAmountSetting = () => {
    let amountString = ``;

    if (isFilterSet("amountFrom")) {
      amountString += `od ${filters.amountFrom} zł`;
    }
    if (isFilterSet("amountTo")) {
      amountString += ` do ${filters.amountTo} zł`;
    }

    return amountString.length > 0 && <p>Kwota: {amountString}</p>;
  };

  const getSortSetting = () => {
    return (
      <p>Sortowanie po: {filters.sortBy === "date" ? "dacie" : "kwocie"}</p>
    );
  };

  return (
    <div className="filters-container">
      <div className="filters__button-container">
        {filtersActive && (
          <button
            className="button button--dark filter-button"
            onClick={clearFilters}
          >
            Resetuj filtry
          </button>
        )}
        <Link to="/filters" className="button button--dark filter-button">
          <img src={FilterIcon} className="icon icon--dark" />
          {filtersActive ? "Zmień filtry" : "Filtruj"}
        </Link>
      </div>
      {filtersActive && (
        <div className="filters__settings">
          <p>Wydatki spełniające kryteria:</p>
          {getDatesSetting()}
          {getCategoriesSetting()}
          {getAmountSetting()}
          {getSortSetting()}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = {
  resetFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersList);
