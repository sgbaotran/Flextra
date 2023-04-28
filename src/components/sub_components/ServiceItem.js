import './Service.css'
import serviceItems from '../data/service.json'


export default function service() {
    const services = serviceItems.map(serviceItem => {
        return (
            <div class="box">
                <img src={require(`../icon/${serviceItem.path}`)} alt="" />
                <h5><strong>{serviceItem.name}</strong></h5>
                    <p>{serviceItem.description}</p>
            </div>
        )
    })




    //         < img src = { require(`../media/${serviceItem.pa }`)} alt='' className=' timeline-icon' /> 

    // <h2 className='service-name not-image text-xl'><strong>{serviceItem.name}</strong></h2>

    // <div className='not-image'>
    //     {serviceItem.description.map(descriptionItem => (
    //         <p className='service-description'>{descriptionItem}</p>
    //     ))}
    // </div>




    return (

        <div className='service-section container'>
           
        </div >

    )
}