import useFetch from "../../../hooks/useFetch.js";
import dashboardService from "../../../services/DashboardService.js";
import DashboardCounter from "./DashboardCounter.jsx";
import DashboardCounterSkeleton from "./DashboardCounterSkeleton.jsx";

function Dashboard() {
  const [counts, loading] = useFetch(
    dashboardService.getCounter.bind(dashboardService)
  );

  return (
    <>
      <div className="max-w-[85rem] mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {loading ? (
            <DashboardCounterSkeleton />
          ) : (
            <DashboardCounter counts={counts} />
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
