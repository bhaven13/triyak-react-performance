# Packagist Webhook Configuration

## Automatic Updates Setup

This repository is configured to automatically update Packagist whenever changes are pushed to the main branch.

## Webhook Configuration

### GitHub Actions Workflow
- **File**: `.github/workflows/packagist-webhook.yml`
- **Triggers**: Push to main branch
- **Actions**: Automatically updates Packagist

### Manual Webhook Setup (Alternative)

If you prefer manual webhook setup:

1. **Go to**: https://packagist.org/profile/
2. **Click**: "Show API Token"
3. **Copy**: Your API token
4. **Go to**: https://github.com/bhaven13/triyak-react-performance/settings/hooks
5. **Add webhook**:
   - **Payload URL**: `https://packagist.org/api/update-package`
   - **Content type**: `application/json`
   - **Secret**: Your Packagist API token
   - **Events**: Just the push event

## Current Status

✅ **Package**: triyak/react-performance  
✅ **Repository**: https://github.com/bhaven13/triyak-react-performance  
✅ **Auto-updates**: Configured via GitHub Actions  
✅ **Webhook**: Automatic Packagist synchronization  

## Manual Update (if needed)

```bash
# Trigger manual update
curl -X POST "https://packagist.org/api/update-package" \
  -H "Content-Type: application/json" \
  -d '{"repository":{"url":"https://github.com/bhaven13/triyak-react-performance"}}'
```

## Support

- **Website**: https://www.triyak.in
- **Email**: info@triyak.in
- **Documentation**: https://www.triyak.in/docs/react-performance
