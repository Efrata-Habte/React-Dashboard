import Header from './Header';
import Footer from './Footer';
import StatsCard from './Stats_Card';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
import TeamMember from './TeamMember';
import RecentTask from './RecentTask';
import NotificationItem from './NotificationItem';
import ActivityItem from './ActivityItem';
import './index.css'

function App() {

  return (
    <> 
      <Header />

      <div className="dashboard-container">
        {/* Main Content */}
        <div className="main-content">
          {/* Stats Section */}
          <div className="stats-section">
            <StatsCard title="TOTAL TASKS" 
                      number={4} 
                      description="All tasks in the system" 
                      color="#3B82F6"/>
            <StatsCard title="ACTIVE PROJECTS" 
                      number={3} 
                      description="Currently running projects" 
                      color="#10B981"/>
            <StatsCard title="TEAM MEMBERS" 
                      number={4} 
                      description="People in your team" 
                      color="#F59E0B"/>
            <StatsCard title="NOTIFICATIONS" 
                      number={3} 
                      description="Recent updates" 
                      color="#6B7280"/>
          </div>

          {/* Projects Section - Using existing ProjectCard */}
          <div className="projects-section">
            <ProjectCard 
              title="E-commerce Platform"
              description="Building a modern online shopping experience"
              member="8 members"
              date="2/15/2024"
            />
            <ProjectCard 
              title="Mobile App"
              description="Cross-platform mobile application development"
              member="5 members"
              date="3/1/2024"
            />
            <ProjectCard 
              title="Analytics Dashboard"
              description="Real-time data visualization and reporting"
              member="3 members"
              date="1/30/2024"
            />
          </div>

          {/* Recent Tasks Section - Using new RecentTask component */}
          <SectionHeader header="Recent Tasks" />
          <div className="recent-tasks-section">
            <RecentTask 
              width="95%"
              title="Design Homepage"
              description="Create wireframes and mockups for the new homepage layout"
              assignee="Sarah Chen"
              date="1/15/2024"
            />
            <RecentTask 
              width="95%"
              title="Setup Database"
              description="Configure PostgreSQL database and create initial schemas"
              assignee="Mike Johnson"
              date="1/20/2024"
            />
            <RecentTask 
              width="95%"
              title="Write Documentation"
              description="Document API endpoints and component usage"
              assignee="Alex Rivera"
              date="1/10/2024"
            />
            <RecentTask 
              width="95%"
              title="Implement Authentication"
              description="Add user login and registration functionality"
              assignee="Emma Davis"
              date="1/25/2024"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          {/* User Profile */}
          <div className="user-profile">
            <div className="avatar">JD</div>
            <div className="user-info">
              <h3>John Doe</h3>
              <p>Project Manager</p>
              <span>john@example.com</span>
            </div>
          </div>

          {/* Team Members */}
          <SectionHeader header="Team Members" />
          <div className="team-section">
            <TeamMember 
              name="Sarah Chen"
              role="UI/UX Designer"
              avatar="SC"
            />
            <TeamMember 
              name="Mike Johnson"
              role="Backend Developer"
              avatar="MJ"
            />
            <TeamMember 
              name="Alex Rivera"
              role="Technical Writer"
              avatar="AR"
            />
            <TeamMember 
              name="Emma Davis"
              role="Frontend Developer"
              avatar="ED"
            />
          </div>

          {/* Notifications */}
          <SectionHeader header="Notifications" />
          <div className="notifications-section">
            <NotificationItem 
              type="Task Completed"
              message="Documentation has been finished by Alex Rivera"
              time="2 hours ago"
            />
            <NotificationItem 
              type="Deadline Approaching"
              message="Homepage design is due in 3 days"
              time="4 hours ago"
            />
            <NotificationItem 
              type="New Team Member"
              message="Emma Davis joined the project"
              time="1 day ago"
            />
          </div>

          {/* Recent Activity */}
          <SectionHeader header="Recent Activity" />
          <div className="activity-section">
            <ActivityItem 
              action="Sarah Chen updated Homepage Design"
              time="30 minutes ago"
            />
            <ActivityItem 
              action="Mike Johnson commented on Database Setup"
              time="1 hour ago"
            />
            <ActivityItem 
              action="Alex Rivera completed API Documentation"
              time="2 hours ago"
            />
          </div>
        </div>
      </div>

      <Footer /> 
    </>
  );
}

export default App;