import React, { ReactNode } from 'react';
import TriyakPerformanceMonitor from './TriyakPerformanceMonitor';

interface TriyakPerformanceSuiteProps {
  // Enable all optimizations
  enableAll?: boolean;
  
  // Performance monitoring
  monitoring?: boolean;
  
  // Optimization recommendations
  recommendations?: boolean;
  
  // Performance alerts
  alerts?: boolean;
  
  // Core Web Vitals optimization
  coreWebVitals?: {
    lcp?: { target: number; optimize: boolean };
    fid?: { target: number; optimize: boolean };
    cls?: { target: number; optimize: boolean };
  };
  
  // Bundle optimization
  bundle?: {
    codeSplitting?: boolean;
    treeShaking?: boolean;
    lazyLoading?: boolean;
    prefetching?: boolean;
  };
  
  // Image optimization
  images?: {
    format?: 'auto' | 'webp' | 'avif' | 'jpeg';
    quality?: 'connection-aware' | 'high' | 'medium' | 'low';
    lazyLoading?: boolean;
    preloading?: boolean;
  };
  
  // Memory optimization
  memory?: {
    monitoring?: boolean;
    optimization?: boolean;
    leakDetection?: boolean;
  };
  
  // AI optimization
  ai?: {
    enabled?: boolean;
    learning?: boolean;
    prediction?: boolean;
    automation?: boolean;
  };
  
  // Children
  children: ReactNode;
}

const TriyakPerformanceSuite: React.FC<TriyakPerformanceSuiteProps> = ({
  enableAll = false,
  monitoring = true,
  recommendations = true,
  alerts = true,
  coreWebVitals = {},
  bundle = {},
  images = {},
  memory = {},
  ai = {},
  children
}) => {
  // Default configuration when enableAll is true
  const defaultConfig = enableAll ? {
    lcpThreshold: 1500,
    fidThreshold: 50,
    clsThreshold: 0.05,
    enableAIOptimization: true,
    optimizationMode: 'aggressive' as const,
    monitoring: true,
    alerts: true,
    reporting: true,
    autoOptimize: true
  } : {};

  // Merge custom configuration
  const finalConfig = {
    ...defaultConfig,
    lcpThreshold: coreWebVitals.lcp?.target || 1500,
    fidThreshold: coreWebVitals.fid?.target || 50,
    clsThreshold: coreWebVitals.cls?.target || 0.05,
    enableAIOptimization: ai.enabled !== false,
    optimizationMode: 'aggressive' as const,
    monitoring: monitoring !== false,
    alerts: alerts !== false,
    reporting: recommendations !== false,
    autoOptimize: true
  };

  return (
    <div className="triyak-performance-suite" data-version="1.0.0">
      <TriyakPerformanceMonitor
        {...finalConfig}
        onPerformanceAlert={(alert) => {
          if (alerts) {
            console.warn(`Triyak Performance Alert: ${alert.metric} exceeded threshold`, alert);
          }
        }}
        onMetrics={(metrics) => {
          if (monitoring) {
            console.log('Triyak Performance Metrics:', metrics);
          }
        }}
        onReport={(report) => {
          if (recommendations) {
            console.log('Triyak Performance Report:', report);
          }
        }}
      >
        {children}
      </TriyakPerformanceMonitor>
      
      {/* Performance optimization indicators */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ 
          position: 'fixed', 
          bottom: '10px', 
          right: '10px', 
          background: '#1a1a1a', 
          color: '#00ff00', 
          padding: '10px', 
          borderRadius: '5px', 
          fontSize: '12px',
          zIndex: 9999,
          border: '1px solid #00ff00'
        }}>
          <div>🚀 Triyak Performance Suite Active</div>
          <div>Monitoring: {monitoring ? '✅' : '❌'}</div>
          <div>Alerts: {alerts ? '✅' : '❌'}</div>
          <div>AI: {ai.enabled !== false ? '✅' : '❌'}</div>
        </div>
      )}
    </div>
  );
};

export default TriyakPerformanceSuite;
