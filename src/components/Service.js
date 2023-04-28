import './Service.css'
import featureItems from '../data/features.json'
import serviceItems from '../data/services.json'


export default function service() {
    const services = serviceItems.map(serviceItem => {
        return (
            <div class="service-box">
                <img src={require(`../media/${serviceItem.path}`)} alt="" />
                <h5 className='text'>{serviceItem.name}</h5>


            </div>
        )
    })



    const features = featureItems.map(featureItem => {
        return (
            <div class="feature-box">
                <img src={require(`../icon/${featureItem.path}`)} alt="" />
                <h5>{featureItem.name} </h5>
                <p>{featureItem.description}</p>
            </div>
        )
    })





    return (

        <div className='service-section container'>
            <h2 className='service-title' >Our Services</h2>
            <div class="service-box-container">
                {/* {services} */}
            </div>
            <div class="feature-box-container">
                {features}
            </div>

        </div >

    )
}