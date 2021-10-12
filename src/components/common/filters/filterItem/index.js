import React from 'react';
import Classes from "./filterItem.module.css";

export default function FilterItem({filter}) {
    return (
        <div className={Classes.filterItem}>
            {filter.icon && filter.icon}
            <div className={Classes.filterName}>{filter.title}</div>
        </div>
    )
}
