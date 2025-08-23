import React, { useEffect, useState, useCallback, useRef } from 'react';
import { 
  PerformanceMetrics, 
  PerformanceAlert, 
  PerformanceConfig,
  PerformanceReport
} from '../types/performance';
import { PERFORMANCE_THRESHOLDS } from '../constants/performanceThresholds';

interface TriyakPerformanceMonitorProps {
  // Performance thresholds
  lcpThreshold?: number;
  fidThreshold?: number;
  clsThreshold?: number;
  ttfbThreshold?: number;
  fcpThreshold?: number;
  
  // AI optimization settings
  enableAIOptimization?: boolean;
  optimizationMode?: 'conservative' | 'aggressive' | 'custom';
  
  // Monitoring settings
  monitoring?: boolean;
  alerts?: boolean;
  reporting?: boolean;
  autoOptimize?: boolean;
  
  // Callbacks
  onPerformanceAlert?: (alert: PerformanceAlert) => void;
  onMetrics?: (metrics: PerformanceMetrics) => void;
  onReport?: (report: PerformanceReport) => void;
  onOptimization?: (optimization: any) => void;
  
  // Children
  children: React.ReactNode;
  
  // Custom configuration
  config?: Partial<PerformanceConfig>;
}

const TriyakPerformanceMonitor: React.FC<TriyakPerformanceMonitorProps> = ({
  lcpThreshold = PERFORMANCE_THRESHOLDS.LCP.ENTERPRISE_TARGET,
  fidThreshold = PERFORMANCE_THRESHOLDS.FID.ENTERPRISE_TARGET,
  clsThreshold = PERFORMANCE_THRESHOLDS.CLS.ENTERPRISE_TARGET,
  ttfbThreshold = PERFORMANCE_THRESHOLDS.TTFB.ENTERPRISE_TARGET,
  fcpThreshold = PERFORMANCE_THRESHOLDS.FCP.ENTERPRISE_TARGET,
  
  enableAIOptimization = true,
  optimizationMode = 'aggressive',
  
  monitoring = true,
  alerts = true,
  reporting = true,
  autoOptimize = true,
  
  onPerformanceAlert,
  onMetrics,
  onReport,
  onOptimization,
  
  children,
  
  config = {}
}) => {
  // State for performance metrics
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
    timestamp: Date.now()
  });
  
  // State for alerts and reports
  const [performanceAlerts, setPerformanceAlerts] = useState<PerformanceAlert[]>([]);
  const [reports, setReports] = useState<PerformanceReport[]>([]);
  
  // Refs for performance observers
  const lcpObserverRef = useRef<PerformanceObserver | null>(null);
  const fidObserverRef = useRef<PerformanceObserver | null>(null);
  const clsObserverRef = useRef<PerformanceObserver | null>(null);
  const navigationObserverRef = useRef<PerformanceObserver | null>(null);
  const paintObserverRef = useRef<PerformanceObserver | null>(null);
  
  // Configuration
  const finalConfig: PerformanceConfig = {
    enableAIOptimization,
    optimizationMode,
    monitoring,
    alerts,
    reporting,
    autoOptimize,
    ...config
  };

  // Calculate performance score
  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (40% weight)
    if (metrics.lcp <= PERFORMANCE_THRESHOLDS.LCP.GOOD) {
      score -= 0;
    } else if (metrics.lcp <= PERFORMANCE_THRESHOLDS.LCP.NEEDS_IMPROVEMENT) {
      score -= 20;
    } else {
      score -= 40;
    }
    
    // FID scoring (30% weight)
    if (metrics.fid <= PERFORMANCE_THRESHOLDS.FID.GOOD) {
      score -= 0;
    } else if (metrics.fid <= PERFORMANCE_THRESHOLDS.FID.NEEDS_IMPROVEMENT) {
      score -= 15;
    } else {
      score -= 30;
    }
    
    // CLS scoring (30% weight)
    if (metrics.cls <= PERFORMANCE_THRESHOLDS.CLS.GOOD) {
      score -= 0;
    } else if (metrics.cls <= PERFORMANCE_THRESHOLDS.CLS.NEEDS_IMPROVEMENT) {
      score -= 15;
    } else {
      score -= 30;
    }
    
    return Math.max(0, score);
  }, []);

  // Calculate performance grade
  const calculateGrade = useCallback((score: number): 'A' | 'B' | 'C' | 'D' | 'F' => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, []);

  // Generate performance report
  const generateReport = useCallback((metrics: PerformanceMetrics): PerformanceReport => {
    const score = calculateScore(metrics);
    const grade = calculateGrade(score);
    
    return {
      metrics,
      alerts: performanceAlerts,
      optimizations: [], // Will be populated by optimization engine
      score,
      grade,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };
  }, [performanceAlerts, calculateScore, calculateGrade]);

  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
    if (!finalConfig.monitoring || !('PerformanceObserver' in window)) return;

    // Monitor LCP (Largest Contentful Paint)
    try {
      lcpObserverRef.current = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const lcp = entry.startTime;
          setMetrics(prev => ({ ...prev, lcp, timestamp: Date.now() }));
          
          // Check threshold and generate alert
          if (alerts && lcp > lcpThreshold) {
            const alert: PerformanceAlert = {
              metric: 'lcp',
              value: lcp,
              threshold: lcpThreshold,
              severity: lcp > lcpThreshold * 1.5 ? 'critical' : 'warning',
              timestamp: Date.now(),
              recommendation: `Optimize LCP by reducing image sizes, implementing resource hints, and optimizing server response times. Target: < ${lcpThreshold}ms`
            };
            
            setPerformanceAlerts(prev => [...prev, alert]);
            onPerformanceAlert?.(alert);
          }
        }
      });
      lcpObserverRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('Triyak Performance Monitor: LCP monitoring failed:', error);
    }

    // Monitor FID (First Input Delay)
    try {
      fidObserverRef.current = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fid = (entry as any).processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid, timestamp: Date.now() }));
          
          // Check threshold and generate alert
          if (alerts && fid > fidThreshold) {
            const alert: PerformanceAlert = {
              metric: 'fid',
              value: fid,
              threshold: fidThreshold,
              severity: fid > fidThreshold * 1.5 ? 'critical' : 'warning',
              timestamp: Date.now(),
              recommendation: `Optimize FID by reducing JavaScript execution time, implementing code splitting, and using web workers for heavy computations. Target: < ${fidThreshold}ms`
            };
            
            setPerformanceAlerts(prev => [...prev, alert]);
            onPerformanceAlert?.(alert);
          }
        }
      });
      fidObserverRef.current.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('Triyak Performance Monitor: FID monitoring failed:', error);
    }

    // Monitor CLS (Cumulative Layout Shift)
    try {
      clsObserverRef.current = new PerformanceObserver((list) => {
        let cls = 0;
        for (const entry of list.getEntries()) {
          cls += (entry as any).value;
        }
        setMetrics(prev => ({ ...prev, cls, timestamp: Date.now() }));
        
        // Check threshold and generate alert
        if (alerts && cls > clsThreshold) {
          const alert: PerformanceAlert = {
            metric: 'cls',
            value: cls,
            threshold: clsThreshold,
            severity: cls > clsThreshold * 1.5 ? 'critical' : 'warning',
            timestamp: Date.now(),
            recommendation: `Optimize CLS by setting explicit dimensions for images and ads, avoiding inserting content above existing content, and using CSS transforms for animations. Target: < ${clsThreshold}`
          };
          
          setPerformanceAlerts(prev => [...prev, alert]);
          onPerformanceAlert?.(alert);
        }
      });
      clsObserverRef.current.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Triyak Performance Monitor: CLS monitoring failed:', error);
    }

    // Monitor TTFB (Time to First Byte)
    try {
      navigationObserverRef.current = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const navigationEntry = entry as PerformanceNavigationTiming;
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          setMetrics(prev => ({ ...prev, ttfb, timestamp: Date.now() }));
          
          // Check threshold and generate alert
          if (alerts && ttfb > ttfbThreshold) {
            const alert: PerformanceAlert = {
              metric: 'ttfb',
              value: ttfb,
              threshold: ttfbThreshold,
              severity: ttfb > ttfbThreshold * 1.5 ? 'critical' : 'warning',
              timestamp: Date.now(),
              recommendation: `Optimize TTFB by improving server response times, implementing caching strategies, and optimizing database queries. Target: < ${ttfbThreshold}ms`
            };
            
            setPerformanceAlerts(prev => [...prev, alert]);
            onPerformanceAlert?.(alert);
          }
        }
      });
      navigationObserverRef.current.observe({ entryTypes: ['navigation'] });
    } catch (error) {
      console.warn('Triyak Performance Monitor: TTFB monitoring failed:', error);
    }

    // Monitor FCP (First Contentful Paint)
    try {
      paintObserverRef.current = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            const fcp = entry.startTime;
            setMetrics(prev => ({ ...prev, fcp, timestamp: Date.now() }));
            
            // Check threshold and generate alert
            if (alerts && fcp > fcpThreshold) {
              const alert: PerformanceAlert = {
                metric: 'fcp',
                value: fcp,
                threshold: fcpThreshold,
                severity: fcp > fcpThreshold * 1.5 ? 'critical' : 'warning',
                timestamp: Date.now(),
                recommendation: `Optimize FCP by reducing critical resources, implementing resource hints, and optimizing CSS delivery. Target: < ${fcpThreshold}ms`
              };
              
              setPerformanceAlerts(prev => [...prev, alert]);
              onPerformanceAlert?.(alert);
            }
          }
        }
      });
      paintObserverRef.current.observe({ entryTypes: ['paint'] });
    } catch (error) {
      console.warn('Triyak Performance Monitor: FCP monitoring failed:', error);
    }
  }, [finalConfig.monitoring, alerts, lcpThreshold, fidThreshold, clsThreshold, ttfbThreshold, fcpThreshold, onPerformanceAlert]);

  // Send metrics to parent
  useEffect(() => {
    if (metrics.lcp > 0 || metrics.fid > 0 || metrics.cls > 0) {
      onMetrics?.(metrics);
      
      // Generate and send report if reporting is enabled
      if (finalConfig.reporting) {
        const report = generateReport(metrics);
        setReports(prev => [...prev, report]);
        onReport?.(report);
      }
    }
  }, [metrics, finalConfig.reporting, generateReport, onMetrics, onReport]);

  // Start monitoring when component mounts
  useEffect(() => {
    monitorCoreWebVitals();
    
    // Cleanup function
    return () => {
      lcpObserverRef.current?.disconnect();
      fidObserverRef.current?.disconnect();
      clsObserverRef.current?.disconnect();
      navigationObserverRef.current?.disconnect();
      paintObserverRef.current?.disconnect();
    };
  }, [monitorCoreWebVitals]);

  // AI-powered optimization (placeholder for future implementation)
  useEffect(() => {
    if (finalConfig.enableAIOptimization && finalConfig.autoOptimize) {
      // This would integrate with Triyak's AI optimization engine
      // For now, we'll log that AI optimization is enabled
      console.log('Triyak Performance Monitor: AI optimization enabled');
    }
  }, [finalConfig.enableAIOptimization, finalConfig.autoOptimize]);

  // Render children with performance context
  return (
    <div className="triyak-performance-monitor" data-version="1.0.0">
      {children}
      
      {/* Hidden performance data for debugging */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ display: 'none' }}>
          <div>LCP: {metrics.lcp}ms</div>
          <div>FID: {metrics.fid}ms</div>
          <div>CLS: {metrics.cls}</div>
          <div>TTFB: {metrics.ttfb}ms</div>
          <div>FCP: {metrics.fcp}ms</div>
          <div>Alerts: {performanceAlerts.length}</div>
          <div>Reports: {reports.length}</div>
        </div>
      )}
    </div>
  );
};

export default TriyakPerformanceMonitor;
