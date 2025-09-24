import Header from './Header';
import Footer from './Footer';
import StatsCard from './Stats_Card';
import ProjectCard from './ProjectCard';
import './index.css'


function App() {

  return (
    <> 
      <Header />

      <StatsCard title="TOTAL TASKS" 
                number={4} 
                description="All tasks in the system" 
                color="red"/>
      <StatsCard title="ACTIVE PROJECTS" 
                number={4} 
                description="Currently running projects" 
                color="green"/>
      <StatsCard title="TEAM MEMBERS" 
                number={4} 
                description="People in your team" 
                color="orange"/>
      <StatsCard title="NOTIFICATIONS" 
                number={3} 
                description="Recent updates" 
                color="gray"/>

      <ProjectCard title="Project Alpha"
                   description="This is the first project."/>
      
      <Footer /> 
    </>
  );
}

export default App
