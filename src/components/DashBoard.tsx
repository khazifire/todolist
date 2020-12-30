import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonLabel,
  IonItem,
  IonCard,
  IonCardContent,
  IonBadge,
} from "@ionic/react";


import Form from "./form";
import Todolist from "./todolist";
import "./styles.css";


const DashBoard = () => {
  const [TotalTask, SetTotaTask]=useState(0);
  const [CompetedTask, setCompetedTask]=useState(0);
  const [PendingTask, setPendingTask]=useState(0)

  


  return (
    <IonContent class="Ion-padding">
      <IonCardContent>
      <IonLabel>DashBoard</IonLabel>
      </IonCardContent>
      
     <IonCard >
       bar graph here 
        </IonCard>

      <IonCard>
        <IonItem>
          <IonLabel>Total Task</IonLabel>
          <IonBadge color="Primary" slot="end">
            {TotalTask}
          </IonBadge>
        </IonItem>
      </IonCard>

      <IonCard>
        <IonItem>
          <IonLabel>Completed Task</IonLabel>
          <IonBadge color="Primary" slot="end">
            {CompetedTask}
          </IonBadge>
        </IonItem>
      </IonCard>

      <IonCard>
        <IonItem>
          <IonLabel>Task in Progress</IonLabel>
          <IonBadge color="Primary" slot="end">
            {PendingTask}
          </IonBadge>
        </IonItem>
      </IonCard>

    
    </IonContent>
  );
};

export default DashBoard;
