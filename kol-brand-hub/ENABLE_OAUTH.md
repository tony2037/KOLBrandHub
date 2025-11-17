# Quick Guide: Enable Facebook OAuth in Supabase

## The Error You're Seeing

```
{"code":400,"error_code":"validation_failed","msg":"Unsupported provider: provider is not enabled"}
```

This means Facebook OAuth is not enabled in your Supabase project.

## Solution: Enable Facebook OAuth

### Step 1: Go to Supabase Dashboard

1. Open your Supabase project: https://app.supabase.com/project/ohfdylaozoxmlifcuqlr
2. Navigate to **Authentication** → **Providers** (in the left sidebar)

### Step 2: Enable Facebook Provider

1. Scroll down to find **Facebook** in the providers list
2. Click on **Facebook** to expand the configuration
3. Toggle the **Enable Facebook provider** switch to ON
4. You'll see fields for:
   - **Client ID (for OAuth)** - This is your Facebook App ID
   - **Client Secret (for OAuth)** - This is your Facebook App Secret

### Step 3: Get Facebook App Credentials

If you don't have Facebook App credentials yet:

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **My Apps** → **Create App**
3. Choose **Consumer** as the app type
4. Fill in app details and create the app
5. Go to **Settings** → **Basic** to find:
   - **App ID** (this is your Client ID)
   - **App Secret** (click "Show" to reveal - this is your Client Secret)
6. Go to **Products** → **Facebook Login** → **Settings**
7. Add **Valid OAuth Redirect URIs**:
   ```
   https://ohfdylaozoxmlifcuqlr.supabase.co/auth/v1/callback
   ```
   For local development:
   ```
   http://localhost:3000/auth/callback
   ```

### Step 4: Configure in Supabase

1. Copy your **App ID** from Facebook Developers
2. Copy your **App Secret** from Facebook Developers
3. Paste them into the Supabase Facebook provider configuration:
   - **Client ID (for OAuth)**: Paste your Facebook App ID
   - **Client Secret (for OAuth)**: Paste your Facebook App Secret
4. Click **Save**

### Step 5: Test

1. Go back to your login page
2. Click **Continue with Facebook**
3. You should now be redirected to Facebook's login page

## Enable Google OAuth (Optional)

If you also want to enable Google OAuth:

1. In Supabase, go to **Authentication** → **Providers**
2. Find **Google** and click to expand
3. Toggle **Enable Google provider** to ON
4. You'll need:
   - **Client ID (for OAuth)**: From Google Cloud Console
   - **Client Secret (for OAuth)**: From Google Cloud Console
5. See `OAUTH_SETUP.md` for detailed Google OAuth setup instructions

## Troubleshooting

- **Still seeing the error?** Make sure you clicked "Save" after enabling the provider
- **Redirect URI error?** Make sure the redirect URI in Facebook matches exactly: `https://ohfdylaozoxmlifcuqlr.supabase.co/auth/v1/callback`
- **Can't find App Secret?** In Facebook Developers, go to Settings → Basic, and click "Show" next to App Secret

## Quick Links

- Your Supabase Project: https://app.supabase.com/project/ohfdylaozoxmlifcuqlr
- Facebook Developers: https://developers.facebook.com/
- Detailed OAuth Setup: See `OAUTH_SETUP.md`

