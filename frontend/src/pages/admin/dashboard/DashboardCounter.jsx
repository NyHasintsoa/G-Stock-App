import CounterCard from "../../../components/counter/CounterCard.jsx";

function DashboardCounter({ counts }) {
  return (
    <>
      <CounterCard
        item={{
          count: counts.productCount,
          title: "Produits",
          tooltip: "Nombre de produits Totales"
        }}
      />
      <CounterCard
        item={{
          count: counts.orderCount,
          title: "Commandes",
          tooltip: "Nombre de commandes Annuelles"
        }}
      />
      <CounterCard
        item={{
          count: counts.annualIncomes,
          title: "Revenues",
          tooltip: "Revenues annuelle"
        }}
      />
      <CounterCard
        item={{
          count: counts.userCount,
          title: "Utilisateurs",
          tooltip: "Nombre d'utilisateurs"
        }}
      />
    </>
  );
}

export default DashboardCounter;
