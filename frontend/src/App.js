import React from "react";
import RiskDashboard from "./components/RiskDashboard";
import StakingPanel from "./components/StakingPanel";

function App() {
    return (
        <div>
            <header>
                <h1>GeoAlpha Protocol</h1>
            </header>
            <main>
                <RiskDashboard />
                <StakingPanel />
            </main>
        </div>
    );
}

export default App;
