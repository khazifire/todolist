import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonCard,
  IonCardHeader,
  IonLabel,
  IonTextarea,
  IonPopover,
  IonInput,
  IonItem,
  IonAlert,
  IonModal,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonRow,
  IonCol
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import Timer from "react-compound-timer";
import { useHistory } from "react-router-dom";
import { firestore } from "../../firebase";
import { useAuth } from "../../auth";
import ".//tracker.css"
import  formatDate   from "../../dateFunction";
import  formatDay   from "../../dateFunction";


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
  const [showAlert, setshowAlert] = useState(false);
  const [totalTimeWorked, settotalTimeWorked]=useState<any>("");

  const [showClosingAlert, setshowClosingAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [TimeWorked, setTimeWorked]=useState<any>("");



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
    settotalTimeWorked(inseconds+totalTimeWorked);
  };

  const workedTimePopUp = () => {
    handleSaveTime();
    StoreTimeInFirestore();
    setShowPopover(false);
 

  };


  const [title, setTitle] = useState('');
  const [date] = useState(new Date().toISOString());
  
  
  const StoreTimeInFirestore = async () => {
    const entriesRef = firestore.collection('users').doc(userId)
      .collection('TracktUserRecords');
    const entryData = { date, title, description, AmountOfTimeWorked, totalTimeWorked };
    const entryRef = await entriesRef.add(entryData);
    console.log('saved:', entryRef.id);
    
    history.goBack( "/login");
  }

  const formatDay = (inputDate) => {
    const date = moment(inputDate);
    return (
      date.format('dddd')
    );
  }

  return (
    <IonPage>


      <IonHeader>

      </IonHeader>
      <IonContent className="ion-text-center">
        <IonCard>

          <IonCardHeader className="clock">
            <IonLabel className='currentDateLabel'> {formatDate(Date.now())}</IonLabel> <br></br>
            <IonLabel className='currentDateLabel'>{formatDay(Date.now())}</IonLabel>
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
            header={'Empty fields Alert'}
            /*  subHeader={'Please fill up, all the inputs'} */
            message={'Please fill up the empty fields'}
            buttons={['OK']}
          />


        </IonCard>
        <IonContent>
          <Timer formatValue={(value) => `${value < 10 ? `0${value}` : value}`} initialTime={0} startImmediately={false}>
            {({ start, stop, reset }) => (
              <>
                {/*   <h2 className='h1_TracktTimer'>TRACKT TIMER</h2     className="startButton">
                <h1 className="h1_timer" > <Timer.Hours />:<Timer.Minutes />:<Timer.Seconds /></h1> */}

                
                  <IonButton className="startButton"  onClick={() => { 
                    if  (title!==""){
                    start(); 
                    handleTimeIn(); 
                    setShowModal(true)
                     }
                     else {
                      setshowAlert(true);}}}>Start Timer</IonButton>
                
       <IonModal isOpen={showModal}>
       <IonHeader translucent>
            <IonToolbar>
              <IonTitle>Time Tracker</IonTitle>
              <IonButtons slot="end">
             
              </IonButtons>
            </IonToolbar>
          </IonHeader> 
          <IonContent className="ion-padding" >
          <img   className="imageSize"src="/assets/working.svg"  />
          <h1  className="centerText2"> <Timer.Hours />:<Timer.Minutes />:<Timer.Seconds /></h1>
        
            <IonRow>
              <IonCol  >
         <IonButton    onClick={() => { stop(); setTimeWorked({Timer.Seconds}); reset(); handleSaveTime(); setPopoverTimer(false);setShowPopover(true);setShowModal(false)}}> Stop and Save </IonButton>
         </IonCol>

         <IonCol >
         <IonButton  color="danger" onClick={() =>{stop(); reset();setPopoverTimer(false);setshowClosingAlert(true)}}> Cancel and Quit</IonButton>
         
         </IonCol>
         </IonRow>
          </IonContent>



       </IonModal>
              



                

                  <IonAlert
            isOpen={showClosingAlert}
            onDidDismiss={() => setshowClosingAlert(false)}
            cssClass='my-custom-class'
            header={'Close and Quit'}
            /*  subHeader={'Please fill up, all the inputs'} */
            message={'Do you really want to stop the timer without saving '}
            buttons={[{
              text: 'No, Cancel',
              cssClass: 'secondary',
            },
            {
              text: 'Yes, Quit',
              cssClass: 'alertcolor',
             
              handler: () => { stop(); reset(); setShowModal(false); 
              
              }
            }
          ]}
        />
            
              </>
            )}
          </Timer>
        </IonContent>

        <IonPopover isOpen={showPopover}  backdropDismiss={false}>
          <h1 className="centerText">Congratulation!</h1>
          <h2 className="centerText">You spent {AmountOfTimeWorked} seconds working and also {TimeWorked} </h2>

          <IonButton className="IonButtonRadius" expand="block" onClick={() => workedTimePopUp()}>  Continue </IonButton>
        </IonPopover>





      </IonContent>

    </IonPage>
  );
};

export default SettingsPage;

