// A/B Testing Utilities for Hero Headline Variations

import { trackABTestVariant } from './analytics';

export type HeroHeadlineVariant = 'control' | 'variant_a' | 'variant_b';

export interface HeroHeadlineTest {
  variant: HeroHeadlineVariant;
  headline: string;
  subheadline: string;
}

// Hero Headline Variations
export const HERO_HEADLINES: Record<HeroHeadlineVariant, HeroHeadlineTest> = {
  control: {
    variant: 'control',
    headline: 'Launch Your Online Presence, Land Premium Jobs',
    subheadline: 'Professional website, branding, and Google presence—delivered in 7 days. Stop losing customers to competitors with better online presence.',
  },
  variant_a: {
    variant: 'variant_a',
    headline: 'Premium Website, Premium Prices',
    subheadline: 'Join 100+ service pros who raised their prices 38% on average with a professional online presence. Delivered in 7 days.',
  },
  variant_b: {
    variant: 'variant_b',
    headline: 'Your Website in 7 Days. Higher Prices Starting Day 8.',
    subheadline: 'Stop competing on price. Professional branding and website design that positions you as the premium choice in your market.',
  },
};

/**
 * Assigns user to A/B test variant based on stable client-side hash
 * Uses localStorage to maintain consistent variant across sessions
 */
export const getABTestVariant = (testName: string): HeroHeadlineVariant => {
  if (typeof window === 'undefined') {
    return 'control'; // SSR default
  }

  const storageKey = `ab_test_${testName}`;

  // Check if user already has assigned variant
  const storedVariant = localStorage.getItem(storageKey) as HeroHeadlineVariant | null;
  if (storedVariant && HERO_HEADLINES[storedVariant]) {
    return storedVariant;
  }

  // Assign new variant based on random distribution
  const random = Math.random();
  let variant: HeroHeadlineVariant;

  if (random < 0.33) {
    variant = 'control';
  } else if (random < 0.66) {
    variant = 'variant_a';
  } else {
    variant = 'variant_b';
  }

  // Store variant for consistency
  localStorage.setItem(storageKey, variant);

  // Track variant assignment
  trackABTestVariant(testName, variant);

  return variant;
};

/**
 * Force set a specific variant (useful for testing)
 */
export const setABTestVariant = (
  testName: string,
  variant: HeroHeadlineVariant
): void => {
  if (typeof window === 'undefined') return;

  const storageKey = `ab_test_${testName}`;
  localStorage.setItem(storageKey, variant);
};

/**
 * Clear all A/B test assignments (useful for testing)
 */
export const clearABTests = (): void => {
  if (typeof window === 'undefined') return;

  Object.keys(localStorage).forEach(key => {
    if (key.startsWith('ab_test_')) {
      localStorage.removeItem(key);
    }
  });
};

/**
 * Get active experiments
 */
export const getActiveExperiments = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};

  const experiments: Record<string, string> = {};

  Object.keys(localStorage).forEach(key => {
    if (key.startsWith('ab_test_')) {
      const testName = key.replace('ab_test_', '');
      experiments[testName] = localStorage.getItem(key) || 'unknown';
    }
  });

  return experiments;
};
