import React from 'react';
import "./welcome.css"
import { IonSlides, IonSlide, IonContent, IonCard, IonCardContent, IonTitle, IonPage, IonCardHeader, IonCardTitle, IonButton, IonIcon } from '@ionic/react';
import logo from "../loginAndRegister/logo.png"
import { arrowForward } from 'ionicons/icons';




// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400
};


const SlidesExample: React.FC = () => {
    return(
       
<IonPage>
    <IonContent fullscreen class="ion-padding" scroll-y="false">
      <IonSlides >
      
        <IonSlide>
        <div className="slide">
            <img src={logo}/>
            <h2><b>Welcome to TRACKT</b> </h2>
            <p>TRACKT keeps tracks of time spent on any given activities and generates reports based on the activiites done. </p>
            </div> 
        </IonSlide>

        <IonSlide>
        <div className="slide">
          <img src="./slide-2.png"/>
          <h2><b>Getting started</b> </h2>
          <p>put something here then like to register page</p>
          <IonButton fill="clear">Continue <IonIcon slot="end" icon={arrowForward} ></IonIcon></IonButton>
          </div> 
        </IonSlide>

       

      </IonSlides>
    </IonContent>
  </IonPage>
  
)};
export default SlidesExample;