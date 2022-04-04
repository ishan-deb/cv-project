//components
import EduInfoForm from '../components/EduInfoForm';
import GenInfoForm from '../components/GenInfoForm';
import WorkExpForm from '../components/WorkExpForm';

//styles
import './Build.css'

export default function Build() {
  return (
    <div className="build">
      <header>
        <h1>Build CV</h1>
      </header>

      <GenInfoForm />
      <EduInfoForm />
      <WorkExpForm />
    </div>
  )
}