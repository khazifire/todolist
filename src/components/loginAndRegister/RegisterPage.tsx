import {
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonLoading,
IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/react';

import React, { useState } from 'react';
import { useAuth } from '../../auth';
import { auth, firestore } from '../../firebase';

import { Redirect } from 'react-router';



//import { Link } from 'react-router-dom';

interface Props {
  onLogin: () => void;
  //loggedIn:Boolean;
}

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [UserName, setUserName] = useState('');
  const [status, setStatus] = useState({loading: false, error: false});
  const { userId } = useAuth();

  const handleRegister = async () => {
    try {
      setStatus({loading: true, error: false});
      const credential = await auth.createUserWithEmailAndPassword(email, password);
      console.log('credential', credential);
    } catch (error) {
      setStatus({loading: false, error: true })
      console.log('error: ', error);
    }

    
  };

  const { loggedIn } = useAuth();
  if(loggedIn){

   const entriesRef=firestore.collection('users').doc(userId).collection('UserInfo');
  const entryData = { UserName,email };
  const entryRef =  entriesRef.add(entryData);

    return <Redirect to="/my/entries"/>;
  }

  return (
<IonPage>
    <IonContent color="light" fullscreen>
      <IonCard className="ionCardstyle">
      <IonCardHeader>
                  <img  className="imageSize2"src="/assets/signUp_illustration.svg"  />
                <IonCardSubtitle className="centerText">
                  Sign Up
                </IonCardSubtitle>
                <IonCardTitle className="centerText">Welcome!</IonCardTitle>
              </IonCardHeader>

          <IonCardContent>
            <IonList>

            <IonItem>
                <IonLabel position="stacked">Username</IonLabel>
                <IonInput
                className="input100"
                  type="email"
                  value={UserName}
                  onIonChange={(event) => setUserName(event.detail.value)}
                  placeholder="@username"
                />
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput
                className="input100"
                  type="email"
                  value={email}
                  onIonChange={(event) => setEmail(event.detail.value)}
                  placeholder="johndoe@gmail.com"
                />
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput
                className="input100"
                  type="password"
                  value={password}
                  onIonChange={(event) => setPassword(event.detail.value)}
                  placeholder="**********"
                />
              </IonItem>
            </IonList>
            {status.error &&
              <IonText color="danger">Registration Failed</IonText>
          }

            <IonButton 
            expand="block" 
            onClick={handleRegister}>Sign Up
            </IonButton>

            <IonButton 
            expand="block" 
            fill="clear" 
            routerLink="/login">Already have an account?
              </IonButton>

              <IonLoading isOpen={status.loading}></IonLoading>

            {/* <IonLoading isOpen={status.loading}></IonLoading> */}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;