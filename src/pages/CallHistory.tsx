import React from 'react';
import { SearchIcon, FilterIcon, DownloadIcon, PhoneCallIcon, PhoneOutgoingIcon, CheckCircleIcon, XCircleIcon, ClockIcon, ChevronLeftIcon, ChevronRightIcon, PlayIcon, AlertCircleIcon } from 'lucide-react';
const CallHistory = () => {
  const calls = [{
    id: 1,
    client: 'ООО «Альфа»',
    contact: 'Иванов Иван',
    phone: '+7 (123) 456-7890',
    scenario: 'Напоминание об отчёте',
    date: '10.05.2023',
    time: '10:15',
    duration: '2:35',
    result: 'Требуется помощь',
    status: 'resolved'
  }, {
    id: 2,
    client: 'ИП Смирнов',
    contact: 'Смирнов Алексей',
    phone: '+7 (123) 456-7891',
    scenario: 'Приглашение на мероприятие',
    date: '10.05.2023',
    time: '09:45',
    duration: '3:12',
    result: 'Согласен участвовать',
    status: 'resolved'
  }, {
    id: 3,
    client: 'ЗАО «Бета»',
    contact: 'Петрова Елена',
    phone: '+7 (123) 456-7892',
    scenario: 'Обновление системы',
    date: '10.05.2023',
    time: '09:30',
    duration: '1:45',
    result: 'Перезвонить позже',
    status: 'waiting'
  }, {
    id: 4,
    client: 'ООО «Гамма»',
    contact: 'Сидоров Павел',
    phone: '+7 (123) 456-7893',
    scenario: 'Напоминание об оплате',
    date: '10.05.2023',
    time: '09:15',
    duration: '2:05',
    result: 'Уже оплачено',
    status: 'resolved'
  }, {
    id: 5,
    client: 'ИП Иванов',
    contact: 'Иванов Сергей',
    phone: '+7 (123) 456-7894',
    scenario: 'Сервисное обслуживание',
    date: '10.05.2023',
    time: '08:50',
    duration: '4:20',
    result: 'Соединение с менеджером',
    status: 'monitored'
  }, {
    id: 6,
    client: 'ООО «Дельта»',
    contact: 'Козлова Мария',
    phone: '+7 (123) 456-7895',
    scenario: 'Напоминание об отчёте',
    date: '09.05.2023',
    time: '15:30',
    duration: '0:45',
    result: 'Не отвечает',
    status: 'waiting'
  }, {
    id: 7,
    client: 'ЗАО «Эпсилон»',
    contact: 'Новиков Дмитрий',
    phone: '+7 (123) 456-7896',
    scenario: 'Приглашение на мероприятие',
    date: '09.05.2023',
    time: '14:15',
    duration: '3:05',
    result: 'Отказался',
    status: 'resolved'
  }];
  const callDetails = {
    id: 1,
    client: 'ООО «Альфа»',
    contact: 'Иванов Иван',
    phone: '+7 (123) 456-7890',
    scenario: 'Напоминание об отчёте',
    date: '10.05.2023',
    time: '10:15',
    duration: '2:35',
    result: 'Требуется помощь',
    status: 'completed',
    transcript: [{
      speaker: 'ai',
      text: 'Здравствуйте! Это автоматический звонок от компании «ИИ-Сервис». Мы хотели напомнить о сроке сдачи ежемесячного отчёта. Отчёт уже готов?',
      time: '0:00'
    }, {
      speaker: 'client',
      text: 'Здравствуйте! Нет, у нас возникли проблемы с подготовкой отчёта.',
      time: '0:15'
    }, {
      speaker: 'ai',
      text: 'Понимаю. Вам требуется помощь с подготовкой отчёта?',
      time: '0:25'
    }, {
      speaker: 'client',
      text: 'Да, нам нужна консультация по новому формату отчётности.',
      time: '0:35'
    }, {
      speaker: 'ai',
      text: 'Хорошо. Я создам задачу для менеджера, и он свяжется с вами в ближайшее время для оказания помощи. Вам удобно будет обсудить этот вопрос сегодня?',
      time: '0:50'
    }, {
      speaker: 'client',
      text: 'Да, желательно до конца дня.',
      time: '1:15'
    }, {
      speaker: 'ai',
      text: 'Отлично, я передам эту информацию менеджеру. Есть ли ещё какие-то вопросы, которые вы хотели бы обсудить?',
      time: '1:25'
    }, {
      speaker: 'client',
      text: 'Нет, других вопросов нет.',
      time: '1:45'
    }, {
      speaker: 'ai',
      text: 'Спасибо за уделенное время! Менеджер свяжется с вами в ближайшее время. До свидания.',
      time: '1:55'
    }, {
      speaker: 'client',
      text: 'До свидания.',
      time: '2:30'
    }]
  };
  return <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">История звонков</h1>
          <p className="text-gray-600">Записи всех автоматических звонков</p>
        </div>
        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center">
          <DownloadIcon size={18} className="mr-2" />
          Экспорт
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="p-4 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="relative w-full sm:w-auto sm:min-w-[300px]">
                <input type="text" placeholder="Поиск по звонкам..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <SearchIcon className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700">
                  <FilterIcon size={16} className="mr-2" />
                  Фильтры
                </button>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white">
                  <option value="">Все сценарии</option>
                  <option value="report">Напоминание об отчёте</option>
                  <option value="event">Приглашение на мероприятие</option>
                  <option value="update">Обновление системы</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Клиент
                    </th>
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Сценарий
                    </th>
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Дата и время
                    </th>
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Длительность
                    </th>
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Результат
                    </th>
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Статус
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {calls.map(call => <tr key={call.id} className="border-b hover:bg-gray-50 cursor-pointer">
                      <td className="px-4 py-3 font-medium">{call.client}</td>
                      <td className="px-4 py-3">{call.scenario}</td>
                      <td className="px-4 py-3">
                        {call.date}, {call.time}
                      </td>
                      <td className="px-4 py-3">{call.duration}</td>
                      <td className="px-4 py-3">{call.result}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          {call.status === 'resolved' && <CheckCircleIcon size={16} className="text-green-500 mr-1" />}
                          {call.status === 'waiting' && <ClockIcon size={16} className="text-yellow-500 mr-1" />}
                          {call.status === 'monitored' && <AlertCircleIcon size={16} className="text-blue-500 mr-1" />}
                          <span className={`text-xs ${call.status === 'resolved' ? 'text-green-700' : call.status === 'waiting' ? 'text-yellow-700' : 'text-blue-700'}`}>
                            {call.status === 'resolved' ? 'Решен' : call.status === 'waiting' ? 'В ожидании' : 'На контроле'}
                          </span>
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            <div className="p-4 flex items-center justify-between border-t">
              <div className="text-sm text-gray-500">
                Показано 1-7 из 124 звонков
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
              <h3 className="font-semibold text-gray-800">Детали звонка</h3>
            </div>
            <div className="p-4">
              {callDetails && <div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Клиент</p>
                      <p className="font-medium">{callDetails.client}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        Контактное лицо
                      </p>
                      <p>{callDetails.contact}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Телефон</p>
                      <p>{callDetails.phone}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Сценарий</p>
                      <p>{callDetails.scenario}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Дата и время</p>
                      <p>
                        {callDetails.date}, {callDetails.time}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Длительность</p>
                      <p>{callDetails.duration}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-800">
                        Запись звонка
                      </h4>
                      <button className="text-blue-600 text-sm hover:text-blue-800">
                        Скачать запись
                      </button>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 flex items-center">
                      <button className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                        <PlayIcon size={16} />
                      </button>
                      <div className="mx-3 flex-1">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-blue-600 rounded-full w-1/3"></div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">0:50 / 2:35</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">
                      Расшифровка разговора
                    </h4>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {callDetails.transcript.map((item, index) => <div key={index} className={`flex ${item.speaker === 'ai' ? 'justify-start' : 'justify-end'}`}>
                          <div className={`max-w-[80%] rounded-lg p-3 ${item.speaker === 'ai' ? 'bg-blue-50' : 'bg-gray-100'}`}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs font-medium">
                                {item.speaker === 'ai' ? 'ИИ-Ассистент' : 'Клиент'}
                              </span>
                              <span className="text-xs text-gray-500">
                                {item.time}
                              </span>
                            </div>
                            <p className="text-sm">{item.text}</p>
                          </div>
                        </div>)}
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default CallHistory;