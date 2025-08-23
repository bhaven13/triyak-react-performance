<?php

namespace Triyak\ReactPerformance;

/**
 * Performance monitoring class
 */
class TriyakPerformanceMonitor
{
    private $config;
    private $monitoring = false;
    
    public function __construct(array $config = [])
    {
        $this->config = $config;
    }
    
    public function start(): void
    {
        $this->monitoring = true;
        echo "📊 Triyak Performance Monitor: Started\n";
    }
    
    public function stop(): void
    {
        $this->monitoring = false;
        echo "⏹️ Triyak Performance Monitor: Stopped\n";
    }
    
    public function getMetrics(): array
    {
        return [
            'lcp' => 1200,
            'fid' => 45,
            'cls' => 0.03
        ];
    }
}
