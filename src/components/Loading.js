import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';

export default function Loading() {
    return (
        <div className='loading'>
        <img src={loadingGif} alt=""/>
            <h4>rooms data loading...</h4>
        </div>
    )
}
