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
  IonAlert
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import Timer from "react-compound-timer";
import { useHistory } from "react-router-dom";
import { firestore } from "../../firebase";
import { useAuth } from "../../auth";
import ".//tracker.css"

/* import ".//clock.css" */

import moment from "moment";

const SettingsPage: React.FC = () => {
  const [timeIn, setTimeIn] = useState("");
  const { userId } = useAuth();
  const [description, setDescription] = useState("");
  const history = useHistory();
  const [showPopover, setShowPopover] = useState(false);
  const [AmountOfTimeWorked, settimeworked] = useState<any>("");
  const [PopoverTimer, setPopoverTimer] = useState(false);
  const [showAlert, setshowAlert]=useState(false);
  
  const handleTimeIn = () => {
  
    const now = moment();
    console.log("Time In: ", now);
    setTimeIn(now.toISOString());
    setPopoverTimer(true);
    
   
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

  const workedTimePopUp = () => {
    handleSaveTime();
    StoreTimeInFirestore();
    setShowPopover(false);

  };

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
      
      </IonHeader>
      <IonContent className="ion-text-center">
        <IonCard>
        
          <IonCardHeader className="clock">
          <IonLabel className='currentDateLabel'> {currentdate.toLocaleDateString()}</IonLabel> <br></br>
          <IonLabel >day here</IonLabel>
          {/* <IonLabel className='currentTimeLabel'> {currentdate.toLocaleTimeString()}</IonLabel>  */}
          </IonCardHeader>
        
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
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setshowAlert(false)}
          cssClass='my-custom-class'
          header={'Empy fields Alert'}
         /*  subHeader={'Please fill up, all the inputs'} */
          message={'"What are you doing", cannot be left empty'}
          buttons={['OK']}
        />

      {/* <IonItem>
          <IonLabel position="stacked">Date</IonLabel>
          <IonDatetime displayFormat="MMMM DD, YYYY - hh:mmA" value={date} onIonChange={(event) => setdate(event.detail.value)} /> 
     </IonItem> */}
</IonCard>
<IonCard>
          <Timer formatValue={(value) => `${value < 10 ? `0${value}` : value}`} initialTime={0} startImmediately={false}>
            {({ start, stop, reset }) => (
              <>
            {/*   <h2 className='h1_TracktTimer'>TRACKT TIMER</h2>
                <h1 className="h1_timer" > <Timer.Hours />:<Timer.Minutes />:<Timer.Seconds /></h1> */}

                
                  <IonButton className="startButton" onClick={() => { 
                    if  (title!==""){
                    start(); 
                    handleTimeIn(); 
                     }
                     else {
                      setshowAlert(true);
                     }}}>Start</IonButton>
               

          <IonPopover isOpen={PopoverTimer} cssClass="fullscreen" backdropDismiss={false}> 
         
          <p className="centerText">TImer hehehe</p>

          <h1  className="centerText"> <Timer.Hours />:<Timer.Minutes />:<Timer.Seconds /></h1>
          <br>
          </br>
          <br>
          </br>

          <IonButton className="startButton" color="danger" onClick={() => { stop(); reset(); handleSaveTime(); setPopoverTimer(false);setShowPopover(true);}}> Stop and Save </IonButton>

          <IonButton className="IonButtonRadius" expand="block" onClick={() =>{stop(); reset();setPopoverTimer(false)}}> Cancel and Quit</IonButton>
         
        </IonPopover>
              </>
            )}
          </Timer>
        </IonCard>
      
        <IonPopover isOpen={showPopover} cssClass="conainer-of-Pop-Ups"  backdropDismiss={false}>
          <h1 className="centerText">Congratulation!</h1>
          <h2 className="centerText">You spent {AmountOfTimeWorked} seconds working </h2>
 
           <IonButton className="IonButtonRadius" expand="block" onClick={() =>workedTimePopUp()}>  Continue </IonButton> 
        </IonPopover>

      </IonContent>
    
    </IonPage>
  );
};

export default SettingsPage;

