// src/components/layout/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { CalendarIcon, UsersIcon, ClipboardListIcon, CubeIcon, CashIcon } from "@heroicons/react/24/outline";

const SectionTitle = ({ children }) => (
  <p className="mt-6 mb-2 px-3 text-xs font-semibold text-gray-500 uppercase">{children}</p>
);

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", path: "/", icon: null },
    {
      name: "Events",
      children: [
        { name: "Calendar", path: "/events/calendar" },
        { name: "Client Records", path: "/events/clients" },
        { name: "Task Manager", path: "/events/tasks" },
        { name: "Venue Management", path: "/events/venues" },
        { name: "Staff Scheduling", path: "/events/staff" },
        { name: "QR Codes", path: "/events/qr" },
      ]
    },
    {
      name: "Catering",
      children: [
        { name: "Menu & Recipes", path: "/catering/menu" },
        { name: "Dietary Notes", path: "/catering/dietary" },
        { name: "Kitchen Prep Sheet", path: "/catering/prep" },
        { name: "Order Checklist", path: "/catering/checklist" },
      ]
    },
    {
      name: "Inventory",
      children: [
        { name: "Stocks", path: "/inventory/stocks" },
        { name: "Low Stock Alerts", path: "/inventory/alerts" },
        { name: "Purchase Orders", path: "/inventory/po" },
        { name: "Equipment Location", path: "/inventory/equipment" },
      ]
    },
    {
      name: "Finance",
      children: [
        { name: "Quotes", path: "/finance/quotes" },
        { name: "Invoices", path: "/finance/invoices" },
        { name: "Budget vs Actual", path: "/finance/budget" },
        { name: "Profit Reports", path: "/finance/profit" },
      ]
    }
  ];

  return (
    <aside className="w-72 bg-white border-r min-h-screen p-4 hidden md:block">
      <div className="mb-6 px-2">
        <h1 className="text-2xl font-bold">Catering System</h1>
        <p className="text-sm text-gray-500">Admin UI</p>
      </div>

      <nav className="text-sm">
        {menu.map((group, i) => (
          <div key={i}>
            <SectionTitle>{group.name}</SectionTitle>

            {group.children ? (
              <div className="space-y-1">
                {group.children.map((item, j) => (
                  <NavLink
                    key={j}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 ${isActive ? "bg-gray-100 font-medium" : "text-gray-700"}`
                    }
                  >
                    {/* simple dot icon */}
                    <span className="w-2 h-2 rounded-full bg-gray-400" />
                    <span>{item.name}</span>
                  </NavLink>
                ))}
              </div>
            ) : (
              <NavLink
                to={group.path || "/"}
                className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
              >
                {group.name}
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
