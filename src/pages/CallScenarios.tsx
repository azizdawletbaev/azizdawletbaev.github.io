import React from 'react';
import { PlusIcon, PhoneCallIcon, FileTextIcon, CalendarIcon, BellIcon, MoreHorizontalIcon, EditIcon, CopyIcon, Trash2Icon } from 'lucide-react';
const CallScenarios = () => {
  const scenarios = [{
    id: 1,
    name: 'Напоминание о сдаче отчёта',
    type: 'Бухгалтерия',
    created: '01.05.2023',
    lastUsed: '10.05.2023',
    status: 'active'
  }, {
    id: 2,
    name: 'Приглашение на мероприятие',
    type: 'Маркетинг',
    created: '15.04.2023',
    lastUsed: '08.05.2023',
    status: 'active'
  }, {
    id: 3,
    name: 'Сообщение об обновлении системы',
    type: 'Сервис',
    created: '20.04.2023',
    lastUsed: '05.05.2023',
    status: 'active'
  }, {
    id: 4,
    name: 'Напоминание об оплате',
    type: 'Бухгалтерия',
    created: '10.04.2023',
    lastUsed: '12.05.2023',
    status: 'active'
  }, {
    id: 5,
    name: 'Опрос удовлетворенности',
    type: 'Маркетинг',
    created: '05.04.2023',
    lastUsed: '01.05.2023',
    status: 'inactive'
  }];
  const scenarioExample = {
    name: 'Напоминание о сдаче отчёта',
    type: 'Бухгалтерия',
    script: [{
      type: 'greeting',
      text: 'Здравствуйте! Это автоматический звонок от компании «ИИ-Сервис». Мы хотели напомнить о сроке сдачи ежемесячного отчёта.'
    }, {
      type: 'question',
      text: 'Отчёт уже готов?',
      options: [{
        key: '1',
        text: 'Да, отчёт готов',
        action: 'complete'
      }, {
        key: '2',
        text: 'Нет, нужна помощь',
        action: 'create_task'
      }, {
        key: '3',
        text: 'Перезвоните позже',
        action: 'schedule_call'
      }]
    }, {
      type: 'response',
      condition: 'option_1',
      text: 'Отлично! Спасибо за информацию. Хорошего дня!'
    }, {
      type: 'response',
      condition: 'option_2',
      text: 'Понятно. Я создам задачу для менеджера, и он свяжется с вами в ближайшее время для оказания помощи.'
    }, {
      type: 'response',
      condition: 'option_3',
      text: 'Хорошо. Когда вам будет удобно, чтобы мы перезвонили? Нажмите 1 для звонка завтра или 2 для звонка через два дня.'
    }, {
      type: 'farewell',
      text: 'Спасибо за уделенное время! До свидания.'
    }]
  };
  return <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Сценарии звонков</h1>
          <p className="text-gray-600">Управление сценариями для ИИ-обзвона</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          <PlusIcon size={18} className="mr-2" />
          Создать сценарий
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-800">Все сценарии</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Название
                    </th>
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Тип
                    </th>
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Создан
                    </th>
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">
                      Последнее использование
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
                  {scenarios.map(scenario => <tr key={scenario.id} className="border-b">
                      <td className="px-4 py-3 font-medium">{scenario.name}</td>
                      <td className="px-4 py-3">{scenario.type}</td>
                      <td className="px-4 py-3">{scenario.created}</td>
                      <td className="px-4 py-3">{scenario.lastUsed}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${scenario.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {scenario.status === 'active' ? 'Активен' : 'Неактивен'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <button className="p-1 text-gray-500 hover:text-blue-600">
                            <EditIcon size={16} />
                          </button>
                          <button className="p-1 text-gray-500 hover:text-blue-600">
                            <CopyIcon size={16} />
                          </button>
                          <button className="p-1 text-gray-500 hover:text-red-600">
                            <Trash2Icon size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-800">Типы сценариев</h3>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4 pb-4 border-b">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <FileTextIcon size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Бухгалтерия</h4>
                    <p className="text-xs text-gray-500">2 сценария</p>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <MoreHorizontalIcon size={16} />
                </button>
              </div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <CalendarIcon size={16} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Маркетинг</h4>
                    <p className="text-xs text-gray-500">2 сценария</p>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <MoreHorizontalIcon size={16} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                    <BellIcon size={16} className="text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Сервис</h4>
                    <p className="text-xs text-gray-500">1 сценарий</p>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <MoreHorizontalIcon size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">Быстрый запуск</h3>
            </div>
            <div className="p-4">
              <button className="w-full bg-blue-50 border border-blue-100 text-blue-700 rounded-lg p-4 flex items-center justify-center mb-3 hover:bg-blue-100 transition-colors">
                <PhoneCallIcon size={18} className="mr-2" />
                Запустить обзвон
              </button>
              <p className="text-xs text-gray-500 text-center">
                Выберите сценарий и список клиентов для начала обзвона
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="font-semibold text-gray-800">
            Пример сценария: {scenarioExample.name}
          </h3>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Информация о сценарии
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Название</p>
                <p className="font-medium">{scenarioExample.name}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Тип</p>
                <p className="font-medium">{scenarioExample.type}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Статус</p>
                <p className="font-medium">
                  <span className="inline-block px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    Активен
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Структура сценария
            </h4>
            <div className="border rounded-lg">
              {scenarioExample.script.map((step, index) => <div key={index} className={`p-4 ${index !== scenarioExample.script.length - 1 ? 'border-b' : ''}`}>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-medium mr-3 mt-1">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {step.type === 'greeting' ? 'Приветствие' : step.type === 'question' ? 'Вопрос' : step.type === 'response' ? 'Ответ' : 'Прощание'}
                        </span>
                        {step.condition && <span className="text-xs ml-2 text-gray-500">
                            Условие: {step.condition}
                          </span>}
                      </div>
                      <p className="text-sm">{step.text}</p>
                      {step.options && <div className="mt-3 space-y-2">
                          {step.options.map((option, optIndex) => <div key={optIndex} className="flex items-center bg-gray-50 p-2 rounded">
                              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium mr-2">
                                {option.key}
                              </div>
                              <span className="text-sm">{option.text}</span>
                              <span className="text-xs ml-auto text-gray-500">
                                {option.action === 'complete' ? 'Завершить' : option.action === 'create_task' ? 'Создать задачу' : 'Запланировать звонок'}
                              </span>
                            </div>)}
                        </div>}
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default CallScenarios;