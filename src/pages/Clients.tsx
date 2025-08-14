import React, { useState } from 'react';
import { PlusIcon, SearchIcon, FilterIcon, PhoneCallIcon, MoreHorizontalIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const Clients = () => {
  const [selectedClients, setSelectedClients] = useState<number[]>([]);
  const clients = [{
    id: 1,
    name: 'ООО «Альфа»',
    contact: 'Иванов Иван',
    phone: '+7 (123) 456-7890',
    email: 'info@alpha.ru',
    lastCall: '10.05.2023',
    status: 'active'
  }, {
    id: 2,
    name: 'ИП Смирнов',
    contact: 'Смирнов Алексей',
    phone: '+7 (123) 456-7891',
    email: 'smirnov@mail.ru',
    lastCall: '15.05.2023',
    status: 'active'
  }, {
    id: 3,
    name: 'ЗАО «Бета»',
    contact: 'Петрова Елена',
    phone: '+7 (123) 456-7892',
    email: 'info@beta.ru',
    lastCall: '08.05.2023',
    status: 'inactive'
  }, {
    id: 4,
    name: 'ООО «Гамма»',
    contact: 'Сидоров Павел',
    phone: '+7 (123) 456-7893',
    email: 'info@gamma.ru',
    lastCall: '12.05.2023',
    status: 'active'
  }, {
    id: 5,
    name: 'ИП Иванов',
    contact: 'Иванов Сергей',
    phone: '+7 (123) 456-7894',
    email: 'ivanov@mail.ru',
    lastCall: '05.05.2023',
    status: 'active'
  }, {
    id: 6,
    name: 'ООО «Дельта»',
    contact: 'Козлова Мария',
    phone: '+7 (123) 456-7895',
    email: 'info@delta.ru',
    lastCall: '01.05.2023',
    status: 'inactive'
  }, {
    id: 7,
    name: 'ЗАО «Эпсилон»',
    contact: 'Новиков Дмитрий',
    phone: '+7 (123) 456-7896',
    email: 'info@epsilon.ru',
    lastCall: '03.05.2023',
    status: 'active'
  }];
  const toggleSelectClient = (id: number) => {
    if (selectedClients.includes(id)) {
      setSelectedClients(selectedClients.filter(clientId => clientId !== id));
    } else {
      setSelectedClients([...selectedClients, id]);
    }
  };
  const toggleSelectAll = () => {
    if (selectedClients.length === clients.length) {
      setSelectedClients([]);
    } else {
      setSelectedClients(clients.map(client => client.id));
    }
  };
  return <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Клиенты</h1>
          <p className="text-gray-600">Управление клиентской базой</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          <PlusIcon size={18} className="mr-2" />
          Добавить клиента
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-4 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative w-full sm:w-auto sm:min-w-[300px]">
            <input type="text" placeholder="Поиск клиентов..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <SearchIcon className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700">
              <FilterIcon size={16} className="mr-2" />
              Фильтры
            </button>
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700" disabled={selectedClients.length === 0}>
              <PhoneCallIcon size={16} className="mr-2" />
              Начать обзвон
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left">
                  <input type="checkbox" checked={selectedClients.length === clients.length} onChange={toggleSelectAll} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-medium">
                  Название
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-medium">
                  Контактное лицо
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-medium">
                  Телефон
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-medium">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-medium">
                  Последний звонок
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-medium">
                  Статус
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-medium">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => <tr key={client.id} className="border-b">
                  <td className="px-4 py-3">
                    <input type="checkbox" checked={selectedClients.includes(client.id)} onChange={() => toggleSelectClient(client.id)} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-3 font-medium">{client.name}</td>
                  <td className="px-4 py-3">{client.contact}</td>
                  <td className="px-4 py-3">{client.phone}</td>
                  <td className="px-4 py-3">{client.email}</td>
                  <td className="px-4 py-3">{client.lastCall}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${client.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {client.status === 'active' ? 'Активен' : 'Неактивен'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <button className="p-1 text-gray-500 hover:text-blue-600">
                        <PhoneCallIcon size={16} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-gray-700">
                        <MoreHorizontalIcon size={16} />
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="p-4 flex items-center justify-between border-t">
          <div className="text-sm text-gray-500">
            Показано 1-7 из 42 клиентов
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg border text-gray-500 hover:bg-gray-50">
              <ChevronLeftIcon size={16} />
            </button>
            <button className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              1
            </button>
            <button className="w-8 h-8 rounded-lg border text-gray-700 flex items-center justify-center hover:bg-gray-50">
              2
            </button>
            <button className="w-8 h-8 rounded-lg border text-gray-700 flex items-center justify-center hover:bg-gray-50">
              3
            </button>
            <button className="p-2 rounded-lg border text-gray-500 hover:bg-gray-50">
              <ChevronRightIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default Clients;