import React, { useContext } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonLabel,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
  IonIcon
} from "@ionic/react";
import "./welcome.css"
import { arrowForward } from 'ionicons/icons';

import { useHistory } from "react-router";
/* import { turnOffModal } from "../model"; */

const GettingStarted: React.FC = () => {
  const history = useHistory();

  return (
    <>
      
      <IonContent color="light" fullscreen>
        <IonSlides>
          <IonSlide>
            <IonCard className="IonCardFaq">
           
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img  height="300 px"src="/assets/welcome.svg"  />
                </div>
                <br />
                <IonCardSubtitle className="centerText">
                  Hello!
                </IonCardSubtitle>
                <IonCardTitle className="centerText">Welcome</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <IonText>
                  <div className="ion-text-center">
                    Swipe Left  to continue 
                    <IonIcon  icon={arrowForward} ></IonIcon>
                  </div>
                </IonText>
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="IonCardFaq">
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img height="150 px" src="/assets/productive.svg" />
                </div>
               
              </IonCardHeader>

              <IonCardContent>
                <IonText>
                  <div className="ion-text-center">
                  TRACKT is a productivity tool, which helps you keep track of time spent on any given activities. And does not make use of any collected data.
                  </div>
                </IonText>
              </IonCardContent>
            </IonCard>
          </IonSlide>
          
          <IonSlide>
            <IonCard className="IonCardFaq">
              <br />
              <br />
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img height="120 px" src="/assets/login.svg"  />
                </div>{" "}
                <br />
                {/* <IonCardSubtitle className="centerText">
                  Contact Us
                </IonCardSubtitle> */}
                <IonCardTitle className="centerText">Getting Started</IonCardTitle>
              </IonCardHeader>

              <IonCardContent >
                <br />
                <IonButton  className="buttonsStyle" routerLink="/login">Login</IonButton>  <br />
               <IonButton  className="buttonsStyle" routerLink="/register"> Create an Account</IonButton>
               
              </IonCardContent>
            </IonCard>
          </IonSlide>
         
         
        </IonSlides>
        {/* <IonButton fill="clear" expand="full" >
          SKIP
        </IonButton> */}
      </IonContent>
    </>
  );
};

export default GettingStarted;