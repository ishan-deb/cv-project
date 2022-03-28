import './App.css';
import EduInfoForm from './components/EduInfoForm';
import GenInfoForm from './components/GenInfoForm';
import WorkExpForm from './components/WorkExpForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1>CV CV CV</h1>
      </header>

      <GenInfoForm />
      <EduInfoForm />
      <WorkExpForm />
    
    </div>
  );
}

export default App;
