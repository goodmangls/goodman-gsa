export interface Partner {
  code: string;
  name: string;
  type: 'GSA' | 'CSA' | 'GSSA';
  logo?: string;
}

export const GSA_PARTNERS: Partner[] = [
  { code: 'WS', name: 'WestJet Cargo', type: 'GSA' },
  { code: 'O3', name: 'SF Airlines (ShunFeng)', type: 'CSA' },
  { code: 'BX', name: 'Air Busan', type: 'GSA' },
  { code: 'M0', name: 'Aero Mongolia', type: 'GSA' },
  { code: 'SU', name: 'Aeroflot', type: 'CSA' },
  { code: 'F7', name: 'iFly Airlines', type: 'GSA' },
  { code: 'ZH', name: 'Shenzhen Airlines', type: 'CSA' },
  { code: '8Y', name: 'China Post', type: 'CSA' },
];
