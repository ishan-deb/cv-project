import { useState } from 'react';
import './App.css';
import EduInfoForm from './components/EduInfoForm';
import GenInfoForm from './components/GenInfoForm';
import WorkExpForm from './components/WorkExpForm';

function App() {
  const [showGenForm, setShowGenForm] = useState(true)
  const [showEduForm, setShowEduForm] = useState(true)
  const [showWorkForm, setShowWorkForm] = useState(true)

  return (
    <div className="App">
      <div className="build">
        <header>
          <h1>Build CV</h1>
        </header>

        <GenInfoForm />
        <EduInfoForm />
        <WorkExpForm />
      </div>
        
      <div className="preview">
      <header>
          <h1>Preview</h1>
        </header>
      </div>
      
    </div>
  );
}

export default App;
