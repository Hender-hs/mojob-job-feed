import { JobCard } from './components/jobCard'
import { JobFilterPerPage } from './components/JobFilterPerPage'
import { JobFilterPosition } from './components/jobFilterPosition'
import { PopUpJobsPositionsList } from './components/popUpJobsPositionsList'
import { Routes } from './routes'

export const App = () => (
  <div style={{'width': '100vw', 'height': '100vh', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-evenly', 'alignItems': 'center'}}>
    <Routes />
  </div>
)
