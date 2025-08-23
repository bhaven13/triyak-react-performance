// Triyak React Performance Suite - Main Entry Point
// Built on 10+ years of enterprise optimization experience at Triyak Digital Agency

// Export all components
export { default as TriyakPerformanceMonitor } from './components/TriyakPerformanceMonitor';
export { default as TriyakPerformanceSuite } from './components/TriyakPerformanceSuite';

// Export types
export * from './types/performance';

// Export constants
export * from './constants/performanceThresholds';

// Version and package information
export const VERSION = '1.0.0';
export const PACKAGE_NAME = 'triyak-react-performance';
export const COMPANY = 'Triyak Digital Agency';
export const WEBSITE = 'https://www.triyak.in';
export const SUPPORT_EMAIL = 'support@triyak.in';

// Performance optimization constants
export const PERFORMANCE_THRESHOLDS = {
  LCP: {
    GOOD: 2500,
    NEEDS_IMPROVEMENT: 4000,
    POOR: 4000
  },
  FID: {
    GOOD: 100,
    NEEDS_IMPROVEMENT: 300,
    POOR: 300
  },
  CLS: {
    GOOD: 0.1,
    NEEDS_IMPROVEMENT: 0.25,
    POOR: 0.25
  }
} as const;

// Export default configuration
export const DEFAULT_CONFIG = {
  enableAIOptimization: true,
  optimizationMode: 'aggressive' as const,
  monitoring: true,
  alerts: true,
  reporting: true,
  autoOptimize: true
} as const;
