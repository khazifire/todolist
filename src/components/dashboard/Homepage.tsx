import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonCard,
  IonIcon,
  IonAvatar,
  IonItem,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase/firebase";
import { Entry, toEntry } from "../../firebase/model";
import { useAuth } from "../../firebase/auth";

import moment from "moment";
import "../settings/SettingsPage";
import { walletOutline, cardOutline } from "ionicons/icons";
import { LineChart, Line, YAxis, XAxis, CartesianGrid,ResponsiveContainer, Tooltip, Legend } from 'recharts';

const HomePage: React.FC = () => {
  const { userId } = useAuth();

  const [entries, setEntries] = useState<Entry[]>([]);
  const [entries2, setEntries2] = useState<Entry[]>([]);
  const [totalNumOfActi, settotalNumOfActi] = useState<number>();

  useEffect(() => {
    const entriesRef = firestore
      .collection("users")
      .doc(userId)
      .collection("UserInfo");
    return entriesRef.onSnapshot(({ docs }) =>
      setEntries2(docs.map(toEntry))
    ); /*  checks for new data on firestore */
  }, []);

  useEffect(() => {
    const entriesRef = firestore
      .collection("users")
      .doc(userId)
      .collection("UserRecords");
    console.log("You are in HomePage", entriesRef);

    return entriesRef
      .orderBy("date", "desc")
      .limit(7)
      .onSnapshot(({ docs }) =>
        setEntries(docs.map(toEntry))
      ); /*  checks for new data on firestore */
  }, []);

  const data = [
    {
        "name": "Dec 2020",
        "Income": 10,
        "Expenses": 50
    },
    {
        "name": "Jan 2021",
        "Income": 50,
        "Expenses": 100
    },
    {
        "name": "Feb 2021",
        "Income": 100,
        "Expenses": 10
    }
]

  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
  
   
          
          <IonCard>
        
          <ResponsiveContainer width="100%" height={300}>
          <LineChart  data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 30 }}>
 
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                
                <Legend />
                <Line type="monotone" dataKey="Income" stroke="#044259" />
                <Line type="monotone" dataKey="Expenses" stroke="#428cff" />
            </LineChart>
            </ResponsiveContainer>
            </IonCard>
       
     

     
      
      <IonCard  className="ion-text-center"> 
      <IonLabel ><h1>My Account</h1> </IonLabel>

      <IonItem>
          <IonAvatar slot="start">
            <IonIcon icon={cardOutline} size="large" />
          </IonAvatar>
          <IonLabel> Income: 200 baht</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <IonIcon icon={walletOutline} size="large" />
          </IonAvatar>
          <IonLabel> Expenses: 200 baht</IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <IonIcon icon={cardOutline} size="large" />
          </IonAvatar>
          <IonLabel> Balance: 0 baht</IonLabel>
        </IonItem>
       
      </IonCard>
    </IonPage>
  );
};

export default HomePage;
