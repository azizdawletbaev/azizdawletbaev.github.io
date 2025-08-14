import React from 'react';
import { SearchIcon, FilterIcon, CheckIcon, ClockIcon, UserIcon, PhoneIcon, CalendarIcon, CheckCircleIcon, AlertCircleIcon, ChevronLeftIcon, ChevronRightIcon, ClockIcon as WaitingIcon } from 'lucide-react';
const Tasks = () => {
  const tasks = [{
    id: 1,
    title: 'Связаться с ООО «Альфа»',
    description: 'Помощь с подготовкой отчёта',
    client: 'ООО «Альфа»',
    contact: 'Иванов Иван',
    phone: '+7 (123) 456-7890',
    created: '10.05.2023, 10:15',
    deadline: '10.05.2023, 18:00',
    priority: 'high',
    status: 'monitored',
    assignee: 'Сергей Петров'
  }, {
    id: 2,
    title: 'Подтвердить участие ИП Смирнова',
    description: 'Мероприятие 15.06.2023',
    client: 'ИП Смирнов',
    contact: 'Смирнов Алексей',
    phone: '+7 (123) 456-7891',
    created: '10.05.2023, 09:45',
    deadline: '11.05.2023, 12:00',
    priority: 'medium',
    status: 'monitored',
    assignee: 'Елена Иванова'
  }, {
    id: 3,
    title: 'Перезвонить в ЗАО «Бета»',
    description: 'Обсудить обновление системы',
    client: 'ЗАО «Бета»',
    contact: 'Петрова Елена',
    phone: '+7 (123) 456-7892',
    created: '10.05.2023, 09:30',
    deadline: '11.05.2023, 10:00',
    priority: 'medium',
    status: 'waiting',
    assignee: 'Сергей Петров'
  }, {
    id: 4,
    title: 'Связаться с ИП Ивановым',
    description: 'Вопрос по сервисному обслуживанию',
    client: 'ИП Иванов',
    contact: 'Иванов Сергей',
    phone: '+7 (123) 456-7894',
    created: '10.05.2023, 08:50',
    deadline: '10.05.2023, 15:00',
    priority: 'high',
    status: 'monitored',
    assignee: 'Анна Сидорова'
  }, {
    id: 5,
    title: 'Уточнить детали оплаты у ООО «Гамма»',
    description: 'Клиент сообщил, что счёт уже оплачен',
    client: 'ООО «Гамма»',
    contact: 'Сидоров Павел',
    phone: '+7 (123) 456-7893',
    created: '10.05.2023, 09:15',
    deadline: '10.05.2023, 14:00',
    priority: 'low',
    status: 'resolved',
    assignee: 'Елена Иванова',
    completedAt: '10.05.2023, 11:30'
  }, {
    id: 6,
    title: 'Связаться с ЗАО «Эпсилон»',
    description: 'Уточнить причины отказа от участия в мероприятии',
    client: 'ЗАО «Эпсилон»',
    contact: 'Новиков Дмитрий',
    phone: '+7 (123) 456-7896',
    created: '09.05.2023, 14:15',
    deadline: '10.05.2023, 12:00',
    priority: 'medium',
    status: 'resolved',
    assignee: 'Анна Сидорова',
    completedAt: '10.05.2023, 10:45'
  }];
  const taskDetails = tasks[0];
  const managers = [{
    id: 1,
    name: 'Сергей Петров',
    position: 'Старший менеджер',
    tasks: 5,
    completed: 12
  }, {
    id: 2,
    name: 'Елена Иванова',
    position: 'Менеджер',
    tasks: 3,
    completed: 8
  }, {
    id: 3,
    name: 'Анна Сидорова',
    position: 'Менеджер',
    tasks: 2,
    completed: 10
  }];
  return <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Задачи</h1>
          <p className="text-gray-600">Управление задачами для менеджеров</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="p-4 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="relative w-full sm:w-auto sm:min-w-[300px]">
                <input type="text" placeholder="Поиск задач..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <SearchIcon className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700">
                  <FilterIcon size={16} className="mr-2" />
                  Фильтры
                </button>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white">
                  <option value="">Все задачи</option>
                  <option value="monitored">На контроле</option>
                  <option value="resolved">Решены</option>
                  <option value="waiting">В ожидании</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Задача
                    </th>
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Клиент
                    </th>
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Срок
                    </th>
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Приоритет
                    </th>
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Ответственный
                    </th>
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Статус
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map(task => <tr key={task.id} className="border-b hover:bg-gray-50 cursor-pointer">
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium">{task.title}</p>
                          <p className="text-xs text-gray-500">
                            {task.description}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-3">{task.client}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <ClockIcon size={14} className="mr-1 text-gray-400" />
                          <span>{task.deadline.split(', ')[0]}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${task.priority === 'high' ? 'bg-red-100 text-red-800' : task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                          {task.priority === 'high' ? 'Высокий' : task.priority === 'medium' ? 'Средний' : 'Низкий'}
                        </span>
                      </td>
                      <td className="px-4 py-3">{task.assignee}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          {task.status === 'resolved' ? <CheckCircleIcon size={16} className="text-green-500 mr-1" /> : task.status === 'monitored' ? <AlertCircleIcon size={16} className="text-blue-500 mr-1" /> : <WaitingIcon size={16} className="text-yellow-500 mr-1" />}
                          <span className={`text-xs ${task.status === 'resolved' ? 'text-green-700' : task.status === 'monitored' ? 'text-blue-700' : 'text-yellow-700'}`}>
                            {task.status === 'resolved' ? 'Решен' : task.status === 'monitored' ? 'На контроле' : 'В ожидании'}
                          </span>
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            <div className="p-4 flex items-center justify-between border-t">
              <div className="text-sm text-gray-500">
                Показано 1-6 из 24 задач
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
        </div>
        <div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-800">Детали задачи</h3>
            </div>
            <div className="p-4">
              {taskDetails && <div>
                  <div className="mb-4 pb-4 border-b">
                    <h4 className="font-medium text-gray-800">
                      {taskDetails.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {taskDetails.description}
                    </p>
                  </div>
                  <div className="space-y-3 mb-4 pb-4 border-b">
                    <div className="flex items-center">
                      <UserIcon size={16} className="text-gray-400 mr-3" />
                      <div>
                        <p className="text-xs text-gray-500">Клиент</p>
                        <p className="text-sm">
                          {taskDetails.client} ({taskDetails.contact})
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <PhoneIcon size={16} className="text-gray-400 mr-3" />
                      <div>
                        <p className="text-xs text-gray-500">Телефон</p>
                        <p className="text-sm">{taskDetails.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon size={16} className="text-gray-400 mr-3" />
                      <div>
                        <p className="text-xs text-gray-500">Срок выполнения</p>
                        <p className="text-sm">{taskDetails.deadline}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon size={16} className="text-gray-400 mr-3" />
                      <div>
                        <p className="text-xs text-gray-500">Создано</p>
                        <p className="text-sm">{taskDetails.created}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center">
                      <CheckIcon size={16} className="mr-2" />
                      Отметить как решенную
                    </button>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      История задачи
                    </h4>
                    <div className="space-y-3">
                      <div className="text-sm">
                        <p className="text-gray-500">10.05.2023, 10:15</p>
                        <p>
                          Задача создана автоматически по результатам звонка
                        </p>
                      </div>
                      <div className="text-sm">
                        <p className="text-gray-500">10.05.2023, 10:20</p>
                        <p>Назначена менеджеру Сергей Петров</p>
                      </div>
                    </div>
                  </div>
                </div>}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-800">Менеджеры</h3>
            </div>
            <div className="p-4">
              {managers.map((manager, index) => <div key={manager.id} className={`flex items-center justify-between ${index !== managers.length - 1 ? 'pb-3 mb-3 border-b' : ''}`}>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                      <UserIcon size={16} className="text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">{manager.name}</p>
                      <p className="text-xs text-gray-500">
                        {manager.position}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{manager.tasks} задач</p>
                    <p className="text-xs text-gray-500">
                      {manager.completed} выполнено
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Tasks;