import { describe, expect, it } from 'vitest';
import { getCookiePreview } from '@/lib/cookie-preview';

describe('Cookie preview selections', () => {
  it('uses chocolate dough when Chocolate is selected', () => {
    expect(getCookiePreview({ Masa: 'Chocolate' }).src).toContain('cookie-chocolate-plain.jpg');
  });
  it('shows each selected topping on the selected dough', () => {
    for (const [dough, file] of [['Tradicional', 'tradicional'], ['Chocolate', 'chocolate'], ['Red Velvet', 'redvelvet']]) {
      for (const [topping, suffix] of [['Nuez', 'nuez'], ['Brownie', 'brownie'], ['Chispas', 'chispas']]) {
        expect(getCookiePreview({ Masa: dough, Toppings: topping }).src).toContain(`cookie-${file}-${suffix}.jpg`);
      }
    }
  });
  it('keeps the dough when adding chocolate chips', () => {
    const choice = { Masa: 'Chocolate' };
    expect(getCookiePreview({ ...choice, Toppings: 'Chispas' }).src).toContain('cookie-chocolate-chispas.jpg');
  });
  it('does not change the photo for any filling', () => {
    const choice = { Masa: 'Chocolate', Toppings: 'Chispas' };
    for (const Relleno of ['Nutella', 'Chocolate Blanco', 'Oreo']) {
      expect(getCookiePreview({ ...choice, Relleno }).src).toBe(getCookiePreview(choice).src);
    }
  });
});