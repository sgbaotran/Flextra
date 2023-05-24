import './css/Service.css'
import featureItems from '../data/features.json'
import serviceItems from '../data/services.json'
import React from 'react';


export default function service() {
    const services = serviceItems.map(serviceItem => {
        const position = serviceItem.id % 2 === 0 ? "left-item" : "right-item";
        return (
            <div class={`service-item ${position}`}>
                <img src={require(`../media/${serviceItem.path}`)} alt="" />
                <div className='service-text'>
                    <div>
                        <h5 className='text-5xl text-center '> <strong>{serviceItem.name}</strong> </h5>
                        <p className='mt-3 text-2xl px-10'>{serviceItem.description} </p>
                    </div>
                </div>
            </div>
        )
    })



    const features = featureItems.map(featureItem => {
        return (
            <div class="feature-item">

                <img src={require(`../icon/${featureItem.path}`)} alt="" />
                <h5>{featureItem.name}</h5>
                <p className='text-2xl'>{featureItem.description}</p>
            </div>
        )
    })





    return (
        <React.Fragment>
            <div className='service-section container' id='service'>
                <h2 className='service-section-title' >Our Services</h2>
                <div class="service-container">
                    {services}
                </div>
                
                <h5 className="feature-introduction">We Also Offer</h5>
                <div class="feature-container">

                    {features}
                </div>
            </div >
        </React.Fragment>

    )
}