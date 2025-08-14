import React from 'react';
import { PhoneCallIcon, CheckCircleIcon, AlertCircleIcon, ClockIcon, ArrowUpIcon, ArrowDownIcon, BarChartIcon, PieChartIcon, BuildingIcon, CalendarIcon } from 'lucide-react';
const Dashboard = () => {
  const stats = [{
    title: 'Всего звонков',
    value: '1,248',
    change: '+12%',
    isUp: true,
    icon: <PhoneCallIcon size={20} className="text-blue-500" />
  }, {
    title: 'Успешные звонки',
    value: '864',
    change: '+8%',
    isUp: true,
    icon: <CheckCircleIcon size={20} className="text-green-500" />
  }, {
    title: 'Требуют внимания',
    value: '128',
    change: '-5%',
    isUp: false,
    icon: <AlertCircleIcon size={20} className="text-red-500" />
  }, {
    title: 'Запланированные звонки',
    value: '256',
    change: '+15%',
    isUp: true,
    icon: <ClockIcon size={20} className="text-yellow-500" />
  }];
  const recentCalls = [{
    client: 'ООО «Альфа»',
    scenario: 'Напоминание об отчёте',
    result: 'Требуется помощь',
    time: '10:15',
    status: 'monitored'
  }, {
    client: 'ИП Смирнов',
    scenario: 'Приглашение на мероприятие',
    result: 'Согласен участвовать',
    time: '09:45',
    status: 'resolved'
  }, {
    client: 'ЗАО «Бета»',
    scenario: 'Обновление системы',
    result: 'Перезвонить позже',
    time: '09:30',
    status: 'waiting'
  }, {
    client: 'ООО «Гамма»',
    scenario: 'Напоминание об оплате',
    result: 'Уже оплачено',
    time: '09:15',
    status: 'resolved'
  }, {
    client: 'ИП Иванов',
    scenario: 'Сервисное обслуживание',
    result: 'Соединение с менеджером',
    time: '08:50',
    status: 'monitored'
  }];
  const upcomingTasks = [{
    title: 'Связаться с ООО «Альфа»',
    description: 'Помощь с подготовкой отчёта',
    deadline: 'Сегодня, 12:00'
  }, {
    title: 'Подтвердить участие ИП Смирнова',
    description: 'Мероприятие 15.06.2023',
    deadline: 'Сегодня, 15:00'
  }, {
    title: 'Перезвонить в ЗАО «Бета»',
    description: 'Обсудить обновление системы',
    deadline: 'Завтра, 10:00'
  }];
  // Resident companies data
  const residentCompanies = {
    total: 1500,
    byYear: [{
      year: '2024',
      count: 1000
    }, {
      year: '2025',
      count: 500
    }]
  };
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Дашборд</h1>
        <p className="text-gray-600">Обзор активности системы ИИ-обзвона</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <div className="flex items-center mt-1">
                  {stat.isUp ? <ArrowUpIcon size={14} className="text-green-500" /> : <ArrowDownIcon size={14} className="text-red-500" />}
                  <span className={`text-xs ml-1 ${stat.isUp ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change} за неделю
                  </span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-gray-50">{stat.icon}</div>
            </div>
          </div>)}
      </div>

      {/* Resident Companies Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">
            Экспортно ориентированные компании
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-6">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-blue-50 mr-4">
                <BuildingIcon size={24} className="text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Общее количество компаний
                </p>
                <h3 className="text-3xl font-bold text-gray-800">
                  {residentCompanies.total}
                </h3>
              </div>
            </div>
          </div>
          <div className="flex-1 pt-4 md:pt-0 md:pl-6">
            <p className="text-sm text-gray-500 mb-3">По годам</p>
            <div className="space-y-4">
              {residentCompanies.byYear.map((item, index) => <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CalendarIcon size={16} className="text-gray-400 mr-2" />
                    <span className="font-medium">{item.year} г.</span>
                  </div>
                  <span className="font-semibold text-lg">{item.count}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Статистика звонков</h3>
            <div className="flex items-center text-sm">
              <span className="text-gray-500">За последние 7 дней</span>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center border-b pb-4">
            <div className="flex items-center justify-center flex-col">
              <BarChartIcon size={40} className="text-gray-300 mb-2" />
              <p className="text-gray-500 text-sm">График статистики звонков</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center">
              <p className="text-sm text-gray-500">Успешные</p>
              <p className="text-lg font-semibold text-green-500">68%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Требуют внимания</p>
              <p className="text-lg font-semibold text-red-500">12%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Перезвон</p>
              <p className="text-lg font-semibold text-yellow-500">20%</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">
              Распределение сценариев
            </h3>
          </div>
          <div className="h-64 flex items-center justify-center border-b pb-4">
            <div className="flex items-center justify-center flex-col">
              <PieChartIcon size={40} className="text-gray-300 mb-2" />
              <p className="text-gray-500 text-sm">
                Круговая диаграмма сценариев
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 pt-4">
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Бухгалтерия</p>
              <p className="text-sm font-semibold">45%</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Маркетинг</p>
              <p className="text-sm font-semibold">30%</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Сервис</p>
              <p className="text-sm font-semibold">25%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Последние звонки</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              Смотреть все
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left text-gray-500 font-medium">
                    Клиент
                  </th>
                  <th className="px-4 py-2 text-left text-gray-500 font-medium">
                    Сценарий
                  </th>
                  <th className="px-4 py-2 text-left text-gray-500 font-medium">
                    Результат
                  </th>
                  <th className="px-4 py-2 text-left text-gray-500 font-medium">
                    Время
                  </th>
                  <th className="px-4 py-2 text-left text-gray-500 font-medium">
                    Статус
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentCalls.map((call, index) => <tr key={index} className="border-b">
                    <td className="px-4 py-3">{call.client}</td>
                    <td className="px-4 py-3">{call.scenario}</td>
                    <td className="px-4 py-3">{call.result}</td>
                    <td className="px-4 py-3">{call.time}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${call.status === 'resolved' ? 'bg-green-100 text-green-800' : call.status === 'monitored' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {call.status === 'resolved' ? 'Решен' : call.status === 'monitored' ? 'На контроле' : 'В ожидании'}
                      </span>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Предстоящие задачи</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              Смотреть все
            </button>
          </div>
          <div>
            {upcomingTasks.map((task, index) => <div key={index} className={`p-4 ${index !== upcomingTasks.length - 1 ? 'border-b' : ''}`}>
                <h4 className="font-medium text-gray-800">{task.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <ClockIcon size={12} className="mr-1" />
                  <span>{task.deadline}</span>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;