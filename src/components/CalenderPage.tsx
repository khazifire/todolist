import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { play, stop } from "ionicons/icons";





const CalenderPage: React.FC = () => {
  
  return (
    <IonPage>
     
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div className="ion-text-center">Home Page </div>{" "}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonCard color="primary">
          <div className="ion-text-center ion-margin-top ion-padding-top">
            <h2>
             
           lol
            </h2>
          </div>
          <IonCardContent>
         
                <IonInput
                 
                ></IonInput>
              
           
              <div>
                <IonItem color="primary">
                  <IonLabel>Task: </IonLabel>
                  <IonSelect
                   
               
                  >
                    <IonSelectOption value="side-project">
                      Side Project
                    </IonSelectOption>
                    <IonSelectOption value="assignment">
                      Assignment
                    </IonSelectOption>
                    <IonSelectOption value="work">Work</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </div>
          
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
           
              <div>
                <IonRow>
                  <IonCol>
                    <IonButton
                   
                    >
                      <IonIcon icon={play}></IonIcon>
                    </IonButton>
                  </IonCol>
                  <IonCol className="ion-text-end">
                    <IonButton
                     
                    >
                      <IonIcon icon={stop} />
                    </IonButton>
                  </IonCol>
                </IonRow>
              </div>
            ) : (
              <div>
                <IonRow>
                  <IonCol>
                    <IonButton
                     
                    >
                      Reset
                    </IonButton>
                  </IonCol>
                  <IonCol className="ion-text-end">
                    <IonButton
                    
                    >
                      
                      Save
                    </IonButton>
                  </IonCol>
                </IonRow>
              </div>
           
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CalenderPage;