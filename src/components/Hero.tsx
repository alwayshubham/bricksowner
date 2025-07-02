import Contact from "./Contact";


export default function Hero() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage: `url('/brick-wall.jpg')`, // Make sure to place this image in public/brick-wall.jpg
      }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-red-800">Brick Sales Dashboard</h1>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <KPI title="Total Bricks Sold" value="1,24,000" />
          <KPI title="Orders" value="320" />
          <KPI title="Clients" value="210" />
          <KPI title="Revenue" value="₹85,000" />
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded p-4 shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Recent Orders</h2>
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="py-2 px-4">Order ID</th>
                <th className="py-2 px-4">Client</th>
                <th className="py-2 px-4">Quantity</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">#BRK1024</td>
                <td className="py-2 px-4">John Construction</td>
                <td className="py-2 px-4">4,000</td>
                <td className="py-2 px-4 text-green-700 font-medium">Delivered</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">#BRK1025</td>
                <td className="py-2 px-4">SkyBuild Ltd</td>
                <td className="py-2 px-4">2,500</td>
                <td className="py-2 px-4 text-yellow-700 font-medium">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Contact Section */}
       
       <Contact/>
      </div>
    </div>
  );
}

function KPI({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-xl font-bold text-red-700">{value}</p>
    </div>
  );
}
