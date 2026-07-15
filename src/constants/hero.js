export const MAP_NODES = [
  { id: 'n1', cx: 120, cy: 90, delay: '0s' },   // Alaska / West
  { id: 'n2', cx: 240, cy: 180, delay: '0.6s' }, // Central US
  { id: 'n3', cx: 330, cy: 160, delay: '1.2s' }, // East Coast
  { id: 'n4', cx: 240, cy: 250, delay: '1.8s' }, // South / Mexico
];

export const MAP_PATHS = [
  { d: 'M120,90 Q170,110 240,180', delay: '0s' },
  { d: 'M240,180 Q290,150 330,160', delay: '0.4s' },
  { d: 'M240,180 Q230,210 240,250', delay: '0.8s' },
];

export const WIDGET_BAR_CHART_HEIGHTS = [
  "h-[25%]",
  "h-[45%]",
  "h-[60%]",
  "h-[78%]",
  "h-[95%]"
];

export const WIDGET_ACTIVITIES = [
  { w1: 'w-full', w2: 'w-[60%]' },
  { w1: 'w-[90%]', w2: 'w-[40%]' },
  { w1: 'w-[85%]', w2: 'w-[50%]' },
  { w1: 'w-[70%]', w2: 'w-[30%]' }
];

export const TRUSTED_COMPANIES = [
  { name: 'Middesk', hasIcon: 'middesk' },
  { name: 'Spellbook', hasIcon: 'spellbook' },
  { name: 'omni', fontClass: "font-medium text-xl tracking-wider font-['Beausite_Classic_Regular']" },
  { name: 'unspun', fontClass: "font-bold text-xl tracking-tighter" },
  { name: 'Pulley', fontClass: "font-semibold text-lg tracking-tight font-['Beausite_Classic_Regular']" },
  { name: 'ITALIC', fontClass: "font-extrabold text-base tracking-[0.12em]" },
  { name: 'capacity', fontClass: "font-normal text-lg tracking-tight font-['Beausite_Classic_Regular']" },
  { name: 'FITBOD', fontClass: "font-black text-lg italic tracking-wider" }
];

export const HERO_TEXT = {
  title: "Global sales tax solved",
  subtitle: "We automate global sales tax compliance,\nsaving finance teams time and money.",
  buttonText: "REQUEST DEMO"
};
