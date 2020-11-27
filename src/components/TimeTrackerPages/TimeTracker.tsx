import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonText,
  IonLabel,
  IonTextarea,
  IonPopover,
} from "@ionic/react";
import React, { useState } from "react";
import Timer from "react-compound-timer";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { firestore } from "../../firebase";
import { useAuth } from "../../auth";

import moment from "moment";

const SettingsPage: React.FC = () => {
  const [timeIn, setTimeIn] = useState("");
  const { userId } = useAuth();
  const [description, setDescription] = useState("");
  const history = useHistory();
  const [showPopover, setShowPopover] = useState(false);
  const [timeworked, settimeworked] = useState<any>("");
  // const [timeInMinutes, settimeInMinutes] = useState<any>("");
  // const [timeInHours, settimeInHours] = useState<any>("");
  

  const handleTimeIn = () => {
    const now = moment();
    console.log("Time In: ", now);
    setTimeIn(now.toISOString());
  };

  const handleSaveTime = () => {
    const now = moment();
    console.log("Time out: ", now);
  
 
    const time1 = moment(timeIn);
    const timeDiff = now.diff(time1);
    const inseconds =(timeDiff / 1000);
    console.log(timeDiff / 1000, "Second");
    settimeworked(inseconds);

    
    
  };

  // const convertime =() =>{
  //   if (timeworked>10){
  //     settimeInMinutes(timeworked/15)
  //     console.log(timeInMinutes, "Second");
  //   } else if(timeInMinutes>2)
  //   settimeInHours(timeInMinutes/3)
  //   console.log(timeInHours, "Second");

  // }

  const workedTimePopUp = () => {
    
    handleSaveTime();
    StoreTimeInFirestore();
    setShowPopover(false);
    
  };

  function StoreTimeInFirestore() {
    firestore.collection("users").doc(userId).collection("entries").add({
      description: description,
      title: description,
      workedTime: timeworked,
      date: new Date(),
    });
    history.goBack();
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MangoTracker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonText>Stopwatch</IonText>
          </IonCardHeader>

          <Timer formatValue={(value) => `${value < 10 ? `0${value}` : value}`} initialTime={0} startImmediately={false}>
            {({ start, stop, reset }) => (
              <>
                <h1> <Timer.Hours />:<Timer.Minutes />:<Timer.Seconds /></h1>

                <IonCardContent   >
                  <IonButton  onClick={() => {start(); handleTimeIn()}}>Start</IonButton>
                  <IonButton  color="danger"  onClick={() => {stop(); reset(); handleSaveTime();setShowPopover(true)}}> Stop your activity </IonButton>
                </IonCardContent>
              </>
            )}
          </Timer>
        </IonCard>

        <IonPopover isOpen={showPopover} cssClass="conainer-of-Pop-Ups"onDidDismiss={(e) => workedTimePopUp()}>
          <p className="centerText">Congratulation!</p>
          
          <p className="centerText">You spent {timeworked} seconds working </p>
          <IonButton className="IonButtonRadius" expand="block"> View Report </IonButton> 
        </IonPopover>

      </IonContent>
      <IonLabel position="stacked">What are you working on</IonLabel>
      <IonTextarea value={description} onIonChange={(event) => setDescription(event.detail.value)}/>
    </IonPage>
  );
};

export default SettingsPage;

