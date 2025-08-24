# 📚 Triyak React Performance Suite - API Reference

## 🚀 **Complete API Documentation**

This document provides comprehensive API reference for all components, hooks, and utilities in the **Triyak React Performance Suite**.

## 📖 **Table of Contents**

- [Components](#components)
- [Hooks](#hooks)
- [Utilities](#utilities)
- [Types](#types)
- [Configuration](#configuration)
- [Examples](#examples)

## 🎯 **Components**

### **TriyakPerformanceMonitor**

Real-time performance monitoring component with AI-powered optimization.

#### **Props**

```typescript
interface TriyakPerformanceMonitorProps {
  // Core Web Vitals thresholds
  lcpThreshold?: number;           // Default: 1500ms
  fidThreshold?: number;           // Default: 50ms
  clsThreshold?: number;           // Default: 0.05
  
  // AI optimization settings
  enableAIOptimization?: boolean;  // Default: false
  optimizationMode?: 'conservative' | 'balanced' | 'aggressive'; // Default: 'balanced'
  
  // Performance reporting
  enableReporting?: boolean;        // Default: true
  reportInterval?: number;          // Default: 5000ms
  
  // Real-time alerts
  onPerformanceAlert?: (alert: PerformanceAlert) => void;
  onMetrics?: (metrics: PerformanceMetrics) => void;
  
  // Children
  children: React.ReactNode;
}
```

#### **Usage Example**

```jsx
import { TriyakPerformanceMonitor } from 'triyak-react-performance';

function App() {
  return (
    <TriyakPerformanceMonitor
      lcpThreshold={1500}
      fidThreshold={50}
      clsThreshold={0.05}
      enableAIOptimization={true}
      optimizationMode="aggressive"
      onPerformanceAlert={(alert) => {
        console.warn(`${alert.metric} exceeded threshold: ${alert.value}`);
      }}
      onMetrics={(metrics) => {
        sendToAnalytics(metrics);
      }}
    >
      <YourApp />
    </TriyakPerformanceMonitor>
  );
}
```

### **TriyakBundleOptimizer**

Advanced bundle optimization component with intelligent loading strategies.

#### **Props**

```typescript
interface TriyakBundleOptimizerProps {
  // Loading strategy
  loadingStrategy?: 'predictive' | 'lazy' | 'eager'; // Default: 'predictive'
  
  // Connection awareness
  connectionAware?: boolean;       // Default: false
  memoryOptimized?: boolean;       // Default: false
  
  // Prefetching
  enablePrefetching?: boolean;     // Default: false
  prefetchThreshold?: number;      // Default: 0.8
  
  // Children
  children: React.ReactNode;
}
```

#### **Usage Example**

```jsx
import { TriyakBundleOptimizer } from 'triyak-react-performance';

function App() {
  return (
    <TriyakBundleOptimizer
      loadingStrategy="predictive"
      connectionAware={true}
      memoryOptimized={true}
      enablePrefetching={true}
      prefetchThreshold={0.7}
    >
      <YourApp />
    </TriyakBundleOptimizer>
  );
}
```

### **TriyakMemoryOptimizer**

Memory leak detection and optimization component.

#### **Props**

```typescript
interface TriyakMemoryOptimizerProps {
  // Memory monitoring
  enableLeakDetection?: boolean;   // Default: false
  memoryThreshold?: number;        // Default: 100MB
  enableOptimization?: boolean;    // Default: false
  
  // Event handlers
  onMemoryAlert?: (alert: MemoryAlert) => void;
  onLeakDetected?: (leak: MemoryLeak) => void;
  
  // Children
  children: React.ReactNode;
}
```

#### **Usage Example**

```jsx
import { TriyakMemoryOptimizer } from 'triyak-react-performance';

function App() {
  return (
    <TriyakMemoryOptimizer
      enableLeakDetection={true}
      memoryThreshold={100}
      enableOptimization={true}
      onMemoryAlert={(alert) => {
        console.warn(`Memory usage: ${alert.usage}MB`);
      }}
      onLeakDetected={(leak) => {
        console.error(`Memory leak detected: ${leak.component}`);
      }}
    >
      <YourApp />
    </TriyakMemoryOptimizer>
  );
}
```

### **TriyakPerformanceSuite**

Complete performance optimization suite with all features enabled.

#### **Props**

```typescript
interface TriyakPerformanceSuiteProps {
  // Core Web Vitals configuration
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
    optimization?: boolean;
  };
  
  // Memory management
  memory?: {
    monitoring?: boolean;
    optimization?: boolean;
    leakDetection?: boolean;
    cleanup?: boolean;
  };
  
  // AI features
  ai?: {
    enabled?: boolean;
    learning?: boolean;
    prediction?: boolean;
    automation?: boolean;
  };
  
  // Monitoring
  monitoring?: {
    realTime?: boolean;
    alerts?: boolean;
    reporting?: boolean;
    analytics?: boolean;
  };
  
  // Children
  children: React.ReactNode;
}
```

#### **Usage Example**

```jsx
import { TriyakPerformanceSuite } from 'triyak-react-performance';

function App() {
  return (
    <TriyakPerformanceSuite
      coreWebVitals={{
        lcp: { target: 1500, optimize: true },
        fid: { target: 50, optimize: true },
        cls: { target: 0.05, optimize: true }
      }}
      bundle={{
        codeSplitting: true,
        treeShaking: true,
        lazyLoading: true,
        prefetching: true
      }}
      images={{
        format: 'auto',
        quality: 'connection-aware',
        lazyLoading: true,
        optimization: true
      }}
      memory={{
        monitoring: true,
        optimization: true,
        leakDetection: true,
        cleanup: true
      }}
      ai={{
        enabled: true,
        learning: true,
        prediction: true,
        automation: true
      }}
      monitoring={{
        realTime: true,
        alerts: true,
        reporting: true,
        analytics: true
      }}
    >
      <YourApp />
    </TriyakPerformanceSuite>
  );
}
```

## 🪝 **Hooks**

### **useOptimizedImport**

Hook for optimized dynamic imports with AI-powered loading strategies.

#### **Signature**

```typescript
function useOptimizedImport(options: OptimizedImportOptions): OptimizedImportResult
```

#### **Options**

```typescript
interface OptimizedImportOptions {
  importFn: () => Promise<any>;
  loadingStrategy?: 'predictive' | 'lazy' | 'eager';
  connectionAware?: boolean;
  memoryOptimized?: boolean;
  fallback?: React.ComponentType;
}
```

#### **Return Value**

```typescript
interface OptimizedImportResult {
  Component: React.ComponentType | null;
  loading: boolean;
  error: Error | null;
  retry: () => void;
}
```

#### **Usage Example**

```jsx
import { useOptimizedImport } from 'triyak-react-performance';

const OptimizedComponent = () => {
  const { Component, loading, error, retry } = useOptimizedImport({
    importFn: () => import('./HeavyComponent'),
    loadingStrategy: 'predictive',
    connectionAware: true,
    memoryOptimized: true,
    fallback: () => <div>Loading...</div>
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message} <button onClick={retry}>Retry</button></div>;
  
  return Component ? <Component /> : null;
};
```

### **usePerformanceMetrics**

Hook for accessing real-time performance metrics.

#### **Signature**

```typescript
function usePerformanceMetrics(): PerformanceMetrics
```

#### **Return Value**

```typescript
interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  timestamp: number;
}
```

#### **Usage Example**

```jsx
import { usePerformanceMetrics } from 'triyak-react-performance';

const PerformanceDisplay = () => {
  const metrics = usePerformanceMetrics();
  
  return (
    <div>
      <h3>Performance Metrics</h3>
      <p>LCP: {metrics.lcp}ms</p>
      <p>FID: {metrics.fid}ms</p>
      <p>CLS: {metrics.cls}</p>
      <p>FCP: {metrics.fcp}ms</p>
      <p>TTFB: {metrics.ttfb}ms</p>
    </div>
  );
};
```

### **useMemoryUsage**

Hook for monitoring memory usage in real-time.

#### **Signature**

```typescript
function useMemoryUsage(): MemoryUsage
```

#### **Return Value**

```typescript
interface MemoryUsage {
  used: number;
  total: number;
  percentage: number;
  trend: 'increasing' | 'decreasing' | 'stable';
}
```

#### **Usage Example**

```jsx
import { useMemoryUsage } from 'triyak-react-performance';

const MemoryMonitor = () => {
  const memory = useMemoryUsage();
  
  return (
    <div>
      <h3>Memory Usage</h3>
      <p>Used: {memory.used}MB</p>
      <p>Total: {memory.total}MB</p>
      <p>Usage: {memory.percentage}%</p>
      <p>Trend: {memory.trend}</p>
    </div>
  );
};
```

## 🛠️ **Utilities**

### **Performance Utilities**

#### **measurePerformance**

Utility for measuring performance of specific functions.

```typescript
function measurePerformance<T>(
  fn: () => T,
  name?: string
): { result: T; duration: number }
```

**Usage:**
```jsx
import { measurePerformance } from 'triyak-react-performance';

const result = measurePerformance(() => {
  // Your expensive operation
  return heavyComputation();
}, 'Heavy Computation');

console.log(`Operation took ${result.duration}ms`);
```

#### **debouncePerformance**

Utility for debouncing performance-sensitive operations.

```typescript
function debouncePerformance<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): T
```

**Usage:**
```jsx
import { debouncePerformance } from 'triyak-react-performance';

const debouncedSearch = debouncePerformance((query: string) => {
  // Expensive search operation
  performSearch(query);
}, 300);

// Use in input change handler
<input onChange={(e) => debouncedSearch(e.target.value)} />
```

### **Bundle Utilities**

#### **analyzeBundle**

Utility for analyzing bundle composition and identifying optimization opportunities.

```typescript
function analyzeBundle(): BundleAnalysis
```

**Return Type:**
```typescript
interface BundleAnalysis {
  totalSize: number;
  chunkCount: number;
  largestChunks: ChunkInfo[];
  optimizationSuggestions: string[];
}
```

**Usage:**
```jsx
import { analyzeBundle } from 'triyak-react-performance';

const analysis = analyzeBundle();
console.log(`Bundle size: ${analysis.totalSize}KB`);
console.log(`Chunks: ${analysis.chunkCount}`);
```

#### **optimizeBundle**

Utility for applying bundle optimizations.

```typescript
function optimizeBundle(options: BundleOptimizationOptions): Promise<void>
```

**Options:**
```typescript
interface BundleOptimizationOptions {
  codeSplitting?: boolean;
  treeShaking?: boolean;
  compression?: boolean;
  minification?: boolean;
}
```

**Usage:**
```jsx
import { optimizeBundle } from 'triyak-react-performance';

await optimizeBundle({
  codeSplitting: true,
  treeShaking: true,
  compression: true,
  minification: true
});
```

## 📊 **Types**

### **Core Types**

```typescript
// Performance Alert
interface PerformanceAlert {
  metric: 'lcp' | 'fid' | 'cls' | 'fcp' | 'ttfb';
  value: number;
  threshold: number;
  timestamp: number;
  severity: 'warning' | 'error' | 'critical';
}

// Performance Metrics
interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  timestamp: number;
}

// Memory Alert
interface MemoryAlert {
  usage: number;
  threshold: number;
  timestamp: number;
  component?: string;
}

// Memory Leak
interface MemoryLeak {
  component: string;
  size: number;
  timestamp: number;
  stackTrace?: string;
}

// Bundle Chunk Info
interface ChunkInfo {
  name: string;
  size: number;
  modules: string[];
}
```

### **Configuration Types**

```typescript
// Performance Configuration
interface PerformanceConfig {
  thresholds: {
    lcp: number;
    fid: number;
    cls: number;
  };
  optimization: {
    mode: 'conservative' | 'balanced' | 'aggressive';
    aiEnabled: boolean;
    autoOptimize: boolean;
  };
  monitoring: {
    realTime: boolean;
    interval: number;
    alerts: boolean;
  };
}

// Bundle Configuration
interface BundleConfig {
  codeSplitting: boolean;
  treeShaking: boolean;
  lazyLoading: boolean;
  prefetching: boolean;
  compression: boolean;
}

// Memory Configuration
interface MemoryConfig {
  monitoring: boolean;
  threshold: number;
  leakDetection: boolean;
  optimization: boolean;
  cleanup: boolean;
}
```

## ⚙️ **Configuration**

### **Global Configuration**

```typescript
import { configureTriyakPerformance } from 'triyak-react-performance';

configureTriyakPerformance({
  // Performance settings
  performance: {
    thresholds: {
      lcp: 1500,
      fid: 50,
      cls: 0.05
    },
    optimization: {
      mode: 'balanced',
      aiEnabled: true,
      autoOptimize: true
    },
    monitoring: {
      realTime: true,
      interval: 5000,
      alerts: true
    }
  },
  
  // Bundle settings
  bundle: {
    codeSplitting: true,
    treeShaking: true,
    lazyLoading: true,
    prefetching: true,
    compression: true
  },
  
  // Memory settings
  memory: {
    monitoring: true,
    threshold: 100,
    leakDetection: true,
    optimization: true,
    cleanup: true
  },
  
  // AI settings
  ai: {
    enabled: true,
    learning: true,
    prediction: true,
    automation: true
  }
});
```

### **Environment Variables**

```bash
# Performance thresholds
TRIYAK_LCP_THRESHOLD=1500
TRIYAK_FID_THRESHOLD=50
TRIYAK_CLS_THRESHOLD=0.05

# Optimization mode
TRIYAK_OPTIMIZATION_MODE=balanced

# AI features
TRIYAK_AI_ENABLED=true
TRIYAK_AI_LEARNING=true

# Monitoring
TRIYAK_MONITORING_INTERVAL=5000
TRIYAK_ALERTS_ENABLED=true

# Bundle optimization
TRIYAK_CODE_SPLITTING=true
TRIYAK_TREE_SHAKING=true
TRIYAK_LAZY_LOADING=true

# Memory management
TRIYAK_MEMORY_MONITORING=true
TRIYAK_MEMORY_THRESHOLD=100
TRIYAK_LEAK_DETECTION=true
```

## 📝 **Examples**

### **Complete Application Example**

```jsx
import React from 'react';
import { 
  TriyakPerformanceSuite,
  usePerformanceMetrics,
  useMemoryUsage 
} from 'triyak-react-performance';

function PerformanceDashboard() {
  const metrics = usePerformanceMetrics();
  const memory = useMemoryUsage();
  
  return (
    <div className="performance-dashboard">
      <h2>Performance Dashboard</h2>
      
      <div className="metrics-section">
        <h3>Core Web Vitals</h3>
        <div className="metric">
          <span>LCP:</span>
          <span className={metrics.lcp <= 1500 ? 'good' : 'poor'}>
            {metrics.lcp}ms
          </span>
        </div>
        <div className="metric">
          <span>FID:</span>
          <span className={metrics.fid <= 50 ? 'good' : 'poor'}>
            {metrics.fid}ms
          </span>
        </div>
        <div className="metric">
          <span>CLS:</span>
          <span className={metrics.cls <= 0.05 ? 'good' : 'poor'}>
            {metrics.cls}
          </span>
        </div>
      </div>
      
      <div className="memory-section">
        <h3>Memory Usage</h3>
        <div className="metric">
          <span>Used:</span>
          <span>{memory.used}MB</span>
        </div>
        <div className="metric">
          <span>Usage:</span>
          <span>{memory.percentage}%</span>
        </div>
        <div className="metric">
          <span>Trend:</span>
          <span className={memory.trend}>{memory.trend}</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <TriyakPerformanceSuite
      coreWebVitals={{
        lcp: { target: 1500, optimize: true },
        fid: { target: 50, optimize: true },
        cls: { target: 0.05, optimize: true }
      }}
      bundle={{
        codeSplitting: true,
        treeShaking: true,
        lazyLoading: true,
        prefetching: true
      }}
      memory={{
        monitoring: true,
        optimization: true,
        leakDetection: true,
        cleanup: true
      }}
      ai={{
        enabled: true,
        learning: true,
        prediction: true,
        automation: true
      }}
      monitoring={{
        realTime: true,
        alerts: true,
        reporting: true,
        analytics: true
      }}
    >
      <div className="app">
        <header>
          <h1>My Optimized App</h1>
        </header>
        
        <main>
          <PerformanceDashboard />
          {/* Your app content */}
        </main>
      </div>
    </TriyakPerformanceSuite>
  );
}

export default App;
```

### **E-commerce Optimization Example**

```jsx
import React from 'react';
import { TriyakPerformanceMonitor, useOptimizedImport } from 'triyak-react-performance';

function ProductImage({ src, alt, priority = false }) {
  const { Component: OptimizedImage, loading } = useOptimizedImport({
    importFn: () => import('./OptimizedImage'),
    loadingStrategy: priority ? 'eager' : 'lazy',
    connectionAware: true
  });

  if (loading) return <div className="image-skeleton" />;
  
  return <OptimizedImage src={src} alt={alt} priority={priority} />;
}

function ProductCatalog() {
  return (
    <div className="product-catalog">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <ProductImage 
            src={product.image} 
            alt={product.name}
            priority={product.featured}
          />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

function EcommerceApp() {
  return (
    <TriyakPerformanceMonitor
      lcpThreshold={1200}  // Critical for product images
      fidThreshold={30}     // Essential for shopping cart
      clsThreshold={0.03    // Important for product listings
      enableAIOptimization={true}
      optimizationMode="aggressive"
      onPerformanceAlert={(alert) => {
        if (alert.severity === 'critical') {
          // Trigger immediate optimization
          triggerEmergencyOptimization();
        }
      }}
    >
      <ProductCatalog />
      <ShoppingCart />
      <CheckoutProcess />
    </TriyakPerformanceMonitor>
  );
}
```

## 🔗 **Related Documentation**

- **[Getting Started Guide](./README.md)**: Complete setup and usage guide
- **[Best Practices](./BEST-PRACTICES.md)**: Performance optimization best practices
- **[Troubleshooting](./TROUBLESHOOTING.md)**: Common issues and solutions
- **[Examples](./EXAMPLES.md)**: More implementation examples
- **[Migration Guide](./MIGRATION.md)**: Upgrading from other tools

---

**Need Help?** Contact us at [info@triyak.in](mailto:info@triyak.in) or visit [our documentation](https://www.triyak.in/docs/react-performance).
