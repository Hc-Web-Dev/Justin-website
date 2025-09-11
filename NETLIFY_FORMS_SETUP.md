# Netlify Forms Setup Guide

Your contact form has been configured to use **Netlify Forms** for email delivery. Here's what you need to know:

## ✅ What's Already Done

The contact form is already configured with:
- Form name: `contact`
- Netlify Forms attributes: `data-netlify="true"`
- Spam protection: Honeypot field
- Required field validation
- Proper form encoding

## 🔧 What You Need to Do on Netlify

### 1. Deploy to Netlify
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Deploy your site

### 2. Configure Form Notifications
1. Go to your Netlify dashboard
2. Select your site
3. Go to **Site Settings** → **Forms**
4. Enable form detection
5. Add email notifications:
   - **Email address**: `mtplsa.academy@gmail.com`
   - **Form name**: `contact`

### 3. Form Settings
- **Spam filtering**: Enabled (honeypot protection included)
- **Email notifications**: Send to business email
- **Storage**: Optional (store submissions in Netlify dashboard)

## 📧 Email Format

When someone submits the form, you'll receive an email with:
- **Subject**: New form submission from [Site Name]
- **Fields included**:
  - Name
  - Email
  - Phone
  - Course of Interest
  - Message

## 🔒 Security Features

- **Spam protection**: Honeypot field prevents bot submissions
- **Form validation**: Client-side validation before submission
- **HTTPS required**: Netlify Forms only work on HTTPS sites

## 📊 Monitoring

You can monitor form submissions in your Netlify dashboard:
- View all submissions
- See submission timestamps
- Export form data
- Set up additional notifications

## 🚀 That's It!

Once deployed to Netlify, the form will automatically start working. No additional configuration needed on your end!
