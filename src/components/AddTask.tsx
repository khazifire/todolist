import React, { useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTextarea
} from "@ionic/react";



const AddTask: React.FC = () => {
  const [TaskName, setTaskName]=useState();
  const [TaskCategory, setTaskCategory]= useState("personal");
  const [TaskPriority, setTaskPriority]=useState("Urgent");
  const [StartDate, setStartDate]=useState(Date);
  const [EndDate, setEndDate]=useState(Date);
  const [TaskDescription,setTaskDescription]=useState();
  const [CountTask, setCountTask]=useState(1);
  

  const HandleInputs = ()=>{
    setTaskName(TaskName);
    setTaskCategory(TaskCategory);
    setTaskPriority(TaskPriority);
    setStartDate(StartDate);
    setEndDate(EndDate);
    setTaskDescription(TaskDescription);
    setCountTask(CountTask+1)
    console.log(CountTask, "hgh")
    
  }

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
            <IonLabel position="stacked">Task Name</IonLabel>
            <IonInput type="text" value={TaskName} placeholder="what is your task"></IonInput>
          </IonItem>
          <IonItemDivider></IonItemDivider>
          <div>
            <IonItem>
              <IonLabel>Task Category </IonLabel>
              <IonSelect value={TaskCategory}slot="end">
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
              <IonSelect value={TaskPriority} slot="end">
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
              value={StartDate}
              placeholder="Select Date"
            ></IonDatetime>{" "}
            {/* should alwassy be curret date */}
          </IonItem>

          <IonItem>
            <IonLabel>End Date</IonLabel>
            <IonDatetime
              value={EndDate}
              placeholder="Select Date"
            ></IonDatetime>{" "}
            {/* should awassy be one day after */}
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Description</IonLabel>
            <IonTextarea value={TaskDescription}></IonTextarea>
          </IonItem>
        

          <div className="ion-padding">
            <IonButton expand="block" onClick={HandleInputs} class="ion-no-margin">
              Create New Task
            </IonButton>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AddTask;
