import React from 'react';
import Slider from 'react-slick';
import NextArraw from '../carousel/nextArrow';
import PrevArraw from '../carousel/prevArrow';
import Classes from './collection.module.css';

const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArraw/>,
    prevArrow: <PrevArraw/>,
};

export default function Collection({list}) {
    return (
        <div className={Classes.collectionWrapper}>
            <div className={`max-width ${Classes.collection}`}>
                <div className={`collection-title`}>Collections</div>
                <div className={`${Classes.collectionSubtitleRow}`}>
                    <div className={Classes.collectionSubtitleText}>Explore curated lists of top restaurants ,cafes, pubs, and bars in Chattogram , based on trends.</div>
                    <div className={Classes.collectionLocation}>
                        <div >All collections in Chattogram</div>
                        <i className={`fi fi-rr-caret-right absolute-center`}/>
                    </div>
                </div>
                    <Slider {...settings}>
                        {list.map((item) => {
                            return (
                                <div>
                                <div className={Classes.collectionCover}>
                                    <img src={item.cover} className={Classes.collectionImage} alt={item.title}/>
                                    <div className={Classes.gradientBg}></div>
                                    <div className={`${Classes.collectionCardTitle}`}>{item.title}</div>
                                    <div className={Classes.collectionCardSubtitle}>
                                        <div>{item.places}</div>
                                        <i className={`fi fi-rr-caret-right absolute-center`}/>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </Slider>
            </div>
        </div>
    )
}
