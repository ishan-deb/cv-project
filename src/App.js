import { useState } from 'react';

//components
import Build from './containers/Build';
import Preview from './containers/Preview';

//styles
import './App.css';


function App() {
  return (
    <div className="App">
      <Build />
      <Preview />
    </div>
  );
}

export default App;
