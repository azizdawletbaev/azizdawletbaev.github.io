import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboardIcon, UsersIcon, PhoneCallIcon, HistoryIcon, CheckSquareIcon, SettingsIcon } from 'lucide-react';
const Sidebar = () => {
  const navItems = [{
    name: 'Дашборд',
    path: '/',
    icon: <LayoutDashboardIcon size={20} />
  }, {
    name: 'Клиенты',
    path: '/clients',
    icon: <UsersIcon size={20} />
  }, {
    name: 'Сценарии звонков',
    path: '/call-scenarios',
    icon: <PhoneCallIcon size={20} />
  }, {
    name: 'История звонков',
    path: '/call-history',
    icon: <HistoryIcon size={20} />
  }, {
    name: 'Задачи',
    path: '/tasks',
    icon: <CheckSquareIcon size={20} />
  }, {
    name: 'Настройки',
    path: '/settings',
    icon: <SettingsIcon size={20} />
  }];
  return <aside className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-blue-600">CRM + ИИ-обзвон</h2>
      </div>
      <nav className="mt-6">
        <ul>
          {navItems.map((item, index) => <li key={index} className="px-2 py-1">
              <NavLink to={item.path} className={({
            isActive
          }) => `flex items-center px-4 py-3 text-gray-700 rounded-lg ${isActive ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}>
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>)}
        </ul>
      </nav>
    </aside>;
};
export default Sidebar;