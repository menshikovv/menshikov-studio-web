export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'web',
    icon: 'Globe',
    title: 'Веб-сайты',
    description: 'Лендинги, корпоративные сайты, сайты услуг и интернет-магазины с адаптивным дизайном, формами заявок и аналитикой.',
  },
  {
    id: 'miniapp',
    icon: 'MessageSquare',
    title: 'Telegram Mini Apps',
    description: 'Мини-приложения внутри Telegram для продаж, заявок, каталогов, оплат, квизов и интерактивов.',
  },
  {
    id: 'bot',
    icon: 'Bot',
    title: 'Telegram-боты',
    description: 'Боты для автоматизации заявок, заказов, поддержки, уведомлений и внутренних бизнес-процессов.',
  },
  {
    id: 'design',
    icon: 'Palette',
    title: 'UI/UX-дизайн',
    description: 'Проектируем понятные интерфейсы, продумываем пользовательский путь и создаём современные макеты в Figma.',
  },
  {
    id: 'seo',
    icon: 'TrendingUp',
    title: 'SEO и реклама',
    description: 'Помогаем привлекать трафик через SEO, Яндекс Директ, VK Рекламу и Telegram Ads.',
  },
  {
    id: 'complex',
    icon: 'Layers',
    title: 'Комплексные решения',
    description: 'Объединяем сайт, Telegram Mini App, бота, аналитику и интеграции в единую digital-систему.',
  },
];