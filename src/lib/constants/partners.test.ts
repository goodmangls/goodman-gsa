import { describe, it, expect } from 'vitest';
import { GSA_PARTNERS } from './partners';

describe('GSA_PARTNERS', () => {
  it('should have a list of partners', () => {
    expect(GSA_PARTNERS.length).toBeGreaterThan(0);
  });

  it('should contain WestJet Cargo', () => {
    const westjet = GSA_PARTNERS.find(p => p.code === 'WS');
    expect(westjet).toBeDefined();
    expect(westjet?.name).toBe('WestJet Cargo');
  });

  it('should have valid types for all partners', () => {
    GSA_PARTNERS.forEach(partner => {
      expect(['GSA', 'CSA', 'GSSA']).toContain(partner.type);
    });
  });
});
