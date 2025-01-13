import React from "react";
import Header from "./components/Header";
import Camera from "./components/Camera";
import ActionButtons from "./components/ActionButtons";
import VoiceInterface from "./components/VoiceInterface"; 
import InstallButton from "./components/InstallButton";
import "./App.css";

const App = () => {
    return (
        <div className="container">
            <header className="header">
                <Header />
            </header>
            <section className="camera-section">
                <Camera />
                
            </section>
            <section className="buttons-section">
                <ActionButtons />
                <InstallButton />
            </section>
            <div>
                    <VoiceInterface />
                </div>
        </div>
    );
};

export default App;
