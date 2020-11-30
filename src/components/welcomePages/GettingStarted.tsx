import React from 'react';
import "./welcome.css"
import { IonSlides, IonSlide, IonContent, IonCard, IonCardContent, IonTitle, IonPage, IonCardHeader, IonCardTitle } from '@ionic/react';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400
};


const SlidesExample: React.FC = () => {
    return(
       
<IonPage>
    <IonContent  fullscreen  >
     
        <IonSlides pager={true} options={slideOpts}>
          
      <IonSlide  >
        <h1>Welcome to TRACKT</h1>
              
      </IonSlide>
     
      <IonSlide>
        <h1>Gettting Started</h1>
      </IonSlide>
     
    </IonSlides>
       

   
  </IonContent>
  </IonPage>
  
)};
export default SlidesExample;