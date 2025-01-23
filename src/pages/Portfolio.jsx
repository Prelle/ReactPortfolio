import Card from '../components/ProjectCard';

import weather from '../assets/weather.png';
import pulse from '../assets/pulse.png';
import readme from '../assets/readme_gen.png';
import tracker from '../assets/employeetracker.png';

export default function Portfolio() {
    return (
        <>
            <h2>Sample Portfolio</h2>
            <div className="portfolio">
                <Card
                    project="Weather Dashboard"
                    description="Search by city for current and future weather conditions."
                    image={weather}
                    url="https://github.com/Prelle/WeatherDashboard"
                />
                <Card
                    project="projectPulse"
                    description="Track project completion."
                    image={pulse}
                    url="https://github.com/Prelle/projectPulse"
                />
                <Card
                    project="README Generator"
                    description="Generate professional README files for your projects."
                    image={readme}
                    url="https://github.com/Prelle/ReadmeGenerator"
                />
                <Card
                    project="Employee Tracker"
                    description="Manage your employee database"
                    image={tracker}
                    url="https://github.com/Prelle/EmployeeTracker"
                />
            </div>
        </>
    )
}