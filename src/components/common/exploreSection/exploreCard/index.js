import React from 'react';
import Classes from "./exploreCard.module.css";

export default function ExploreCard({restaurant}) {
    const name = restaurant?.info?.name ?? "";
    const coverImg = restaurant?.info?.image?.url;
    const deliveryTime = restaurant?.order?.deliveryTime;
    const rating = restaurant?.info?.rating?.rating_text;
    const approxPrice = restaurant?.info?.cfo?.text;
    const offers = restaurant?.bulkOffers ?? [];
    const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);

    const bottomContainers = restaurant?.bottomContainers;
    const goldOff = restaurant?.gold?.text;
    const proOff = offers.length >1 ? offers[0].text : null;
    const discount = offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null;
    return (
        <div className={Classes.exploreCard}>
            <div className={Classes.exploreCardCover}>
                <img src={coverImg} alt={name} className={Classes.exploreCardImage} />
                <div className={Classes.deliveryTime}>{deliveryTime}</div>
                {proOff && <div className={Classes.proOff}>{proOff}</div>}
                {goldOff && <div className={`${Classes.goldOff} absoluteCenter`}>{goldOff}</div>}
                {discount && <div className={`${Classes.discount} absolute-center`}>{discount}</div>}
            </div>
                <div className={`${Classes.resRow}`}>
                    <div className={Classes.resName}>{name}</div>
                    {rating && (<div className={`${Classes.resRating} absolute-center`}>{rating} <i className={`fi fi-rr-star absolute-center`}></i></div>)}
                </div>
            <div className={`${Classes.resRow}`}>
                {cuisines.length && (<div className={Classes.resCuisine}>{cuisines.map((item, i) => {
                    return (<span className={Classes.resCuisineTag}>{item}{i !== cuisines.length -1 && ","}</span>)
                })}
                </div>)}
                    {approxPrice && <div className={Classes.approxPrice}>{approxPrice}</div>}
            </div>
            {bottomContainers.length > 0 && (
                <div>
                    <div className={Classes.cardSeparator}></div>
                    <div className={Classes.exploreBottom}>
                        <img src={bottomContainers[0]?.image?.url} style={{height: "18px"}} alt={bottomContainers[0]?.text}/>
                        <div className={Classes.resBottomText}>{bottomContainers[0]?.text}</div>
                    </div>
                </div>
            )}
        </div>
    )
}
