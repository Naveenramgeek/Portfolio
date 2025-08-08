# Formspree Email Setup Instructions

Your contact form is now configured to use Formspree for reliable email delivery! Just follow these simple steps:

## Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account using your email: **naveenvemula2487@gmail.com**
3. Verify your email address

## Step 2: Create New Form
1. Click "New Form" in your Formspree dashboard
2. Enter form details:
   - **Form Name**: "Portfolio Contact Form"
   - **Email**: naveenvemula2487@gmail.com (this is where emails will be sent)
3. Click "Create Form"

## Step 3: Get Your Form ID
1. In your form dashboard, you'll see a form endpoint like:
   ```
   https://formspree.io/f/abcd1234
   ```
2. Copy the form ID (the part after `/f/` - e.g., `abcd1234`)

## Step 4: Update Your Contact Form
1. Open `client/pages/Contact.tsx`
2. Find line ~45: `const formspreeId = 'YOUR_FORM_ID';`
3. Replace `YOUR_FORM_ID` with your actual form ID

Example:
```javascript
// Replace this:
const formspreeId = 'YOUR_FORM_ID';

// With this (using your actual form ID):
const formspreeId = 'abcd1234';
```

**Important:** The form ID is just the part after `/f/` in your Formspree URL!

## Step 5: Test Your Form
1. Fill out your contact form on your website
2. Submit the form
3. Check your email inbox (naveenvemula2487@gmail.com)
4. You should receive the message within a few minutes!

## Step 6: Optional Customizations

### Email Templates
In Formspree dashboard, you can:
- Customize email subject lines
- Add auto-reply messages to visitors
- Set up email notifications

### Spam Protection
Formspree includes built-in spam protection, but you can also:
- Enable reCAPTCHA
- Set up custom spam filters
- Whitelist/blacklist domains

### Free Plan Limits
- 50 submissions per month (free)
- Upgrade to paid plans for more submissions
- All emails go to your specified email address

## That's It!
Once you update the form ID, visitors can send you messages directly through your contact form, and you'll receive them in your inbox automatically!

## Troubleshooting
- **Not receiving emails?** Check your spam folder
- **Form not working?** Verify the form ID is correct
- **Need help?** Formspree has excellent documentation and support
