import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';

import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';



import DashBoard from './components/DashBoard';
import AddTask from './components/AddTask';
import SettingPage from './components/SettingPage';
import { statsChart, listCircle ,calendar, ellipsisHorizontalCircle } from 'ionicons/icons';


const App: React.FC = () => {
 
  return (
    <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={DashBoard} exact={true} />
          <Route path="/AddTask" component={AddTask} exact={true} />
          <Route path="/setting" component={SettingPage} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/home">
            <IonIcon icon={listCircle} />
            <IonLabel>DashBoard</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/Task">
            <IonIcon icon={statsChart} />
            <IonLabel>Task</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/AddTask">
            <IonIcon icon={calendar} />
            <IonLabel>Add Task</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/setting">
            <IonIcon icon={ellipsisHorizontalCircle} />
            <IonLabel>Team</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/setting">
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
