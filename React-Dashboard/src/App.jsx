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

      <ProjectCard title="E-commerce Platform"
                   description="Building a modern online shopping experience"
                    member="8 members"
                    date="2/15/2024"
                   />
      <ProjectCard title="Mbile App"
                   description="Cross-platform mobile application development"
                    member="5 members"
                    date="3/1/2024"
                   />
      <ProjectCard title="Analytics Dashboard"
                   description="Real-time data visualization and reporting"
                    member="3 members"
                    date="1/30/2024"
                   />
      
      <Footer /> 
    </>
  );
}

export default App
