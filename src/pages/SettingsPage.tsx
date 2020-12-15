import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonButton,
  IonItem,
  IonLabel,
  IonToggle,
  IonCard,
  IonList,
  IonModal,
  IonText,
  IonAvatar,
  IonPopover,
  IonAlert,
  IonButtons,
  IonCardContent,
  IonInput,
} from '@ionic/react';

import React, { useState ,useEffect, useContext} from 'react';
import { auth } from '../firebase';
import { firestore } from "../firebase";
import  formatDate  from "../dateFunction";
import { Entry, toEntry } from "../model";
import {  UserContext ,useAuth  } from "../auth";


import "./settingPage.css"
import firebase from 'firebase';


const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");
};
const [showClosingAlert, setshowClosingAlert] =useState(false);

const SettingsPage: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const { userId } = useAuth();





useEffect(() => {
  const entriesRef = firestore.collection('users').doc(userId).collection('UserInfo');
  return entriesRef.onSnapshot(({docs})=> setEntries(docs.map(toEntry)));   /*  checks for new data on firestore */  
    }, []);
 




  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            {" "}
            <div className="ion-text-center"> Settings</div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-text-center" fullscreen>
          <IonCard>
          {entries.map((entry) => 
            <IonItem>

              <IonAvatar  slot="start" >
              <img  src="../../assets/placeholder.png" />
              </IonAvatar>
              <IonLabel >
                <h1>{entry.UserName}</h1>
                <h2>{entry.email}</h2>
              
              
              </IonLabel>
            </IonItem>
          )}

          </IonCard>

          <IonLabel>Usage Information</IonLabel>

          <IonCard>

            
              <IonItem>

                <IonText color="primary" >
                  Total tracked time: 
                </IonText>
              </IonItem>

              <IonItem>
                <IonText color="primary" >
                 
                </IonText>
              </IonItem>

             

            
          </IonCard>
          <IonLabel>Display</IonLabel>
          <IonCard>
            <IonItem>
              <IonLabel> Switch Theme</IonLabel>
              <IonToggle
                slot="end"
                name="darkMode"
                onIonChange={toggleDarkModeHandler} />
            </IonItem>
          </IonCard>

          <IonButton
            /*  color="medium" */
            expand="block"

            onClick={() => setshowClosingAlert(true)}

          >
            Logout
          </IonButton>
          <IonAlert
            isOpen={showClosingAlert}
            onDidDismiss={() => setshowClosingAlert(false)}
            cssClass='my-custom-class'
            header={'Log out!'}
            /*  subHeader={'Please fill up, all the inputs'} */
            message={'Do you want to log out'}
            buttons={[{
              text: 'No, Cancel',
              cssClass: 'secondary',
            },
            {
              text: ' Log Out',
              cssClass: 'alertcolor',

              handler: () => {
                auth.signOut();

              }
            }
            ]} />
            </IonContent>
 
    </IonPage>
  );
};

export default SettingsPage;
