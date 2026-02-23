# TRADITIONAL HOSTING DEPLOYMENT GUIDE

## 🎯 DEPLOYMENT METHOD: FTP + cPanel

This guide shows you how to deploy your MOI website to traditional hosting (Hostinger, Namecheap, Bluehost, etc.)

---

## 📋 PREREQUISITES

✅ Hosting account (Hostinger recommended - $35.88/year)
✅ Domain name (moialuminum.com)
✅ FTP credentials (from hosting provider)
✅ Website files (we have them ready)

---

## 🚀 DEPLOYMENT STEPS

### Step 1: Get Hosting Account (10 minutes)

1. **Go to Hostinger**: https://www.hostinger.com
2. **Choose Plan**: Premium Shared Hosting ($2.99/month)
3. **Select Domain**: moialuminum.com (free first year)
4. **Complete Payment**: Credit card ($35.88 for first year)
5. **Receive Email**: Login credentials sent to your email

### Step 2: Access cPanel (2 minutes)

1. **Login**: Go to https://hpanel.hostinger.com
2. **Enter**: Email + password from welcome email
3. **Dashboard**: You'll see cPanel icon
4. **Click**: "File Manager" or "FTP Accounts"

### Step 3: Get FTP Credentials (3 minutes)

**In cPanel**:
1. Find **"FTP Accounts"**
2. Click **"Configure FTP Client"**
3. You'll see:
   ```
   Host: ftp.moialuminum.com (or your-domain.com)
   Username: yourusername@moialuminum.com
   Password: [your password]
   Port: 21 (FTP) or 22 (SFTP)
   ```
4. **Save these credentials** - you'll need them!

### Step 4: Download FTP Client (5 minutes)

**Option A: FileZilla (Recommended - Free)**
- Download: https://filezilla-project.org/download.php?type=client
- Install on your computer
- Easy drag-and-drop interface

**Option B: Use cPanel File Manager (No download needed)**
- Already in your cPanel
- Upload directly via browser
- Slower but no software needed

### Step 5: Connect to Your Server (2 minutes)

**Using FileZilla**:
1. Open FileZilla
2. Enter:
   - Host: `ftp.moialuminum.com`
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: `21`
3. Click **"Quickconnect"**
4. You're connected!

**Using cPanel File Manager**:
1. Login to cPanel
2. Click **"File Manager"**
3. Navigate to **"public_html"** folder
4. You're ready to upload!

### Step 6: Prepare Website Files (We do this)

We need to export your website to static files:

```bash
# Convert Hono app to static HTML
npm run build

# This creates a 'dist' folder with:
- index.html (main page)
- static/ (CSS, JS, images)
- ciie-poster.html
- exhibition-poster.html
```

### Step 7: Upload Files (10 minutes)

**Using FileZilla**:
1. **Left side**: Your computer (local)
2. **Right side**: Server (remote)
3. **Navigate** to `public_html` folder on server
4. **Select all files** from `dist` folder on your computer
5. **Drag and drop** to `public_html` on server
6. **Wait** for upload to complete

**Using cPanel File Manager**:
1. Navigate to `public_html`
2. Click **"Upload"**
3. Select all files from `dist` folder
4. Click **"Upload"**
5. Wait for completion

### Step 8: Set Up SSL Certificate (5 minutes)

**In cPanel**:
1. Find **"SSL/TLS"** or **"SSL Certificates"**
2. Click **"Install SSL"**
3. Select **"Let's Encrypt"** (free)
4. Choose your domain: `moialuminum.com`
5. Click **"Install"**
6. Wait 2-5 minutes for activation

Your website is now HTTPS! ✅

### Step 9: Create Email Accounts (10 minutes)

**In cPanel**:
1. Find **"Email Accounts"**
2. Click **"Create"**
3. Enter:
   - Email: `info` (becomes info@moialuminum.com)
   - Password: [choose strong password]
   - Mailbox Quota: 5GB (or unlimited)
4. Click **"Create"**
5. Repeat for other emails:
   - sales@moialuminum.com
   - contact@moialuminum.com

### Step 10: Configure Email Client (Optional)

**To use with Gmail/Outlook**:

**IMAP Settings**:
```
Incoming Mail Server: mail.moialuminum.com
Port: 993 (SSL)
Username: info@moialuminum.com
Password: [your email password]
```

**SMTP Settings**:
```
Outgoing Mail Server: mail.moialuminum.com
Port: 465 (SSL)
Username: info@moialuminum.com
Password: [your email password]
```

**Or use Webmail**:
- URL: https://moialuminum.com/webmail
- Login with email + password
- Works like Gmail interface

### Step 11: Test Everything (5 minutes)

**Test Website**:
1. Open browser
2. Go to: https://moialuminum.com
3. Check all pages work
4. Verify CIIE posters load: /ciie-poster.html

**Test Email**:
1. Send test email to: info@moialuminum.com
2. Login to webmail
3. Check email received
4. Reply to test email
5. Verify reply sent successfully

### Step 12: Update DNS (If needed - 24 hours)

If domain was registered elsewhere:
1. **Get nameservers** from Hostinger:
   - Usually: `ns1.hostinger.com`, `ns2.hostinger.com`
2. **Update at domain registrar**:
   - Login to where you bought domain
   - Find "DNS Settings" or "Nameservers"
   - Change to Hostinger nameservers
3. **Wait** 1-24 hours for DNS propagation

---

## ✅ DEPLOYMENT COMPLETE!

Your website is now live at:
- **Website**: https://moialuminum.com
- **Email**: info@moialuminum.com
- **cPanel**: https://hpanel.hostinger.com
- **Webmail**: https://moialuminum.com/webmail

---

## 🎯 WHAT YOU CAN DO NOW

**Manage Website**:
- Upload new files via FTP
- Edit files in cPanel File Manager
- Install WordPress (if you want blog)
- Add more pages

**Manage Emails**:
- Create unlimited email accounts
- Set up email forwarding
- Configure auto-responders
- Access via webmail or Outlook

**View Statistics**:
- Check website visitors
- Monitor bandwidth usage
- See email usage

---

## 📞 SUPPORT

**Hostinger Support**:
- 24/7 Live Chat
- Email Support
- Knowledge Base
- Video Tutorials

**Us**:
- Email: moi.alu2012@gmail.com
- Phone: +230 5437 3025 / +230 5940 2190

---

## 💡 TIPS

✅ **Backup regularly**: Download files via FTP monthly
✅ **Update passwords**: Change every 3-6 months
✅ **Monitor emails**: Check spam folder weekly
✅ **Renew on time**: Mark calendar for renewal date
✅ **Use SSL**: Always access via https://

---

## 🆘 TROUBLESHOOTING

**Website not loading?**
- Check DNS settings (can take 24 hours)
- Verify files in public_html folder
- Check if SSL is active

**Email not working?**
- Verify email account created in cPanel
- Check spam/junk folder
- Confirm SMTP settings correct

**FTP connection failed?**
- Check username/password
- Try port 22 (SFTP) instead of 21
- Verify firewall not blocking connection

**Pages showing 404 error?**
- Check file names match (case-sensitive)
- Verify files uploaded to public_html
- Check .htaccess file if present

---

## 📊 ESTIMATED TIME

| Task | Time |
|------|------|
| Purchase hosting | 10 min |
| Set up cPanel | 5 min |
| Upload files | 10 min |
| Configure SSL | 5 min |
| Create emails | 10 min |
| Testing | 5 min |
| **TOTAL** | **45 minutes** |

**DNS propagation**: +1-24 hours (automatic)

---

## 🎉 SUCCESS!

Your website is deployed using traditional hosting!

✅ Professional domain
✅ Unlimited emails
✅ Easy management via cPanel
✅ 24/7 support available
✅ No complicated "cloud" setup

**Welcome to the web! 🚀**
