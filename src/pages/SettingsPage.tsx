import {
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
  IonAvatar,
  IonAlert,
} from '@ionic/react';

import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { firestore } from "../firebase";
import { Entry, toEntry } from "../model";
import { useAuth } from "../auth";
import "./settingPage.css"



const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");
};


const SettingsPage: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const { userId } = useAuth();
  const [showClosingAlert, setshowClosingAlert] = useState(false);


  useEffect(() => {
    const entriesRef = firestore.collection('users').doc(userId).collection('UserInfo');
    return entriesRef.onSnapshot(({ docs }) => setEntries(docs.map(toEntry)));   /*  checks for new data on firestore */
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

              <IonAvatar slot="start" >
                <img src="../../assets/placeholder.png" alt=""/>
              </IonAvatar>
              <IonLabel >
                <h1>{entry.UserName}</h1>
                <h2>{entry.email}</h2>


              </IonLabel>
            </IonItem>
          )}

        </IonCard>


        <IonLabel>Display  </IonLabel>
        <IonCard>
          <IonItem>
            <IonLabel> Switch Theme (Light | Dark)</IonLabel>
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
