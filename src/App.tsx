import {
  IonApp,
  IonIcon,
  IonLabel,
  IonLoading,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';

import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Switch } from 'react-router-dom';



import TodoPage from './components/TodoPage';
import CalenderPage from './components/CalenderPage';
import SettingPage from './components/SettingPage';
import { statsChart, listCircle ,calendar, ellipsisHorizontalCircle } from 'ionicons/icons';


const App: React.FC = () => {
 
  return (
    <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={TodoPage} exact={true} />
          <Route path="/calendar" component={CalenderPage} exact={true} />
          <Route path="/setting" component={SettingPage} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/home">
            <IonIcon icon={listCircle} />
            <IonLabel>ToDo List</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/calendar">
            <IonIcon icon={statsChart} />
            <IonLabel>Status</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/calendar">
            <IonIcon icon={calendar} />
            <IonLabel>Calendar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/setting">
            <IonIcon icon={ellipsisHorizontalCircle} />
            <IonLabel>Setting</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);
  }
export default App;
