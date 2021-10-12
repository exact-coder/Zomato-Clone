import React from 'react';
import ExploreCard from './exploreCard';
import Classes from "./exploreSection.module.css";

export default function ExploreSection({list, collectionName}) {
    return (
        <div className={`max-width ${Classes.exploreSection}`}>
            <div className={`collection-title`}>{collectionName}</div>
            <div className={`${Classes.exploreGrid}`}>
                {list.map((restaurant) => {
                    return <ExploreCard restaurant={restaurant}/>
                })}
            </div>
        </div>
    )
}
