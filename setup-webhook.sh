#!/bin/bash

# 🚀 Triyak React Performance - Packagist Webhook Setup Script
# This script automatically sets up the GitHub webhook for Packagist integration

echo "🚀 Setting up Packagist webhook for automatic updates..."

# GitHub repository details
REPO_OWNER="bhaven13"
REPO_NAME="triyak-react-performance"
WEBHOOK_URL="https://packagist.org/api/update-package"

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI not found. Installing..."
    # Try to install GitHub CLI
    if command -v brew &> /dev/null; then
        brew install gh
    else
        echo "❌ Please install GitHub CLI manually: https://cli.github.com/"
        exit 1
    fi
fi

# Check if user is authenticated
if ! gh auth status &> /dev/null; then
    echo "🔐 Please authenticate with GitHub first:"
    gh auth login
fi

echo "✅ GitHub CLI authenticated successfully!"

# Create the webhook
echo "🔗 Creating Packagist webhook..."

gh api repos/$REPO_OWNER/$REPO_NAME/hooks \
  --method POST \
  --field name="packagist-webhook" \
  --field active=true \
  --field events='["push"]' \
  --field config='{"url":"'$WEBHOOK_URL'","content_type":"application/json","secret":"","insecure_ssl":"0"}' \
  --field events='["push"]'

if [ $? -eq 0 ]; then
    echo "✅ Packagist webhook created successfully!"
    echo "🔗 Webhook URL: $WEBHOOK_URL"
    echo "📊 Repository: https://github.com/$REPO_OWNER/$REPO_NAME"
    echo "🚀 Packagist will now auto-update on every push!"
else
    echo "❌ Failed to create webhook. Please check your GitHub permissions."
    echo "💡 You can also set it up manually at:"
    echo "   https://github.com/$REPO_OWNER/$REPO_NAME/settings/hooks"
fi

echo ""
echo "🎯 Next steps:"
echo "1. Go to: https://packagist.org/packages/submit"
echo "2. Enter: https://github.com/$REPO_OWNER/$REPO_NAME"
echo "3. Packagist will automatically sync with the webhook!"
echo ""
echo "🚀 Your PHP package will then have DA 89+ backlink to triyak.in!"
