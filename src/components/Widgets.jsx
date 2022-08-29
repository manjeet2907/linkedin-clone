import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle =(heading, subtitle) =>{
        return(

            <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon className="widgets__articleLeftIcon"/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
            )    
    }
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon className="widgets__icon" />
            </div>
            {newsArticle('First App Clone', 'linkedIn Clone is under process')}
            {newsArticle('second App Clone', 'linkedIn Clone is under process')}
            {newsArticle('Third App Clone', 'linkedIn Clone is under process')}
            {newsArticle('Covid Stats', 'Covid Stats for India')}
            {newsArticle('Third wave', 'Precautions from 3rd Wave')}
        </div>
    )
}

export default Widgets
