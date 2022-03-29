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

        <div className="form-buttons">
          <button onClick={() => {
            if (showGenForm) {
              setShowGenForm(false)
            } else {
              setShowGenForm(true)
            }
          }}> Gen Button</button>
          {showGenForm && <GenInfoForm />}

          <button onClick={() => {
            if (showEduForm) {
              setShowEduForm(false)
            } else {
              setShowEduForm(true)
            }
          }}> Edu Button</button>
          {showEduForm && <EduInfoForm />}

          <button onClick={() => {
            if (showWorkForm) {
              setShowWorkForm(false)
            } else {
              setShowWorkForm(true)
            }
          }}> Work Button</button>
          {showWorkForm && <WorkExpForm />}
        </div>
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
