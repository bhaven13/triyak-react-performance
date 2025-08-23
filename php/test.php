<?php

require_once 'vendor/autoload.php';

use Triyak\ReactPerformance\TriyakPerformanceSuite;
use Triyak\ReactPerformance\TriyakPerformanceMonitor;

// Test the performance suite
$suite = new TriyakPerformanceSuite();
$suite->startMonitoring();
$metrics = $suite->getMetrics();
echo "Metrics: " . json_encode($metrics) . "\n";
$suite->stopMonitoring();

// Test the monitor
$monitor = new TriyakPerformanceMonitor();
$monitor->start();
$monitorMetrics = $monitor->getMetrics();
echo "Monitor Metrics: " . json_encode($monitorMetrics) . "\n";
$monitor->stop();
