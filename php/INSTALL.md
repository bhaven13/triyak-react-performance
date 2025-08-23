# Triyak React Performance Suite - PHP Package

## Installation

```bash
composer require triyak/react-performance
```

## Usage

```php
<?php

require_once 'vendor/autoload.php';

use Triyak\ReactPerformance\TriyakPerformanceSuite;
use Triyak\ReactPerformance\TriyakPerformanceMonitor;

// Initialize the performance suite
$suite = new TriyakPerformanceSuite();

// Start monitoring
$suite->startMonitoring();

// Get performance metrics
$metrics = $suite->getMetrics();
echo "LCP: " . $metrics['lcp'] . "ms\n";
echo "FID: " . $metrics['fid'] . "ms\n";
echo "CLS: " . $metrics['cls'] . "\n";

// Stop monitoring
$suite->stopMonitoring();
```

## Features

- 🚀 **Core Web Vitals Monitoring**: LCP, FID, CLS optimization
- 📊 **Real-time Performance Tracking**: Live metrics and alerts
- 🎯 **Enterprise-Grade**: Built on 500+ website optimizations
- 🤖 **AI-Powered**: Machine learning optimization suggestions

## Support

- **Website**: https://www.triyak.in
- **Email**: info@triyak.in
- **Documentation**: https://www.triyak.in/docs/react-performance
- **GitHub**: https://github.com/bhaven13/triyak-react-performance

## License

MIT License - See LICENSE file for details.
