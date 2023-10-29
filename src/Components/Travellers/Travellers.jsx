import React, {useEffect} from 'react'
import kovil from '../../assets/images16.jpeg'
import No from '../../assets/No.jpeg'
import No1 from '../../assets/No1.png'
import No2 from '../../assets/nono.jpeg'


import Traveler1 from '../../assets/lara.png'
import Traveler2 from '../../assets/omega.png'
import Traveler3 from '../../assets/Girija.jpeg'
import Traveler4 from '../../assets/Leo.png'


import Aos from 'aos'
import 'aos/dist/aos.css'




const travelers = [
  {
    id: 1,
    destinationImage: kovil,
    travelerImage:Traveler1,
    travelerName:'Lara',
    socialLink:'@larajhan7'
  
  },

  {
    id: 2,
    destinationImage: No,
    travelerImage:Traveler2,
    travelerName:'Omega',
    socialLink:'@omegasheera90'
  
  },

  {
    id: 3,
    destinationImage: No1,
    travelerImage:Traveler3,
    travelerName:'Girija',
    socialLink:'@Girijarajan34'
  
  },

  
  {
    id: 4,
    destinationImage: No2,
    travelerImage:Traveler4,
    travelerName:'LEO',
    socialLink:'@blodysweet001'
  
  }
]


const Travellers = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])



  return (
    <div className='traveler-S containersection'>
      <div className="Sectioncontainer">
        <h2 data-aos='fade-down'data-aos-duration='2500'>
          Top Travelers of this month!
        </h2>

        <div className="travelerSContainer grid">

         
         {
          travelers.map(({id,destinationImage,travelerImage,travelerName,
            socialLink})=>{
            return(
              <div data-aos='fade-up'data-aos-duration='2500' key={id} className="singleTravelers">

              <img  src={destinationImage} className='destinationImage'/>
  
              <div className="travelerDetails">
                <div className="tavelerPicture">
                  <img src={travelerImage} className="travelerImage"/>
                </div>
                <div  className="travelerName">
                  <span>{travelerName}</span>
                   <p>{socialLink}</p>
                
                </div>
              </div>
  
            </div>
            )

          })
         }

        </div>

      </div>

    </div>
  )
}

export default Travellers