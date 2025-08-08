# Quick Formspree Setup (5 minutes)

## Step 1: Create Account
1. Go to https://formspree.io/
2. Click "Get Started Free"
3. Sign up with: **naveenvemula2487@gmail.com**
4. Check your email and verify your account

## Step 2: Create Form
1. Click "New Form" 
2. Form name: "Portfolio Contact"
3. Your email: naveenvemula2487@gmail.com
4. Click "Create Form"

## Step 3: Get Form ID
1. You'll see a form URL like: `https://formspree.io/f/abcd1234`
2. Copy the ID part: `abcd1234`

## Step 4: Update Your Site
1. Open `client/pages/Contact.tsx`
2. Find line 49: `const formspreeId = 'mldejkqw';`
3. Replace `mldejkqw` with your new form ID

Example:
```javascript
const formspreeId = 'abcd1234'; // Your actual form ID
```

## Step 5: Test
- Fill out your contact form
- You should receive the email within 2-3 minutes
- Check spam folder if needed

## Current Status
I've set up a temporary form that should work for testing. But please get your own Formspree form ID for permanent use.
