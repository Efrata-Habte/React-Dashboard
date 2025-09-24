import Header from './Header';
import Footer from './Footer';
import StatsCard from './Stats_Card';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
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
                number={3} 
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

      <SectionHeader header="" />

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

      <SectionHeader header="Recent Tasks" />

      <ProjectCard width="600px" title="Design Homepage" 
                   description="Create wireframes and mockups for the new homepage layout"
                    member="Mike Johnson"
                    date="1/30/2024"
                   />
      <ProjectCard width="600px" title="Setup Database"
                   description="Configure PostgreSQL database and create initial schemas"
                    member="Sarah Chen"
                    date="1/30/2024"
                   />
      <ProjectCard width="600px" title="Write Documentation"
                    description="Document API endpoints and component usage"
                    member="Alex Rivera"
                    date="1/30/2024"
                   />
      <ProjectCard width="600px" title="Implement Authentication"
                   description="Add user login and registration functionality"
                    member="Emma Davis"
                    date="1/30/2024"
                   />

      <Footer /> 
    </>
  );
}

export default App
