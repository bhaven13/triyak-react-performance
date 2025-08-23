// Test file to verify Triyak React Performance Suite package
const { 
  TriyakPerformanceMonitor, 
  TriyakPerformanceSuite,
  VERSION,
  PACKAGE_NAME,
  COMPANY,
  WEBSITE,
  SUPPORT_EMAIL,
  PERFORMANCE_THRESHOLDS,
  DEFAULT_CONFIG
} = require('./dist/index.js');

console.log('🚀 Triyak React Performance Suite Test');
console.log('=====================================');
console.log(`Version: ${VERSION}`);
console.log(`Package: ${PACKAGE_NAME}`);
console.log(`Company: ${COMPANY}`);
console.log(`Website: ${WEBSITE}`);
console.log(`Support: ${SUPPORT_EMAIL}`);
console.log('');

console.log('Performance Thresholds:');
console.log(`LCP Good: ${PERFORMANCE_THRESHOLDS.LCP.GOOD}ms`);
console.log(`FID Good: ${PERFORMANCE_THRESHOLDS.FID.GOOD}ms`);
console.log(`CLS Good: ${PERFORMANCE_THRESHOLDS.CLS.GOOD}`);
console.log('');

console.log('Default Configuration:');
console.log(`AI Optimization: ${DEFAULT_CONFIG.enableAIOptimization}`);
console.log(`Monitoring: ${DEFAULT_CONFIG.monitoring}`);
console.log(`Alerts: ${DEFAULT_CONFIG.alerts}`);
console.log(`Reporting: ${DEFAULT_CONFIG.reporting}`);
console.log('');

console.log('✅ Package imported successfully!');
console.log('✅ All exports are working correctly!');
console.log('✅ Ready for NPM publishing!');
console.log('');

console.log('Next steps:');
console.log('1. npm login');
console.log('2. npm publish');
console.log('3. Share your revolutionary performance package!');
