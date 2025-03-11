import Breadcrumb from "./components/Breadcrumb/Breadcrumb.jsx";
import EndContent from "./components/EndContent/EndContent.jsx";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900">
      <Header />
      <Breadcrumb />
      <Sidebar />
      <Dashboard />
      <EndContent />
    </div>
  );
}

export default App;
