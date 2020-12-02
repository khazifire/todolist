import React from 'react';
import "./welcome.css"
import { IonSlides, IonSlide, IonContent, IonCard, IonCardContent, IonTitle, IonPage, IonCardHeader, IonCardTitle, IonButton, IonIcon } from '@ionic/react';
import logo from "../loginAndRegister/logo.png"
import { arrowForward } from 'ionicons/icons';




// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};


const SlidesExample: React.FC = () => {
    return(
       
<IonPage >
    <IonContent  fullscreen class="ion-padding" scroll-y="false" >
      <IonSlides pager={true} options={slideOpts}>
      
        <IonSlide >
        <div className="slide">
            <img src={logo} />
            <h2><b>Welcome to TRACKT</b> </h2>
            <p>TRACKT keeps tracks of time spent on any given activities and generates reports based on the activiites done. </p>
            </div> 
        </IonSlide>

        <IonSlide>
        <div className="slide">
          <img src="./slide-2.png"/>
          <h2><b>Getting started</b> </h2>
          <p>In order to use TRACKT you need to create an account, so that your record can be saved</p>
          <IonButton fill="clear">NEXT <IonIcon slot="end" icon={arrowForward} ></IonIcon></IonButton>
          </div> 
        </IonSlide>

       
        <IonSlide>
        <div className="slide">
          <img src="./slide-2.png"/>
          <h2><b>1</b> </h2>
          <p>After signing up, you will be automatically be redirect to the homepage.</p>
          <IonButton fill="clear">NEXT<IonIcon slot="end" icon={arrowForward} ></IonIcon></IonButton>
          </div> 
        </IonSlide>

        <IonSlide>
        <div className="slide">
          <img src="./slide-2.png"/>
          <h2><b>2</b> </h2>
          <p>To use the tracker, click on the plus icon, on the bottom right, or the tab "Tracker"</p>
          <p>Fill up all the empty field while on the tracker page</p>
          <IonButton fill="clear">NEXT<IonIcon slot="end" icon={arrowForward} ></IonIcon></IonButton>
          </div> 
        </IonSlide>
        

        
        <IonSlide>
        <div className="slide">
          <img src="./slide-2.png"/>
          <h2><b>3</b> </h2>
          <p>Press START, to initiate the timer, and STOP to terminate the timer thus saving the timer spent on that activites </p>
          <IonButton fill="clear">NEXT<IonIcon slot="end" icon={arrowForward} ></IonIcon></IonButton>
          </div> 
        </IonSlide>

        
        <IonSlide>
        <div className="slide">
          <img src="./slide-2.png"/>
          <h2><b>4</b> </h2>
          <p>The HOME page,diaplays all the record of the activites you kept track of. The PROGRESS page, displays a grpahical summary of the activites you did</p>
          <IonButton fill="clear" routerLink="/my/home">Lets dive in <IonIcon slot="end" icon={arrowForward} ></IonIcon></IonButton>
          </div> 
        </IonSlide>
      </IonSlides>
    </IonContent>
  </IonPage>
  
)};
export default SlidesExample;