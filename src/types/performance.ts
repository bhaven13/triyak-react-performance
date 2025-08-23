// Triyak React Performance Suite - Performance Types
// Built on 10+ years of enterprise optimization experience

export interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint in milliseconds
  fid: number; // First Input Delay in milliseconds
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte in milliseconds
  fcp: number; // First Contentful Paint in milliseconds
  lcpElement?: Element; // Element that triggered LCP
  timestamp: number; // When metrics were captured
}

export interface PerformanceThresholds {
  lcp: {
    good: number;
    needsImprovement: number;
    poor: number;
  };
  fid: {
    good: number;
    needsImprovement: number;
    poor: number;
  };
  cls: {
    good: number;
    needsImprovement: number;
    poor: number;
  };
  ttfb: {
    good: number;
    needsImprovement: number;
    poor: number;
  };
  fcp: {
    good: number;
    needsImprovement: number;
    poor: number;
  };
}

export interface PerformanceAlert {
  metric: keyof PerformanceMetrics;
  value: number;
  threshold: number;
  severity: 'warning' | 'error' | 'critical';
  timestamp: number;
  element?: Element;
  recommendation?: string;
}

export interface PerformanceOptimization {
  type: 'lcp' | 'fid' | 'cls' | 'ttfb' | 'fcp' | 'bundle' | 'memory';
  action: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  estimatedImpact: number; // Percentage improvement expected
  implementation: string;
  cost: 'low' | 'medium' | 'high';
}

export interface PerformanceReport {
  metrics: PerformanceMetrics;
  alerts: PerformanceAlert[];
  optimizations: PerformanceOptimization[];
  score: number; // Overall performance score (0-100)
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  timestamp: number;
  url: string;
  userAgent: string;
}

export interface PerformanceConfig {
  enableAIOptimization: boolean;
  optimizationMode: 'conservative' | 'aggressive' | 'custom';
  monitoring: boolean;
  alerts: boolean;
  reporting: boolean;
  autoOptimize: boolean;
  customThresholds?: Partial<PerformanceThresholds>;
  alertCallbacks?: {
    onAlert?: (alert: PerformanceAlert) => void;
    onOptimization?: (optimization: PerformanceOptimization) => void;
    onReport?: (report: PerformanceReport) => void;
  };
}

export interface BundleMetrics {
  size: number; // Bundle size in bytes
  gzippedSize: number; // Gzipped bundle size in bytes
  modules: number; // Number of modules
  chunks: number; // Number of chunks
  treeShakingEfficiency: number; // Percentage of unused code removed
  duplicateModules: number; // Number of duplicate modules
  optimizationOpportunities: BundleOptimization[];
}

export interface BundleOptimization {
  type: 'code-splitting' | 'tree-shaking' | 'duplicate-removal' | 'minification';
  description: string;
  potentialSavings: number; // Bytes that could be saved
  difficulty: 'easy' | 'medium' | 'hard';
  priority: 'low' | 'medium' | 'high';
}

export interface MemoryMetrics {
  used: number; // Memory used in MB
  total: number; // Total memory available in MB
  limit: number; // Memory limit in MB
  percentage: number; // Percentage of memory used
  leaks: MemoryLeak[];
  optimizationOpportunities: MemoryOptimization[];
}

export interface MemoryLeak {
  type: 'event-listener' | 'timer' | 'closure' | 'dom-reference';
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  location: string; // Stack trace or component name
  size: number; // Memory size in bytes
}

export interface MemoryOptimization {
  type: 'cleanup' | 'garbage-collection' | 'reference-removal';
  description: string;
  potentialSavings: number; // MB that could be saved
  difficulty: 'easy' | 'medium' | 'hard';
  priority: 'low' | 'medium' | 'high';
}

export interface ImageOptimization {
  originalSize: number; // Original image size in bytes
  optimizedSize: number; // Optimized image size in bytes
  format: 'jpeg' | 'webp' | 'avif' | 'png';
  quality: number; // Image quality (0-100)
  compressionRatio: number; // Compression ratio achieved
  loading: 'lazy' | 'eager' | 'preload';
  responsive: boolean; // Whether responsive images are used
}

export interface CoreWebVitalsScore {
  lcp: 'good' | 'needs-improvement' | 'poor';
  fid: 'good' | 'needs-improvement' | 'poor';
  cls: 'good' | 'needs-improvement' | 'poor';
  overall: 'good' | 'needs-improvement' | 'poor';
  score: number; // 0-100 score
}

export interface PerformanceHistory {
  reports: PerformanceReport[];
  trends: {
    lcp: number[];
    fid: number[];
    cls: number[];
    score: number[];
  };
  improvements: {
    metric: keyof PerformanceMetrics;
    before: number;
    after: number;
    improvement: number; // Percentage improvement
    timestamp: number;
  }[];
}

export interface AIOptimizationResult {
  type: 'performance' | 'bundle' | 'memory' | 'image';
  confidence: number; // 0-1 confidence score
  recommendation: string;
  expectedImprovement: number; // Percentage improvement expected
  implementation: string;
  cost: number; // Implementation cost in time/resources
  priority: 'low' | 'medium' | 'high' | 'critical';
}
