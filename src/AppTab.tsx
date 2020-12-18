import {IonTabBar, IonLabel,IonTabButton,IonTabs,IonIcon,IonRouterOutlet} from '@ionic/react';

  import React from 'react';
  import {  home as homeIcon, barChart, cog, hourglass } from 'ionicons/icons';
  import { Redirect, Route } from 'react-router-dom';
  import Homepage from './components/dashboard/Homepage';
  import SettingsPage from './components/settings/SettingsPage';
  import EntryPage from './components/pages/EntryPage';
  import AddEntryPage from './components/pages/AddEntryPage';
  import { useAuth } from './firebase/auth';
  import ProgressReport from './components/pages/ProgressReport';
  
  
  const AppTab: React.FC = () => {
    const { loggedIn } = useAuth();
    if(!loggedIn){
      return <Redirect to="/login"/>
    }
    
    return (
          <IonTabs>    
            <IonRouterOutlet>

        <Route exact path="/my/home">
          <Homepage />
        </Route>
  
        <Route exact path="/my/entries">
          <Homepage />
        </Route>

        <Route path="/my/entry/:id" component={EntryPage} exact={true} />

        <Route path="/my/addentry/add" component={AddEntryPage} exact={true} />

        <Route path="/my/setting" component={SettingsPage}> 
          <SettingsPage />
        </Route>

  
     
  
        <Route path="/my/progressreport" component={ProgressReport}> 
          <ProgressReport />
        </Route>

        <Route path="/" render={() => <Redirect to ="/home" />} exact={true} />
        
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom" >
  
          <IonTabButton tab="home" href="/my/home" >
            <IonIcon icon={homeIcon} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
  
        
  
          <IonTabButton tab="tab3" href="/my/TimeTracker">
            <IonIcon icon={hourglass} />
            <IonLabel>Tracker</IonLabel>
          </IonTabButton>
  
         {/*  <IonTabButton tab="tab4" href="/my/addentry/add">
            <IonIcon icon={peopleCircle} />
            <IonLabel>Add Entry</IonLabel>
          </IonTabButton> 
          href="/my/progressreport/"
          */}
          
          <IonTabButton tab="progressreport" >
            <IonIcon icon={barChart} />
            <IonLabel>Progress Report</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab2" href="/my/setting">
            <IonIcon icon={cog} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton> 

          </IonTabBar>
          </IonTabs>
    );
  };
  
  export default AppTab;
  