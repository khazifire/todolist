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
  IonInput,
  IonItem,
  IonDatetime,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import Timer from "react-compound-timer";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { firestore } from "../../firebase";
import { useAuth } from "../../auth";
import ".//tracker.css"

import moment from "moment";

const SettingsPage: React.FC = () => {
  const [timeIn, setTimeIn] = useState("");
  const { userId } = useAuth();
  const [description, setDescription] = useState("");
  const history = useHistory();
  const [showPopover, setShowPopover] = useState(false);

  const [AmountOfTimeWorked, settimeworked] = useState<any>("");
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
    const inseconds = (timeDiff / 1000);
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

  // function StoreTimeInFirestore() {
  //   firestore.collection("users").doc(userId).collection("entries").add({
  //     description: description,
  //     title: description,
  //     workedTime: timeworked,
  //     date: new Date(),
  //   });
  //   history.goBack();
  // }


  var [currentdate, setDate] = useState(new Date());
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  });

  const [title, setTitle] = useState('');
  const [date, setdate] = useState(new Date().toISOString());


  const StoreTimeInFirestore = async () => {
    const entriesRef = firestore.collection('users').doc(userId)
      .collection('TracktUserRecords');
    const entryData = { date, title, description, AmountOfTimeWorked };
    const entryRef = await entriesRef.add(entryData);
    console.log('saved:', entryRef.id);
    history.goBack();
  }

 
  
 

  return (
    <IonPage>


      <IonHeader>
        <IonToolbar>
          <IonTitle>TRACKT</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonText></IonText>
          </IonCardHeader>
      
          <IonLabel className='currentDateLabel'> {currentdate.toLocaleDateString()}</IonLabel> <br></br>
          <IonLabel className='currentTimeLabel'> {currentdate.toLocaleTimeString()}</IonLabel> 
          </IonCard>
        <IonCard>
        <IonItem>
          <IonLabel position="stacked">What are you doing?</IonLabel>
          <IonInput type="text" placeholder="Lab Asiistant"
            value={title} onIonChange={(event) => setTitle(event.detail.value)} />
        </IonItem>
    
        <IonItem>
          <IonLabel position="stacked">Brief description</IonLabel>
          <IonTextarea placeholder="Helping IT students in lab"
            value={description} onIonChange={(event) => setDescription(event.detail.value)} />
        </IonItem>

      {/* <IonItem>
          <IonLabel position="stacked">Date</IonLabel>
          <IonDatetime displayFormat="MMMM DD, YYYY - hh:mmA" value={date} onIonChange={(event) => setdate(event.detail.value)} /> 
     </IonItem> */}
</IonCard>
<IonCard>
          <Timer formatValue={(value) => `${value < 10 ? `0${value}` : value}`} initialTime={0} startImmediately={false}>
            {({ start, stop, reset }) => (
              <>
              <h2 className='h1_TracktTimer'>TRACKT TIMER</h2>
                <h1 className="h1_timer" > <Timer.Hours />:<Timer.Minutes />:<Timer.Seconds /></h1>

                <IonCardContent   >
                  <IonButton className="startButton" onClick={() => { start(); handleTimeIn() }}>Start</IonButton>
                  <IonButton className="startButton" color="danger" onClick={() => { stop(); reset(); handleSaveTime(); setShowPopover(true); }}> Stop your activity </IonButton>
                </IonCardContent>
              </>
            )}
          </Timer>
        </IonCard>

        <IonPopover isOpen={showPopover} cssClass="conainer-of-Pop-Ups" onDidDismiss={(e) => workedTimePopUp()}>
          <p className="centerText">Congratulation!</p>
          <p className="centerText">You spent {AmountOfTimeWorked} seconds working </p>
          <IonButton className="IonButtonRadius" expand="block"> View Report </IonButton>
        </IonPopover>

      </IonContent>

    </IonPage>
  );
};

export default SettingsPage;

