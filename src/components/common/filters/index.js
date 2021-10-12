import React from 'react';
import FilterItem from './filterItem';
import Classes from "./filters.module.css";

export default function Filters({filterList}) {
    return (
        <div className={Classes.filters}>
            {filterList && filterList.map((filter) => {
                return <FilterItem filter={filter} key={filter.id}/>
            })}
        </div>
    )
}
