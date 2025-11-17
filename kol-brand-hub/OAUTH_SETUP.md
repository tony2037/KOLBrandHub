# OAuth Setup Guide

This guide explains how to configure Google and Facebook OAuth providers in your Supabase project.

## Prerequisites

- A Supabase project (already set up)
- Google Cloud Console account (for Google OAuth)
- Facebook Developer account (for Facebook OAuth)

## Setting up Google OAuth

### 1. Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth client ID**
5. Configure the OAuth consent screen if prompted:
   - Choose **External** user type
   - Fill in the required app information
   - Add your email to test users
6. Create OAuth client ID:
   - Application type: **Web application**
   - Name: `KOL Brand Hub`
   - Authorized redirect URIs: 
     ```
     https://ohfdylaozoxmlifcuqlr.supabase.co/auth/v1/callback
     ```
   - For local development, also add:
     ```
     http://localhost:3000/auth/callback
     ```
7. Copy the **Client ID** and **Client Secret**

### 2. Configure in Supabase

1. Go to your Supabase project: https://app.supabase.com/project/ohfdylaozoxmlifcuqlr
2. Navigate to **Authentication** → **Providers**
3. Find **Google** in the list and click to configure
4. Enable Google provider
5. Paste your **Client ID** and **Client Secret** from Google Cloud Console
6. Click **Save**

## Setting up Facebook OAuth

### 1. Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **My Apps** → **Create App**
3. Choose **Consumer** as the app type
4. Fill in app details:
   - App Name: `KOL Brand Hub`
   - Contact Email: Your email
5. After creation, go to **Settings** → **Basic**
6. Add **App Domains**: `supabase.co`
7. Click **Add Platform** → **Website**
8. Add **Site URL**: `https://ohfdylaozoxmlifcuqlr.supabase.co`
9. Go to **Products** → **Facebook Login** → **Settings**
10. Add **Valid OAuth Redirect URIs**:
    ```
    https://ohfdylaozoxmlifcuqlr.supabase.co/auth/v1/callback
    ```
    For local development:
    ```
    http://localhost:3000/auth/callback
    ```
11. Copy the **App ID** and **App Secret** from **Settings** → **Basic**

### 2. Configure in Supabase

1. Go to your Supabase project: https://app.supabase.com/project/ohfdylaozoxmlifcuqlr
2. Navigate to **Authentication** → **Providers**
3. Find **Facebook** in the list and click to configure
4. Enable Facebook provider
5. Paste your **App ID** and **App Secret** from Facebook Developers
6. Click **Save**

## Testing OAuth

After configuring both providers:

1. Start your development server: `npm run dev`
2. Navigate to `/login` or `/signup`
3. Click **Continue with Google** or **Continue with Facebook**
4. You should be redirected to the OAuth provider's login page
5. After authentication, you'll be redirected back to `/dashboard`

## Troubleshooting

### Common Issues

1. **"Redirect URI mismatch"**
   - Make sure the redirect URI in your OAuth provider matches exactly: `https://ohfdylaozoxmlifcuqlr.supabase.co/auth/v1/callback`
   - For local development, use: `http://localhost:3000/auth/callback`

2. **"OAuth provider not enabled"**
   - Double-check that the provider is enabled in Supabase dashboard
   - Verify credentials are correctly entered

3. **"Invalid client credentials"**
   - Verify Client ID/Secret (Google) or App ID/Secret (Facebook) are correct
   - Make sure there are no extra spaces when copying

4. **Facebook App Review**
   - For production use, Facebook requires app review
   - For development/testing, you can add test users in Facebook App Settings

## Production Considerations

- Update redirect URIs to include your production domain
- Complete Facebook App Review for public use
- Configure OAuth consent screen for Google (if not already done)
- Test OAuth flows thoroughly before going live

