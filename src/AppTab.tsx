import {
  IonTabBar,
  IonLabel,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonRouterOutlet,
} from "@ionic/react";

import React from "react";
import { homeOutline , barChart, walletOutline, cardOutline, personOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";
import Homepage from "./components/dashboard/Homepage";
import SettingsPage from "./components/settings/SettingsPage";
import { useAuth } from "./firebase/auth";
import ProgressReport from "./components/pages/ProgressReport";

const AppTab: React.FC = () => {
  const { loggedIn } = useAuth();
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/my/home">
          <Homepage />
        </Route>

        <Route path="/my/Account" component={SettingsPage}>
          <SettingsPage />
        </Route>

        <Route path="/my/progressreport" component={ProgressReport}>
          <ProgressReport />
        </Route>

        <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/my/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="expenses" href="/my/expenses">
          <IonIcon icon={walletOutline} />
          <IonLabel>Expenses</IonLabel>
        </IonTabButton>

        <IonTabButton tab="Income" href="/my/income">
          <IonIcon icon={cardOutline} />
          <IonLabel>Income</IonLabel>
        </IonTabButton>

        <IonTabButton tab="Account" href="/my/Account">
          <IonIcon icon={personOutline} />
          <IonLabel>Account</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppTab;
