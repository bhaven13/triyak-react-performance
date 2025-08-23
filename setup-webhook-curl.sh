#!/bin/bash

# 🚀 Triyak React Performance - Packagist Webhook Setup Script (curl version)
# This script automatically sets up the GitHub webhook for Packagist integration

echo "🚀 Setting up Packagist webhook for automatic updates..."

# GitHub repository details
REPO_OWNER="bhaven13"
REPO_NAME="triyak-react-performance"
WEBHOOK_URL="https://packagist.org/api/update-package"

echo "📋 Repository: $REPO_OWNER/$REPO_NAME"
echo "🔗 Webhook URL: $WEBHOOK_URL"

echo ""
echo "🔐 To set up the webhook, you need a GitHub Personal Access Token:"
echo "1. Go to: https://github.com/settings/tokens"
echo "2. Click 'Generate new token (classic)'"
echo "3. Select 'repo' scope"
echo "4. Copy the token"
echo ""

read -p "Enter your GitHub Personal Access Token: " GITHUB_TOKEN

if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ No token provided. Exiting."
    exit 1
fi

echo ""
echo "🔗 Creating Packagist webhook..."

# Create the webhook using GitHub API
RESPONSE=$(curl -s -w "%{http_code}" \
  -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "packagist-webhook",
    "active": true,
    "events": ["push"],
    "config": {
      "url": "'$WEBHOOK_URL'",
      "content_type": "application/json",
      "secret": "",
      "insecure_ssl": "0"
    }
  }' \
  "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/hooks")

HTTP_CODE="${RESPONSE: -3}"
RESPONSE_BODY="${RESPONSE%???}"

if [ "$HTTP_CODE" = "201" ]; then
    echo "✅ Packagist webhook created successfully!"
    echo "🔗 Webhook URL: $WEBHOOK_URL"
    echo "📊 Repository: https://github.com/$REPO_OWNER/$REPO_NAME"
    echo "🚀 Packagist will now auto-update on every push!"
else
    echo "❌ Failed to create webhook. HTTP Code: $HTTP_CODE"
    echo "Response: $RESPONSE_BODY"
    echo ""
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
