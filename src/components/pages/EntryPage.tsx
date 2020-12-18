import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonButton,
  IonBackButton,
  IonIcon,
  IonButtons,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { firestore } from "../../firebase/firebase";
import { Entry, toEntry } from "../../firebase/model";
import { useAuth } from "../../firebase/auth";
import { trash as deleteIcon } from 'ionicons/icons';
import { useHistory } from "react-router-dom";

import moment from 'moment';


const formatDate = (inputDate: string) => {
  const date = moment(inputDate);
  return (
    date.format('MMMM DD, YYYY')
  );
}

interface RouteParams {
  id: string;
}

const EntryPage: React.FC = () => {
  const match = useRouteMatch<RouteParams>();
  const { id } = match.params;
  const [entry, setEntry] = useState<Entry>();
  const { userId } = useAuth();
  const history = useHistory();



  function handleDelete() {
    firestore.collection('users').doc(userId).collection('TracktUserRecords').doc(id)
      .delete()
    history.goBack();
  };


  useEffect(() => {
    const entryRef = firestore.collection("users").doc(userId).collection("TracktUserRecords").doc(id);
    entryRef.get().then((doc) => {
      setEntry(toEntry(doc));
    });
  }, [userId, id]);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle> {formatDate(entry?.date)}</IonTitle>
          <IonButton slot="end" onClick={handleDelete} fill="clear">
            <IonIcon icon={deleteIcon} />
          </IonButton>

        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Activity:  </h1>
        <p>{entry?.title}</p>

        <h3>Time spent:</h3>
        <p>{entry?.AmountOfTimeWorked}</p>
        <h2>Description:</h2>
        <p>{entry?.description}</p>
      </IonContent>

    </IonPage>
  );
};

export default EntryPage;
