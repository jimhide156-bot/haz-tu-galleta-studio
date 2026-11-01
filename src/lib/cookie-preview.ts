import traditionalPlain from '@/assets/cookie-tradicional-plain.jpg';
import traditionalWalnut from '@/assets/cookie-tradicional-nuez.jpg';
import traditionalBrownie from '@/assets/cookie-tradicional-brownie.jpg';
import traditionalChips from '@/assets/cookie-tradicional-chispas.jpg';
import chocolatePlain from '@/assets/cookie-chocolate-plain.jpg';
import chocolateWalnut from '@/assets/cookie-chocolate-nuez.jpg';
import chocolateBrownie from '@/assets/cookie-chocolate-brownie.jpg';
import chocolateChips from '@/assets/cookie-chocolate-chispas.jpg';
import redVelvetPlain from '@/assets/cookie-redvelvet-plain.jpg';
import redVelvetWalnut from '@/assets/cookie-redvelvet-nuez.jpg';
import redVelvetBrownie from '@/assets/cookie-redvelvet-brownie.jpg';
import redVelvetChips from '@/assets/cookie-redvelvet-chispas.jpg';

const photos: Record<string, Record<string, string>> = {
  Tradicional: { plain: traditionalPlain, Nuez: traditionalWalnut, Brownie: traditionalBrownie, Chispas: traditionalChips },
  Chocolate: { plain: chocolatePlain, Nuez: chocolateWalnut, Brownie: chocolateBrownie, Chispas: chocolateChips },
  'Red Velvet': { plain: redVelvetPlain, Nuez: redVelvetWalnut, Brownie: redVelvetBrownie, Chispas: redVelvetChips },
};

export function getCookiePreview(choice: Record<string, string>) {
  const dough = choice['Masa'] ?? 'Tradicional';
  const topping = choice['Toppings'] ?? 'plain';
  return {
    src: photos[dough]?.[topping] ?? traditionalPlain,
    alt: `Galleta de masa ${dough}${choice['Toppings'] ? ` con ${choice['Toppings']}` : ' sin toppings'}`,
  };
}