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
} from '@ionic/react';
import React, { useState ,useEffect} from 'react';
import { auth } from '../firebase';
import { firestore } from "../firebase";

import { Entry, toEntry } from "../model";
import { useAuth } from "../auth";

const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");
};

const SettingsPage: React.FC = () => {
  
  /* https://undraw.co/search */
  const { userId } = useAuth();

 
  const [entries, setEntries] = useState<Entry[]>([]);
  const [entry, setEntry] = useState<Entry>();
  
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

          <img
            height="150 px"
            src={"/assets/settings.svg"}
            alt="setting image"
          />

          <IonItem >
            <IonText color="primary" >
              Edit Picture
          </IonText>
          </IonItem>
        </IonCard>

        <IonLabel>Account Information</IonLabel>

        <IonCard>
        {entries.map((entry) => 
          <IonList>
            <IonItem>
            
              <IonText color="primary" >
                Change username: {entry.UserName}
          </IonText>  
            </IonItem> 
           
            <IonItem>
              <IonText color="primary" >
                Change Email: {entry.email}
          </IonText>
            </IonItem>

            <IonItem>
              <IonText color="primary" >
                Change Password
          </IonText>
            </IonItem>

          </IonList> )}
        </IonCard>
        <IonLabel>Display</IonLabel>
        <IonCard>
          <IonItem>
            <IonLabel> Switch Theme</IonLabel>
            <IonToggle
              slot="end"
              name="darkMode"
              onIonChange={toggleDarkModeHandler}
            />
          </IonItem>
        </IonCard>

        <IonButton
         /*  color="medium" */
          expand="block"
         
          onClick={() => auth.signOut()}

        >
          Logout
    </IonButton>

        {/*  <IonModal
      isOpen={showFaqModal}
      onDidDismiss={() => setFaqModal(false)!}
    >
      <FaqPage turnOffModal={turnOffFaq} />
    </IonModal>

    <IonModal
      isOpen={showCreditModal}
      onDidDismiss={() => setCreditModal(false)!}
    >
      <CreditsPage turnOffModal={turnOffCredit} />
    </IonModal> */}

      </IonContent>

    </IonPage>
  );
};




{/* <IonPage>
<IonHeader>
<IonToolbar>
    <IonTitle>Settings</IonTitle>
    </IonToolbar>
</IonHeader>


<IonItem>
              <IonLabel> Switch Theme</IonLabel>
              <IonToggle
                slot="end"
                name="darkMode"
                onIonChange={toggleDarkModeHandler}
              />
            </IonItem>

<IonContent className="ion-padding">
  <IonButton color="medium" expand="block"
    onClick={() => auth.signOut()}>
    Logout
  </IonButton>
</IonContent>
</IonPage>
);
}; */}


export default SettingsPage;
