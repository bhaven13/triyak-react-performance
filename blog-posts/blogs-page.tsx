import React from 'react';
import { Metadata } from 'next';
import { Navigation } from '@/components/nav';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Tag, ArrowRight, Star, Download, Code, Database, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: "🚀 Enterprise Performance Optimization Blog | Triyak Digital Agency",
  description: "Discover expert insights on React performance optimization, Core Web Vitals, and enterprise-grade solutions. Learn from Bhavendra Singh's 10+ years of experience optimizing 500+ enterprise applications.",
  keywords: [
    "React performance optimization blog",
    "Core Web Vitals optimization",
    "enterprise performance blog",
    "digital marketing blog",
    "performance optimization tips",
    "React development blog",
    "enterprise optimization case studies",
    "Bhavendra Singh blog",
    "Triyak Digital Agency blog",
    "performance monitoring blog"
  ],
  openGraph: {
    title: "🚀 Enterprise Performance Optimization Blog | Triyak Digital Agency",
    description: "Expert insights on React performance optimization and enterprise-grade solutions from Bhavendra Singh.",
    url: "https://www.triyak.in/blog",
    siteName: "Triyak Digital Agency",
    images: [
      {
        url: "https://www.triyak.in/images/triyak-logo2.png",
        width: 1200,
        height: 630,
        alt: "Triyak Digital Agency Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🚀 Enterprise Performance Optimization Blog | Triyak Digital Agency",
    description: "Expert insights on React performance optimization and enterprise-grade solutions.",
    images: ["https://www.triyak.in/images/triyak-logo2.png"],
  },
};

const blogPosts = [
  {
    id: 'npm-package',
    title: "🚀 How I Built the World's Most Advanced React Performance Package on NPM",
    description: "Discover how Bhavendra Singh built triyak-react-performance - the revolutionary NPM package that's transforming React performance optimization. Built on 500+ enterprise website optimizations with 95+ Core Web Vitals scores.",
    category: "React Performance",
    tags: ["React", "Performance", "NPM", "JavaScript", "Core Web Vitals", "Optimization", "Enterprise"],
    author: "Bhavendra Singh",
    publishDate: "2025-08-23",
    readTime: "15 min read",
    featuredImage: "https://www.triyak.in/images/triyak-logo2.png",
    url: "/blog/how-i-built-worlds-most-advanced-react-performance-package-npm",
    platform: "NPM",
    platformIcon: <Download className="w-4 h-4" />,
    platformColor: "bg-red-500",
    stats: {
      da: "89+",
      downloads: "1000+",
      stars: "50+"
    }
  },
  {
    id: 'pypi-package',
    title: "🐍 Building a Revolutionary Python Package: triyak-react-performance on PyPI",
    description: "Discover how Bhavendra Singh created triyak-react-performance for Python - the groundbreaking package bringing enterprise-grade React performance optimization to the Python ecosystem. Built on 500+ enterprise optimizations.",
    category: "Python Development",
    tags: ["Python", "PyPI", "React", "Performance", "Machine Learning", "Data Analysis", "Enterprise"],
    author: "Bhavendra Singh",
    publishDate: "2025-08-23",
    readTime: "18 min read",
    featuredImage: "https://www.triyak.in/images/triyak-logo2.png",
    url: "/blog/building-revolutionary-python-package-triyak-react-performance-pypi",
    platform: "PyPI",
    platformIcon: <Code className="w-4 h-4" />,
    platformColor: "bg-blue-500",
    stats: {
      da: "89+",
      downloads: "500+",
      stars: "25+"
    }
  },
  {
    id: 'packagist-package',
    title: "🐘 Revolutionizing PHP Development: triyak-react-performance on Packagist",
    description: "In the dynamic world of PHP development, performance optimization has always been a critical concern. Discover how we've created triyak/react-performance - a revolutionary PHP package that's now live on Packagist.",
    category: "PHP Development",
    tags: ["PHP", "Packagist", "React", "Performance", "Composer", "WordPress", "Laravel", "Enterprise"],
    author: "Bhavendra Singh",
    publishDate: "2025-08-23",
    readTime: "16 min read",
    featuredImage: "https://www.triyak.in/images/triyak-logo2.png",
    url: "/blog/revolutionizing-php-development-triyak-react-performance-packagist",
    platform: "Packagist",
    platformIcon: <Database className="w-4 h-4" />,
    platformColor: "bg-purple-500",
    stats: {
      da: "89+",
      downloads: "300+",
      stars: "15+"
    }
  },
  {
    id: 'github-repository',
    title: "🚀 Building an Open Source Revolution: triyak-react-performance on GitHub",
    description: "Open source development has always been at the heart of innovation in the tech industry. Discover our open source journey with triyak-react-performance - a revolutionary GitHub repository that's transforming how developers approach React performance optimization.",
    category: "Open Source",
    tags: ["GitHub", "Open Source", "React", "Performance", "Community", "Collaboration", "Enterprise"],
    author: "Bhavendra Singh",
    publishDate: "2025-08-23",
    readTime: "20 min read",
    featuredImage: "https://www.triyak.in/images/triyak-logo2.png",
    url: "/blog/building-open-source-revolution-triyak-react-performance-github",
    platform: "GitHub",
    platformIcon: <Globe className="w-4 h-4" />,
    platformColor: "bg-gray-800",
    stats: {
      da: "89+",
      downloads: "2000+",
      stars: "100+"
    }
  }
];

const categories = [
  { name: "All", count: blogPosts.length, active: true },
  { name: "React Performance", count: 1, active: false },
  { name: "Python Development", count: 1, active: false },
  { name: "PHP Development", count: 1, active: false },
  { name: "Open Source", count: 1, active: false },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            🚀 Enterprise Performance Blog
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Expert insights on React performance optimization, Core Web Vitals, and enterprise-grade solutions
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Learn from <strong>Bhavendra Singh's</strong> 10+ years of experience optimizing 500+ enterprise applications
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90">Enterprise Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold">95+</div>
              <div className="text-sm opacity-90">Core Web Vitals Score</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold">300-500%</div>
              <div className="text-sm opacity-90">Performance Improvement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  category.active
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white shadow-lg hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className={`absolute top-4 right-4 ${post.platformColor} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2`}>
                    {post.platformIcon}
                    {post.platform}
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-medium">{post.stats.da} DA</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl leading-tight group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.publishDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{post.stats.downloads}</div>
                      <div className="text-xs text-gray-500">Downloads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{post.stats.stars}</div>
                      <div className="text-xs text-gray-500">Stars</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{post.stats.da}</div>
                      <div className="text-xs text-gray-500">Domain Authority</div>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Button 
                    className="w-full group-hover:bg-blue-600 transition-colors duration-200"
                    asChild
                  >
                    <a href={post.url}>
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Applications?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 500+ enterprise clients who've achieved 95+ Core Web Vitals scores and 300-500% performance improvements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-5 h-5 mr-2" />
              Install Packages
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Code className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
