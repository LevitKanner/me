import {BrowserRouter as Router} from "react-router-dom";
import {Avatar} from "./components/Avatar";
import {About} from "./components/About";
import {Navbar} from "./components/Navbar";
import {TopNav} from "./components/TopNav";
import {TechStack} from "./components/TechStack";

function App() {
    return (
        <Router>
            <div className="w-screen h-screen">
                <div className="max-w-7xl mx-auto">
                    <TopNav/>
                    <div className="flex flex-col lg:flex-row">
                        <div className="pt-12 md:px-12 lg:px-2">
                            <Avatar src={'animoji.jpeg'}/>
                        </div>

                        <div className="w-full px-6 py-24 md:px-12 lg:w-2/3 lg:px-6">
                            <About/>
                        </div>
                    </div>
                    <TechStack/>
                    <Navbar/>
                </div>
            </div>
        </Router>
    );
}

export default App;
