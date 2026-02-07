import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SharedDashboardPage } from "@shared";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedDashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
