// =========================================
//  AgriMind — Shared App Data & Utilities
// =========================================

const CROPS_DATA = [
  {
    name: 'Tomatoes',
    emoji: '🍅',
    price: 850,
    demand: 'High',
    change: 12.4,
    forecast: 'Strong Rise',
    market: 'Oshodi, Lagos',
    risk: 'Low',
    roi: 74,
    history: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      prices: [520, 580, 620, 700, 760, 810, 850]
    }
  },
  {
    name: 'Bell Pepper',
    emoji: '🫑',
    price: 1200,
    demand: 'High',
    change: 8.7,
    forecast: 'Strong Rise',
    market: 'Mile 12, Lagos',
    risk: 'Low',
    roi: 68,
    history: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      prices: [780, 850, 920, 1000, 1080, 1140, 1200]
    }
  },
  {
    name: 'Onions',
    emoji: '🧅',
    price: 680,
    demand: 'High',
    change: 5.2,
    forecast: 'Moderate Rise',
    market: 'Kano Central',
    risk: 'Low',
    roi: 55,
    history: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      prices: [480, 510, 540, 580, 620, 655, 680]
    }
  },
  {
    name: 'Maize',
    emoji: '🌽',
    price: 320,
    demand: 'Trending',
    change: 14.3,
    forecast: 'Strong Rise',
    market: 'Kano / Kaduna',
    risk: 'Low',
    roi: 62,
    history: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      prices: [210, 230, 245, 265, 285, 304, 320]
    }
  },
  {
    name: 'Yam',
    emoji: '🍠',
    price: 450,
    demand: 'High',
    change: 3.8,
    forecast: 'Stable',
    market: 'Onitsha, Anambra',
    risk: 'Low',
    roi: 48,
    history: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      prices: [380, 390, 400, 415, 425, 440, 450]
    }
  },
  {
    name: 'Cassava',
    emoji: '🌿',
    price: 180,
    demand: 'Trending',
    change: 9.1,
    forecast: 'Moderate Rise',
    market: 'Oyo / Ondo',
    risk: 'Low',
    roi: 44,
    history: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      prices: [120, 130, 140, 150, 160, 170, 180]
    }
  },
  {
    name: 'Groundnut',
    emoji: '🥜',
    price: 750,
    demand: 'High',
    change: 6.5,
    forecast: 'Moderate Rise',
    market: 'Kano / Sokoto',
    risk: 'Medium',
    roi: 58,
    history: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      prices: [560, 590, 620, 660, 700, 728, 750]
    }
  },
  {
    name: 'Plantain',
    emoji: '🍌',
    price: 520,
    demand: 'Trending',
    change: 11.2,
    forecast: 'Strong Rise',
    market: 'Lagos / Ibadan',
    risk: 'Low',
    roi: 65,
    history: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      prices: [320, 360, 390, 420, 455, 490, 520]
    }
  },
  {
    name: 'Rice (paddy)',
    emoji: '🌾',
    price: 440,
    demand: 'High',
    change: 2.1,
    forecast: 'Stable',
    market: 'Kebbi / Benue',
    risk: 'Low',
    roi: 40,
    history: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      prices: [400, 410, 415, 420, 430, 436, 440]
    }
  },
  {
    name: 'Beans (cowpea)',
    emoji: '🫘',
    price: 890,
    demand: 'High',
    change: 7.8,
    forecast: 'Moderate Rise',
    market: 'Onitsha / Aba',
    risk: 'Medium',
    roi: 53,
    history: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      prices: [640, 680, 720, 765, 810, 852, 890]
    }
  },
  {
    name: 'Ginger',
    emoji: '🫚',
    price: 2100,
    demand: 'Trending',
    change: 18.5,
    forecast: 'Strong Rise',
    market: 'Kaduna Export Hub',
    risk: 'Medium',
    roi: 90,
    history: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      prices: [1100, 1300, 1450, 1650, 1800, 1960, 2100]
    }
  },
  {
    name: 'Watermelon',
    emoji: '🍉',
    price: 150,
    demand: 'Low',
    change: -3.2,
    forecast: 'Stable',
    market: 'Various',
    risk: 'Medium',
    roi: 30,
    history: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      prices: [200, 185, 175, 165, 155, 153, 150]
    }
  },
  {
    name: 'Sesame Seed',
    emoji: '🌱',
    price: 1650,
    demand: 'Trending',
    change: 21.3,
    forecast: 'Strong Rise',
    market: 'Benue / Nasarawa (Export)',
    risk: 'Low',
    roi: 85,
    history: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      prices: [900, 1000, 1150, 1280, 1420, 1550, 1650]
    }
  },
  {
    name: 'Cabbage',
    emoji: '🥬',
    price: 280,
    demand: 'Low',
    change: -1.5,
    forecast: 'Stable',
    market: 'Jos, Plateau',
    risk: 'High',
    roi: 28,
    history: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      prices: [310, 305, 300, 292, 285, 282, 280]
    }
  },
  {
    name: 'Soybeans',
    emoji: '🌿',
    price: 580,
    demand: 'Trending',
    change: 13.7,
    forecast: 'Moderate Rise',
    market: 'Benue / Kwara',
    risk: 'Low',
    roi: 60,
    history: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      prices: [380, 410, 440, 480, 525, 558, 580]
    }
  }
];
