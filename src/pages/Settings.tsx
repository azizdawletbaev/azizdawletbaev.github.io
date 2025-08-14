import React from 'react';
import { SaveIcon, PhoneIcon, UserIcon, GlobeIcon, BellIcon, SettingsIcon, CheckIcon } from 'lucide-react';
const Settings = () => {
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Настройки</h1>
        <p className="text-gray-600">Управление настройками системы</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-800">
                Основные настройки
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Название компании
                </label>
                <input type="text" value="ИИ-Сервис" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Контактный телефон
                </label>
                <input type="text" value="+7 (123) 456-7890" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Контактный email
                </label>
                <input type="email" value="info@ai-service.ru" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Часовой пояс
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                  <option value="utc+3">UTC+3 (Москва)</option>
                  <option value="utc+5">UTC+5 (Екатеринбург)</option>
                  <option value="utc+7">UTC+7 (Красноярск)</option>
                  <option value="utc+9">UTC+9 (Якутск)</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Язык системы
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="language" value="ru" checked className="mr-2" />
                    <span>Русский</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="language" value="uz" className="mr-2" />
                    <span>Узбекский</span>
                  </label>
                </div>
              </div>
              <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                  <SaveIcon size={18} className="mr-2" />
                  Сохранить изменения
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-800">
                Настройки ИИ-обзвона
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Голос ИИ-ассистента
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                  <option value="female1">Женский (Алиса)</option>
                  <option value="female2">Женский (Елена)</option>
                  <option value="male1">Мужской (Алексей)</option>
                  <option value="male2">Мужской (Дмитрий)</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Скорость речи
                </label>
                <input type="range" min="0.5" max="2" step="0.1" defaultValue="1" className="w-full" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Медленно</span>
                  <span>Нормально</span>
                  <span>Быстро</span>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Время ожидания ответа (сек)
                </label>
                <input type="number" value="10" min="5" max="30" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Максимальное количество попыток дозвона
                </label>
                <input type="number" value="3" min="1" max="10" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Интервал между повторными звонками (мин)
                </label>
                <input type="number" value="60" min="15" max="1440" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" checked className="mr-2" />
                  <span className="text-sm">Записывать все звонки</span>
                </label>
              </div>
              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" checked className="mr-2" />
                  <span className="text-sm">
                    Автоматически создавать расшифровки звонков
                  </span>
                </label>
              </div>
              <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                  <SaveIcon size={18} className="mr-2" />
                  Сохранить изменения
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-800">Интеграции</h3>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4 pb-4 border-b">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <PhoneIcon size={16} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Телефония</h4>
                    <p className="text-xs text-green-500">Подключено</p>
                  </div>
                </div>
                <button className="text-sm text-blue-600">Настроить</button>
              </div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <UserIcon size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">CRM</h4>
                    <p className="text-xs text-green-500">Подключено</p>
                  </div>
                </div>
                <button className="text-sm text-blue-600">Настроить</button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <GlobeIcon size={16} className="text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">API</h4>
                    <p className="text-xs text-gray-500">Не подключено</p>
                  </div>
                </div>
                <button className="text-sm text-blue-600">Подключить</button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-800">Уведомления</h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Новые задачи</p>
                  <p className="text-xs text-gray-500">
                    Уведомления о новых задачах
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Результаты звонков</p>
                  <p className="text-xs text-gray-500">
                    Уведомления о результатах звонков
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Системные уведомления</p>
                  <p className="text-xs text-gray-500">
                    Уведомления о работе системы
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-800">
                Системная информация
              </h3>
            </div>
            <div className="p-4">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Версия системы</span>
                  <span className="text-sm">1.2.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">
                    Последнее обновление
                  </span>
                  <span className="text-sm">01.05.2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Статус системы</span>
                  <span className="text-sm flex items-center">
                    <CheckIcon size={14} className="text-green-500 mr-1" />
                    Активна
                  </span>
                </div>
              </div>
              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <SettingsIcon size={16} className="mr-2" />
                Проверить обновления
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Settings;