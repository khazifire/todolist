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
  const { userId } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);

  const [PopoverUsername, setPopoverUsername] = useState(false);
  const [PopoverPassword, setPopoverPassword] = useState(false);
  const [PopoverEmail, setPopoverEmail] = useState(false);
  const [PopoverChangePic, setPopoverChangePic] = useState(false);

  useEffect(() => {
    const entriesRef = firestore.collection('users').doc(userId).collection('UserInfo');
    return entriesRef.onSnapshot(({docs})=> setEntries(docs.map(toEntry)));   /*  checks for new data on firestore */  
      }, []);

      
const updateUsername = () => {
  setPopoverUsername(true);

 
};

const updatePassword = () => {
  console.log("hi bitc");
  setPopoverPassword(true);
};

const updateEmail= () => {
  console.log("hi bitc");
  setPopoverEmail(true);
};

const changeProfilePic= () => {
  console.log("hi bitc");
  setPopoverChangePic(true);
};

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
        <IonItem>
          <IonAvatar slot="start">
            <img src="../../assets/placeholder.png" />
            </IonAvatar>
        <IonLabel>
          <h3>Dan Kazimoto</h3>
          <p>Dec 12, 2020</p>
        </IonLabel>
    </IonItem>

          {/* <img
            height="150 px"
            src={"/assets/settings.svg"}
            alt="setting image"
          />

          <IonItem >
            <IonText color="primary" >
              Edit Picture
          </IonText>
          </IonItem> */}
        </IonCard>

        <IonLabel>Account Information</IonLabel>

        <IonCard>
        {entries.map((entry) => 
          <IonList>
            <IonItem>
            
              <IonText color="primary" onClick={updateUsername} >
                Change username: {entry.UserName}
          </IonText>  
            </IonItem> 
           
            <IonItem>
              <IonText color="primary" onClick={updateEmail}>
                Change Email: {entry.email}
          </IonText>
            </IonItem>

            <IonItem>
              <IonText color="primary" onClick={updatePassword}>
                Change Password: **********
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
      <IonPopover isOpen={PopoverUsername} cssClass="conainer-of-Pop-Ups" onDidDismiss={(e) => setPopoverUsername(false)}>
          <p className="centerText">updating username!</p>
        
          <IonButton className="IonButtonRadius" expand="block" onClick={() =>setPopoverUsername(false)}> Cancel  </IonButton>
        </IonPopover>

        <IonPopover isOpen={PopoverPassword} cssClass="conainer-of-Pop-Ups" onDidDismiss={(e) => setPopoverPassword(false)}>
          <p className="centerText">pdating password!</p>
        
          <IonButton className="IonButtonRadius" expand="block" onClick={() =>setPopoverPassword(false)}> Cancel </IonButton>
        </IonPopover>

        <IonPopover isOpen={PopoverEmail} cssClass="conainer-of-Pop-Ups" onDidDismiss={(e) => setPopoverEmail(false)}>
          <p className="centerText">updating email!</p>
        
          <IonButton className="IonButtonRadius" expand="block" onClick={() =>setPopoverEmail(false)}> Cancel </IonButton>
        </IonPopover>

        <IonPopover isOpen={PopoverChangePic} cssClass="conainer-of-Pop-Ups" onDidDismiss={(e) => setPopoverChangePic(false)}>
          <p className="centerText">chnaging profile pic!</p>
          
          <IonButton className="IonButtonRadius" expand="block" onClick={() =>setPopoverChangePic(false)}> Cancel </IonButton>
        </IonPopover>
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
