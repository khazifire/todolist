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
import React, { useState } from 'react';
import { auth } from '../firebase';

const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");
};

const SettingsPage: React.FC = () => {
  
  /* https://undraw.co/search */

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
          <IonList>
            <IonItem>
              <IonText color="primary" >
                Change username
          </IonText>
            </IonItem>

            <IonItem>
              <IonText color="primary" >
                Change Email
          </IonText>
            </IonItem>

            <IonItem>
              <IonText color="primary" >
                Change Password
          </IonText>
            </IonItem>

          </IonList>
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
          color="medium"
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
