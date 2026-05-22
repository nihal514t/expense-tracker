import DashboardLayout from "../layouts/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-gray-500 mb-2">
            Total Balance
          </h2>

          <p className="text-3xl font-bold text-green-600">
            ₹25,000
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-gray-500 mb-2">
            Total Income
          </h2>

          <p className="text-3xl font-bold text-blue-600">
            ₹40,000
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-gray-500 mb-2">
            Total Expense
          </h2>

          <p className="text-3xl font-bold text-red-600">
            ₹15,000
          </p>
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;