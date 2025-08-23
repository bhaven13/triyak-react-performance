import React from 'react';
import { TriyakPerformanceSuite } from '../src';

// Example React application with Triyak Performance Suite
const ExampleApp: React.FC = () => {
  return (
    <TriyakPerformanceSuite
      // Enable all optimizations
      enableAll={true}
      
      // Performance monitoring
      monitoring={true}
      
      // Optimization recommendations
      recommendations={true}
      
      // Performance alerts
      alerts={true}
      
      // Core Web Vitals optimization
      coreWebVitals={{
        lcp: { target: 1500, optimize: true },
        fid: { target: 50, optimize: true },
        cls: { target: 0.05, optimize: true }
      }}
      
      // Bundle optimization
      bundle={{
        codeSplitting: true,
        treeShaking: true,
        lazyLoading: true,
        prefetching: true
      }}
      
      // Image optimization
      images={{
        format: 'auto',
        quality: 'connection-aware',
        lazyLoading: true,
        preloading: true
      }}
      
      // Memory optimization
      memory={{
        monitoring: true,
        optimization: true,
        leakDetection: true
      }}
      
      // AI optimization
      ai={{
        enabled: true,
        learning: true,
        prediction: true,
        automation: true
      }}
    >
      <div className="app">
        <header className="app-header">
          <h1>🚀 Triyak Performance Suite Demo</h1>
          <p>Experience enterprise-grade React performance optimization</p>
        </header>
        
        <main className="app-main">
          <section className="hero-section">
            <h2>Revolutionary Performance Optimization</h2>
            <p>
              Built on 10+ years of enterprise optimization experience at{' '}
              <a href="https://www.triyak.in" target="_blank" rel="noopener noreferrer">
                Triyak Digital Agency
              </a>
            </p>
          </section>
          
          <section className="features-section">
            <h3>Key Features</h3>
            <ul>
              <li>✅ Real-time Core Web Vitals monitoring</li>
              <li>✅ AI-powered performance optimization</li>
              <li>✅ Advanced bundle optimization</li>
              <li>✅ Memory leak detection and prevention</li>
              <li>✅ Connection-aware image optimization</li>
              <li>✅ Enterprise-grade performance reporting</li>
            </ul>
          </section>
          
          <section className="results-section">
            <h3>Real-World Results</h3>
            <div className="results-grid">
              <div className="result-card">
                <h4>Amazon India</h4>
                <p>400% mobile performance improvement</p>
                <span className="score">95+ PageSpeed</span>
              </div>
              <div className="result-card">
                <h4>Reliance Digital</h4>
                <p>60% JavaScript execution time reduction</p>
                <span className="score">98 PageSpeed</span>
              </div>
              <div className="result-card">
                <h4>Tech Mahindra</h4>
                <p>70% bundle size reduction</p>
                <span className="score">96 PageSpeed</span>
              </div>
            </div>
          </section>
          
          <section className="cta-section">
            <h3>Ready to Transform Your React App?</h3>
            <p>Join 500+ businesses that have achieved market dominance with our proprietary optimization techniques.</p>
            <div className="cta-buttons">
              <a 
                href="https://www.triyak.in/contact" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button primary"
              >
                Get Started Today
              </a>
              <a 
                href="https://www.triyak.in/docs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                View Documentation
              </a>
            </div>
          </section>
        </main>
        
        <footer className="app-footer">
          <p>
            Built with ❤️ by{' '}
            <a href="https://www.triyak.in" target="_blank" rel="noopener noreferrer">
              Triyak Digital Agency
            </a>
            {' '}- India's Premier Digital Marketing Company
          </p>
          <p>
            <strong>Contact:</strong>{' '}
            <a href="mailto:support@triyak.in">support@triyak.in</a> |{' '}
            <a href="tel:+919876543210">+91-98765-43210</a>
          </p>
        </footer>
      </div>
    </TriyakPerformanceSuite>
  );
};

export default ExampleApp;
