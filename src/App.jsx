import { createContext, useState } from 'react';
import './App.css';
import  React from "react";
import FileForm from './Components/FileForm';
import LatestAvatar from './Components/LatestAvatar';
import CloudinaryConfigProvider from './cloudinaryConfig';

export const AppContext = createContext(null);

function App() {
  const [latestImage, setLatestImage] = useState(AppContext)

  return (
    <CloudinaryConfigProvider>
      <AppContext.Provider value={{ latestImage, setLatestImage}}>
        <div className="App">
          <FileForm />
          <LatestAvatar />
        </div>
      </AppContext.Provider>
    </CloudinaryConfigProvider>
  );
}

export default App;
