'use client';

export default function BusinessDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Business Dashboard</h1>
          <p className="text-gray-500">Welcome back! Here s what s happening today.</p>
        </header>

        {/* KPI Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPI title="Revenue" value="₹1,50,000" />
          <KPI title="New Clients" value="58" />
          <KPI title="Pending Invoices" value="12" />
          <KPI title="Site Visits" value="3,200" />
        </section>

        {/* Main Content */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart Placeholder */}
          <div className="col-span-2 bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
            <div className="h-64 flex items-center justify-center text-gray-400">
              {/* Replace with real chart */}
              [Chart goes here]
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-4 text-gray-700">
              <li>✅ Invoice #1256 paid by StarTech Ltd.</li>
              <li>📦 New order placed by Builders Co.</li>
              <li>📞 Meeting scheduled with client Zed Corp.</li>
              <li>💬 Support ticket resolved for John.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

function KPI({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <p className="text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-indigo-600">{value}</p>
    </div>
  );
}
