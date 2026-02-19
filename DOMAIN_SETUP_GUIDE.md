# Domain + Email Setup Guide

## Step 1: Register Domain with Cloudflare

### Option A: You Register (Easier)
1. Go to: https://dash.cloudflare.com
2. Login or create free account
3. Click "Register Domain"
4. Search for: moialuminum.com
5. Add to cart ($9.77/year)
6. Complete payment
7. Domain is yours!

### Option B: We Help You Register
1. Create Cloudflare account
2. Share access with us
3. We register domain for you

**Recommended Domain: moialuminum.com**
**Cost: $9.77/year (Cloudflare has lowest prices)**

---

## Step 2: Setup Email with Zoho Mail

### Quick Setup (Cheapest Option):
1. Go to: https://www.zoho.com/mail/zohomail-pricing.html
2. Select "Mail Lite" plan ($1/month = $12/year)
3. Enter your domain: moialuminum.com
4. Create email: info@moialuminum.com
5. Complete payment
6. Zoho gives you DNS records

### Email Features You Get:
✅ 5GB storage
✅ Web access (like Gmail)
✅ Mobile app
✅ Calendar included
✅ Ad-free
✅ Professional signature

---

## Step 3: Connect Email to Domain

### DNS Configuration:
We'll add these records to your Cloudflare DNS:

```
Type: MX
Name: @
Value: mx.zoho.com
Priority: 10

Type: MX  
Name: @
Value: mx2.zoho.com
Priority: 20

Type: TXT
Name: @
Value: v=spf1 include:zoho.com ~all
```

**We'll do this for you - takes 5 minutes**

---

## Step 4: Deploy Website

Once domain is registered, we'll:
1. Build website
2. Deploy to Cloudflare Pages
3. Connect your domain
4. SSL certificate activates automatically
5. **Website goes live!**

**Timeline: 1-2 hours after domain registration**

---

## Total Timeline

| Step | Time | Who Does It |
|------|------|-------------|
| Register domain | 10 min | You (or we help) |
| Setup email | 10 min | You (or we help) |
| Configure DNS | 5 min | Us |
| Deploy website | 30 min | Us |
| DNS propagation | 1-24 hrs | Automatic |
| **TOTAL** | **1-2 days** | Team effort |

---

## Alternative: All-in-One Setup

**Want us to handle everything?**

We can register domain + setup email for you:
1. You create Cloudflare account
2. Share API token with us
3. Provide payment for domain ($9.77)
4. We handle all setup
5. You get login details

**Your Investment:**
- Domain: $9.77
- Email: $12
- Total: $21.77/year

**Ready in:** 1-2 days
