import React from 'react';
import Classes from "./deliveryItem.module.css";

export default function DeliveryItem({item}) {
    return (
        <div>
            <div className={Classes.deliveryItemCover}>
                <img src={item.cover} className={Classes.deliveryItemImage} alt={item.title} />
            </div>
            <div className={Classes.deliveryItemTitle}>{item.title}</div>
        </div>
    )
}
