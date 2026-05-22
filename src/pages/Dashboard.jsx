import DashboardLayout from "../layouts/DashboardLayout";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function Dashboard() {
  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      <ExpenseForm />

      <ExpenseList />

    </DashboardLayout>
  );
}

export default Dashboard;