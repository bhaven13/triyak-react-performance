<?php

namespace Triyak\ReactPerformance\Tests;

use PHPUnit\Framework\TestCase;
use Triyak\ReactPerformance\TriyakPerformanceSuite;
use Triyak\ReactPerformance\TriyakPerformanceMonitor;

class TriyakPerformanceSuiteTest extends TestCase
{
    public function testPerformanceSuiteCreation()
    {
        $suite = new TriyakPerformanceSuite();
        $this->assertInstanceOf(TriyakPerformanceSuite::class, $suite);
    }
    
    public function testPerformanceMonitorCreation()
    {
        $monitor = new TriyakPerformanceMonitor();
        $this->assertInstanceOf(TriyakPerformanceMonitor::class, $monitor);
    }
    
    public function testMetricsRetrieval()
    {
        $suite = new TriyakPerformanceSuite();
        $metrics = $suite->getMetrics();
        
        $this->assertIsArray($metrics);
        $this->assertArrayHasKey('lcp', $metrics);
        $this->assertArrayHasKey('fid', $metrics);
        $this->assertArrayHasKey('cls', $metrics);
    }
}
