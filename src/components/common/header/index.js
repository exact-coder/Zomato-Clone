import React, { useState } from 'react';
import Delivery from '../../delivery';
import DiningOut from '../../diningOut';
import Nightlife from '../../nightlife';
import Footer from '../footer';
import TabOptions from '../tabOptions';
import Classes from "./header.module.css";

export default function Header() {
    const [activeTab, setActiveTab] = useState("Delivery");
    return (
        <>
            <div className={`max-width ${Classes.header}`}>
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato-logo" className= {Classes.headerLogo}/>
                <div className={Classes.headerRight}>
                    <div className={Classes.headerLocationSearchContainer}>
                        <div className={Classes.locationWrapper}>
                            <div className={Classes.locationIconName}>
                                <i className={`fi fi-rr-marker absolute-center ${Classes.locationIcon}`}/>
                                <div>Chattogram</div>
                            </div>
                            <i className={`fi fi-rr-caret-down absolute-center ${Classes.selectLocation}`}/>
                        </div>
                        <div className={Classes.locationSearchSeparator}></div>
                        <div className={Classes.headerSearchbar}>
                            <i className={`fi fi-rr-search absolute-center ${Classes.searchIcon}`}/>
                            <input placeholder="Search for restaurant, cuisine or a dish" className={Classes.searchInput} />
                        </div>
                    </div>
                    <div className={Classes.profileWrapper}>
                        <img src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="profile" className={Classes.headerProfileImage}/>
                        <span className={Classes.headerUsername}>Jahid Hasan</span>
                        <i className={`fi fi-rr-angle-small-down absolute-center ${Classes.profileOptionsIcon}`}/>
                    </div>
                </div>
            </div>
                <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
                {getCorrectScreen(activeTab)}
                <Footer/>
        </>
    )
}

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery/>;
        case "Dining Out":
            return <DiningOut/>;
        case "Nightlife":
            return <Nightlife/>;
        default:
            return <Delivery/>;
    }
}