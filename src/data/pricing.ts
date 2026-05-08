export interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  priceNote: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    title: 'Стартовый сайт',
    subtitle: 'Для экспертов, услуг и небольших бизнесов',
    price: 'от 6 500 ₽',
    priceNote: 'Базовая стоимость',
    features: [
      'Одна страница (лендинг)',
      'Адаптивная вёрстка',
      'Форма заявки',
      'Базовая SEO-настройка',
      'Подключение домена',
    ],
    cta: 'Обсудить сайт',
    highlighted: false,
  },
  {
    id: 'miniapp',
    title: 'Telegram Mini App',
    subtitle: 'Для продаж, заявок, каталогов и интерактивов',
    price: 'от 10 000 ₽',
    priceNote: 'Включая интеграции',
    features: [
      'Дизайн интерфейса',
      'Telegram-интеграция',
      'Формы / каталог / квиз',
      'Подключение таблицы или базы',
    ],
    cta: 'Обсудить Mini App',
    highlighted: true,
  },
  {
    id: 'bot',
    title: 'Telegram-бот',
    subtitle: 'Для автоматизации заявок, заказов и поддержки',
    price: 'от 7 000 ₽',
    priceNote: 'Под ваши сценарии',
    features: [
      'Сценарии бота',
      'Кнопки и команды',
      'Приём заявок',
      'Уведомления',
      'Базовая админка',
    ],
    cta: 'Обсудить бота',
    highlighted: false,
  },
  {
    id: 'custom',
    title: 'Индивидуальный',
    subtitle: 'Для сложных сайтов и комплексных решений',
    price: 'По запросу',
    priceNote: 'После обсуждения задачи',
    features: [
      'Анализ задачи',
      'Проектирование',
      'Дизайн',
      'Разработка',
      'Интеграции',
      'Запуск',
    ],
    cta: 'Получить оценку',
    highlighted: false,
  },
];