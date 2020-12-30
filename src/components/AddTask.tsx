import React, { useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonListHeader,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";



const AddTask: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
       
        <IonButtons>
          <IonBackButton />  {/* fix the back button */}
        </IonButtons>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonCard>
          <div className="ion-text-center ion-margin-top ion-padding-top">
            <h2> Add Task</h2>
          </div>

          <IonItem>
            <IonInput type="text" placeholder="Your Task Name"></IonInput>
          </IonItem>
          <IonItemDivider></IonItemDivider>
          <div>
            <IonItem>
              <IonLabel>Task Category </IonLabel>
              <IonSelect slot="end">
                <IonSelectOption value="personal">Personal</IonSelectOption>
                <IonSelectOption value="private">Private</IonSelectOption>
                <IonSelectOption value="work">Work</IonSelectOption>
                <IonSelectOption value="School">School</IonSelectOption>
                <IonSelectOption value="event">Event</IonSelectOption>
              </IonSelect>
            </IonItem>
          </div>

          <div>
            <IonItem>
              <IonLabel>Task Priority </IonLabel>
              <IonSelect slot="end">
                <IonSelectOption value="VeryUrgent">
                  Very Urgent
                </IonSelectOption>
                <IonSelectOption value="Urgent">Urgent</IonSelectOption>
                <IonSelectOption value="LessUrgent">
                  Less Urgent
                </IonSelectOption>
              </IonSelect>
            </IonItem>
          </div>
          <IonItemDivider></IonItemDivider>
          <IonItem>
            <IonLabel>Start Date</IonLabel>
            <IonDatetime
              value={"1990-02-19"}
              placeholder="Select Date"
            ></IonDatetime>{" "}
            {/* should alwassy be curret date */}
          </IonItem>

          <IonItem>
            <IonLabel>End Date</IonLabel>
            <IonDatetime
              value="1990-02-20"
              placeholder="Select Date"
            ></IonDatetime>{" "}
            {/* should awassy be one day after */}
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Description</IonLabel>
            <IonTextarea></IonTextarea>
          </IonItem>
        

          <div className="ion-padding">
            <IonButton expand="block" type="submit" class="ion-no-margin">
              Create New Task
            </IonButton>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AddTask;
