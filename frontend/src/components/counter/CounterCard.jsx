import CounterTooltip from "./CounterTooltip.jsx";

function CounterCard({ item }) {
  return (
    <>
      <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral dark:border-neutral">
        <div className="p-4 md:p-5 flex gap-x-4">
          <div className="shrink-0 flex justify-center items-center size-11 bg-gray-100 rounded-lg dark:bg-neutral">
            <svg
              className="shrink-0 size-5 text-gray-600 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>

          <div className="grow">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase text-gray-500 dark:text-white">
                {item.title}
              </p>
              <CounterTooltip>{item.tooltip}</CounterTooltip>
            </div>
            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                {item.count}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CounterCard;
