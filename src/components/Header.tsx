import React from 'react';
import { BellIcon, UserIcon, SearchIcon } from 'lucide-react';
const Header = () => {
  return <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <div className="flex items-center w-1/3">
        <div className="relative w-full max-w-md">
          <input type="text" placeholder="Поиск..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          <SearchIcon className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600 hover:text-gray-900 focus:outline-none">
          <BellIcon size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center">
          <span className="mr-2 text-sm font-medium text-gray-700">
            Администратор
          </span>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <UserIcon size={16} className="text-gray-600" />
          </div>
        </div>
      </div>
    </header>;
};
export default Header;