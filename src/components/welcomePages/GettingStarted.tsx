import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonSlide,
  IonSlides,
  IonText,
  IonIcon
} from "@ionic/react";
import "./welcome.css"
import { arrowForward } from 'ionicons/icons';


/* import { turnOffModal } from "../model"; */

const GettingStarted: React.FC = () => {
 

  return (
    <>
      
      <IonContent color="light" fullscreen>
        <IonSlides>
          <IonSlide>
            <IonCard className="IonCardWel">
           
              <IonCardHeader>
                <div className="ion-text-center centerImg">
                  <img  height="300 px"src="/assets/welcome.svg"  alt="" />
                </div>
                <br />
                <br />
                <IonCardTitle ><h1>Welcome</h1></IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <IonText>
                   <h2> Swipe Left  to continue 
                    <IonIcon  icon={arrowForward} ></IonIcon></h2>
                   <br />
                </IonText>
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="IonCardWel">
              <IonCardHeader>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               
                <div className="ion-text-center ">
                  <img height="50px" src="/assets/productive.svg" alt="" />
                </div>
               
              </IonCardHeader>

              <IonCardContent className="ion-text-left">
                
                  <p >TRACKT is a productivity tool, which helps you keep track of time spent on any given activities. And does not make use of any collected data.
                  </p>
                  <br></br>  
              </IonCardContent>
            </IonCard>
          </IonSlide>
          
          <IonSlide>
            <IonCard className="IonCardWel">
             
            
              <IonCardHeader>
                <div className="ion-text-center">
                  <img height="50 px" src="/assets/login.svg"  alt="" />
                </div>
                <br />
            
                <IonCardTitle><h2>Getting Started</h2></IonCardTitle>
              </IonCardHeader>

              <IonCardContent >
              <IonButton   routerLink="/register"> Create a new account</IonButton>
                <IonButton  color="secondary" fill="clear" routerLink="/login">Login to an existing  account</IonButton>  <br />
               
               
              </IonCardContent>
            </IonCard>
          </IonSlide>
         
         
        </IonSlides>
       
      </IonContent>
    </>
  );
};

export default GettingStarted;