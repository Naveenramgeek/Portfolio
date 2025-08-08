# EmailJS Setup Instructions

Your contact form is now ready! Just follow these steps to complete the setup:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Connect Your Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup wizard to connect your email

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note the Template ID

## Step 4: Get Your Credentials
1. **Service ID**: Found in Email Services section
2. **Template ID**: Found in Email Templates section
3. **Public Key**: Go to Account > API Keys

## Step 5: Update Contact Form
Open `client/pages/Contact.tsx` and replace these placeholders:

```javascript
// Line ~34: publicKey: "YOUR_PUBLIC_KEY"
// Line ~82: "YOUR_SERVICE_ID"
// Line ~83: "YOUR_TEMPLATE_ID"
// Line ~87: publicKey: "YOUR_PUBLIC_KEY"

Replace all instances of:
"YOUR_SERVICE_ID"    // Replace with your Service ID
"YOUR_TEMPLATE_ID"   // Replace with your Template ID
"YOUR_PUBLIC_KEY"    // Replace with your Public Key (appears twice)
```

## Step 6: Test
1. Fill out your contact form
2. Check if email arrives at your connected email address
3. Verify the toast notifications work correctly

## Optional: Set Reply-To
In your EmailJS template, you can add the sender's email as reply-to:
- In template editor, go to Settings
- Set "Reply To" field to: `{{from_email}}`

That's it! Your contact form will now send emails directly from the frontend without any server setup.
