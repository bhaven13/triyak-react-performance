#!/bin/bash

echo "🚀 Triyak React Performance Suite - GitHub Setup Script"
echo "======================================================"
echo ""

# Check if git remote is already set
if git remote -v | grep -q "origin"; then
    echo "✅ Git remote 'origin' is already set"
    git remote -v
    echo ""
else
    echo "❌ Git remote 'origin' is not set"
    echo ""
    echo "📋 Follow these steps:"
    echo "1. Go to: https://github.com/new"
    echo "2. Repository name: triyak-react-performance"
    echo "3. Description: The world's most advanced React performance optimization toolkit"
    echo "4. Make it PUBLIC (important for backlinks!)"
    echo "5. Don't initialize with README, .gitignore, or license"
    echo "6. Click 'Create repository'"
    echo ""
    echo "After creating, run this command with your repository URL:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/triyak-react-performance.git"
    echo ""
fi

echo "📊 Current Git Status:"
echo "======================"
git status --short
echo ""

echo "🔗 Current Git Remotes:"
echo "======================"
git remote -v
echo ""

echo "📝 Next Steps:"
echo "=============="
echo "1. Create GitHub repository (if not done)"
echo "2. Add remote origin with: git remote add origin <REPO_URL>"
echo "3. Push to GitHub: git push -u origin main"
echo "4. Update NPM package: npm pkg set repository.url=<REPO_URL>"
echo "5. Publish new version: npm version patch && npm publish"
echo ""

echo "🎯 Expected Results:"
echo "==================="
echo "• GitHub Backlink: DA 94+ (extremely high authority)"
echo "• NPM Integration: Seamless linking between platforms"
echo "• SEO Boost: Double backlink power (NPM + GitHub)"
echo "• Community: Developers can star, fork, and contribute"
echo ""

echo "Ready to boost your DA with GitHub + NPM backlinks! 🚀✨"
