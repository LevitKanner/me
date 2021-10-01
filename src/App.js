import {BrowserRouter as Router} from "react-router-dom";
import {Avatar} from "./components/Avatar";
import {About} from "./components/About";
import {Navbar} from "./components/Navbar";
import {TopNav} from "./components/TopNav";
import {TechStack} from "./components/TechStack";
import {Contact} from "./components/Contact";
import {useState} from "react";

function App() {
    const [showingMessageBox, setShowingMessageBox] = useState(false);
    return (
        <Router>
            <div className="w-screen min-h-screen bg-black text-white font-lora">
                <div className="max-w-7xl mx-auto">
                    <TopNav toggleMessageBox={() => setShowingMessageBox(true)}/>
                    <div className="relative">
                        <div className="flex flex-col lg:flex-row md:px-12">
                            <div className="px-4 pt-12 md:px-12 lg:px-2">
                                <Avatar src={'animoji.jpeg'}/>
                            </div>

                            <div className="w-full px-6 py-24 md:px-12 lg:w-2/3 lg:px-6">
                                <About/>
                            </div>
                        </div>
                        <TechStack/>
                        <Navbar/>

                        {showingMessageBox && <Contact hideForm={() => setShowingMessageBox(false)}/>}
                    </div>

                </div>
            </div>
        </Router>
    );
}

export default App;
