export interface Project {
  id: string;
  title: string;
  subtitle: string;
  work: string[];
  duration: string;
  color: string;
  accentColor: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: 'mentup',
    title: 'Mentup.ru',
    subtitle: 'Интернет-магазин игровых товаров',
    work: ['Дизайн', 'Frontend', 'Backend', 'Каталог', 'Личный кабинет'],
    duration: '5–6 месяцев',
    color: 'from-blue-950 to-slate-900',
    accentColor: '#0062FF',
  },
  {
    id: 'atlanttech',
    title: 'AtlantTech.pro',
    subtitle: 'ПО для киберспортивных команд',
    work: ['Адаптивный сайт', 'EmailJS', 'Google Analytics 4'],
    duration: '1 день',
    color: 'from-indigo-950 to-blue-950',
    accentColor: '#6366F1',
  },
  {
    id: 'premium-brand',
    title: 'Premium Brand',
    subtitle: 'Telegram Mini App для онлайн-магазина',
    work: ['Дизайн', 'Telegram-интеграция', 'Каталог', 'Заявки'],
    duration: '1 день',
    color: 'from-violet-950 to-purple-950',
    accentColor: '#8B5CF6',
  },
  {
    id: 'ethos-select',
    title: 'Ethos Select',
    subtitle: 'Telegram-бот для онлайн-магазина',
    work: ['Сценарии бота', 'Заказы', 'Уведомления', 'Админка'],
    duration: '2 дня',
    color: 'from-emerald-950 to-teal-950',
    accentColor: '#10B981',
  },
  {
    id: 'leader-gymnasium',
    title: 'Гимназия ЛИДЕР',
    subtitle: 'Сайт образовательного учреждения',
    work: ['Дизайн', 'Разработка', 'Адаптив', 'CMS'],
    duration: '1 день',
    color: 'from-amber-950 to-orange-950',
    accentColor: '#F59E0B',
  },
];