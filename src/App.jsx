import { createContext, useState } from 'react';
import './App.css';
import  React from "react";
import FileForm from './Components/FileForm';
import LatestAvatar from './Components/LatestAvatar';

export const AppContext = createContext(null);

function App() {
  const [latestUser, setLatestUser] = useState(AppContext)

  return (
    <AppContext.Provider value={{ latestUser, setLatestUser}}>
    <div className="App">
      <FileForm />
      <LatestAvatar />
    </div>
    </AppContext.Provider>
  );
}

export default App;
