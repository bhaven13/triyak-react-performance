// Triyak React Performance Suite - Performance Thresholds
// Based on Google's Core Web Vitals standards and 10+ years of enterprise optimization

export const PERFORMANCE_THRESHOLDS = {
  // Largest Contentful Paint (LCP)
  LCP: {
    GOOD: 2500,           // 2.5 seconds or less
    NEEDS_IMPROVEMENT: 4000, // 2.5 to 4 seconds
    POOR: 4000,           // More than 4 seconds
    ENTERPRISE_TARGET: 1500, // Triyak's enterprise standard
    ULTRA_PERFORMANCE: 1000  // Ultra-high performance target
  },

  // First Input Delay (FID)
  FID: {
    GOOD: 100,            // 100 milliseconds or less
    NEEDS_IMPROVEMENT: 300, // 100 to 300 milliseconds
    POOR: 300,            // More than 300 milliseconds
    ENTERPRISE_TARGET: 50,  // Triyak's enterprise standard
    ULTRA_PERFORMANCE: 16   // 60fps target (16.67ms)
  },

  // Cumulative Layout Shift (CLS)
  CLS: {
    GOOD: 0.1,            // 0.1 or less
    NEEDS_IMPROVEMENT: 0.25, // 0.1 to 0.25
    POOR: 0.25,           // More than 0.25
    ENTERPRISE_TARGET: 0.05, // Triyak's enterprise standard
    ULTRA_PERFORMANCE: 0.01  // Ultra-low layout shift
  },

  // Time to First Byte (TTFB)
  TTFB: {
    GOOD: 800,            // 800 milliseconds or less
    NEEDS_IMPROVEMENT: 1800, // 800 to 1800 milliseconds
    POOR: 1800,           // More than 1800 milliseconds
    ENTERPRISE_TARGET: 400,  // Triyak's enterprise standard
    ULTRA_PERFORMANCE: 200   // Ultra-fast server response
  },

  // First Contentful Paint (FCP)
  FCP: {
    GOOD: 1800,           // 1.8 seconds or less
    NEEDS_IMPROVEMENT: 3000, // 1.8 to 3 seconds
    POOR: 3000,           // More than 3 seconds
    ENTERPRISE_TARGET: 1200, // Triyak's enterprise standard
    ULTRA_PERFORMANCE: 800   // Ultra-fast content paint
  }
} as const;

export const MEMORY_THRESHOLDS = {
  // Memory usage thresholds (in MB)
  USAGE: {
    GOOD: 50,             // 50MB or less
    NEEDS_IMPROVEMENT: 100, // 50 to 100MB
    POOR: 100,            // More than 100MB
    ENTERPRISE_TARGET: 30,  // Triyak's enterprise standard
    ULTRA_PERFORMANCE: 20   // Ultra-low memory usage
  },

  // Memory leak detection thresholds
  LEAK: {
    WARNING: 10,          // 10MB increase triggers warning
    CRITICAL: 50,         // 50MB increase triggers critical alert
    ENTERPRISE_TARGET: 5, // Triyak's enterprise standard
    ULTRA_PERFORMANCE: 2  // Ultra-sensitive leak detection
  }
} as const;

export const BUNDLE_THRESHOLDS = {
  // Bundle size thresholds (in KB)
  SIZE: {
    GOOD: 500,            // 500KB or less
    NEEDS_IMPROVEMENT: 1000, // 500KB to 1MB
    POOR: 1000,           // More than 1MB
    ENTERPRISE_TARGET: 300,  // Triyak's enterprise standard
    ULTRA_PERFORMANCE: 200   // Ultra-small bundle
  },

  // Gzipped bundle size thresholds
  GZIPPED_SIZE: {
    GOOD: 150,            // 150KB or less
    NEEDS_IMPROVEMENT: 300, // 150KB to 300KB
    POOR: 300,            // More than 300KB
    ENTERPRISE_TARGET: 100, // Triyak's enterprise standard
    ULTRA_PERFORMANCE: 75   // Ultra-compressed bundle
  }
} as const;

export const IMAGE_THRESHOLDS = {
  // Image size thresholds (in KB)
  SIZE: {
    GOOD: 100,            // 100KB or less
    NEEDS_IMPROVEMENT: 250, // 100KB to 250KB
    POOR: 250,            // More than 250KB
    ENTERPRISE_TARGET: 50,  // Triyak's enterprise standard
    ULTRA_PERFORMANCE: 25   // Ultra-optimized images
  },

  // Compression ratio thresholds
  COMPRESSION: {
    GOOD: 0.7,            // 70% or better compression
    NEEDS_IMPROVEMENT: 0.5, // 50% to 70% compression
    POOR: 0.5,            // Less than 50% compression
    ENTERPRISE_TARGET: 0.8, // Triyak's enterprise standard
    ULTRA_PERFORMANCE: 0.9  // Ultra-high compression
  }
} as const;

export const PERFORMANCE_SCORES = {
  // Overall performance score thresholds
  SCORE: {
    EXCELLENT: 90,        // 90-100: Excellent performance
    GOOD: 80,             // 80-89: Good performance
    NEEDS_IMPROVEMENT: 60, // 60-79: Needs improvement
    POOR: 60,             // Below 60: Poor performance
    ENTERPRISE_TARGET: 95, // Triyak's enterprise standard
    ULTRA_PERFORMANCE: 98  // Ultra-high performance target
  },

  // Grade thresholds
  GRADE: {
    A: 90,                // A grade: 90-100
    B: 80,                // B grade: 80-89
    C: 70,                // C grade: 70-79
    D: 60,                // D grade: 60-69
    F: 60                 // F grade: Below 60
  }
} as const;

export const OPTIMIZATION_PRIORITIES = {
  // Priority levels for optimization recommendations
  PRIORITY: {
    CRITICAL: 1,          // Critical: Fix immediately
    HIGH: 2,              // High: Fix within 24 hours
    MEDIUM: 3,            // Medium: Fix within a week
    LOW: 4,               // Low: Fix when convenient
    OPTIONAL: 5           // Optional: Nice to have
  },

  // Impact levels for optimization recommendations
  IMPACT: {
    EXTREME: 0.8,         // 80%+ improvement expected
    HIGH: 0.6,            // 60-79% improvement expected
    MEDIUM: 0.4,          // 40-59% improvement expected
    LOW: 0.2,             // 20-39% improvement expected
    MINIMAL: 0.1          // Less than 20% improvement expected
  }
} as const;

export const AI_OPTIMIZATION_THRESHOLDS = {
  // AI optimization confidence thresholds
  CONFIDENCE: {
    HIGH: 0.8,            // 80%+ confidence
    MEDIUM: 0.6,          // 60-79% confidence
    LOW: 0.4,             // 40-59% confidence
    MINIMAL: 0.2          // Less than 40% confidence
  },

  // AI optimization cost thresholds
  COST: {
    LOW: 1,               // Low implementation cost
    MEDIUM: 2,            // Medium implementation cost
    HIGH: 3,              // High implementation cost
    EXTREME: 4            // Extreme implementation cost
  }
} as const;

// Export all thresholds as a single object for easy access
export const ALL_THRESHOLDS = {
  performance: PERFORMANCE_THRESHOLDS,
  memory: MEMORY_THRESHOLDS,
  bundle: BUNDLE_THRESHOLDS,
  image: IMAGE_THRESHOLDS,
  scores: PERFORMANCE_SCORES,
  priorities: OPTIMIZATION_PRIORITIES,
  ai: AI_OPTIMIZATION_THRESHOLDS
} as const;
