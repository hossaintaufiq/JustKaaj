# JWT Secret Guide

## What is JWT_SECRET?

`JWT_SECRET` is a **secret key** that you need to **generate yourself**. It's used to sign and verify JSON Web Tokens (JWT) for admin authentication. It's not stored anywhere - you create it!

## How to Generate JWT_SECRET

### Option 1: Using Node.js (Recommended)
```bash
cd backend
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

This will output a secure random string like:
```
a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2
```

### Option 2: Using OpenSSL (if you have it installed)
```bash
openssl rand -hex 64
```

### Option 3: Using Online Generator
Visit: https://randomkeygen.com/ and use a "CodeIgniter Encryption Keys" or any random 64+ character string.

### Option 4: Manual Random String
Create any long, random string (at least 32 characters, but 64+ is recommended).

## Where to Put It

Add it to your `backend/.env` file:

```bash
JWT_SECRET=your-generated-secret-string-here
```

**Example:**
```bash
JWT_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2
```

## Important Notes

1. **Keep it Secret**: Never commit JWT_SECRET to git or share it publicly
2. **Make it Long**: At least 32 characters, but 64+ is recommended
3. **Make it Random**: Don't use predictable strings like "mysecret" or "123456"
4. **Keep it Consistent**: Once set, don't change it (or all existing admin sessions will be invalidated)
5. **Different Environments**: Use different secrets for development and production

## Security Best Practices

- ✅ Use a cryptographically secure random generator (like Node.js `crypto.randomBytes`)
- ✅ Use at least 64 characters
- ✅ Store it only in `.env` file (never in code)
- ✅ Never commit `.env` to version control
- ❌ Don't use dictionary words
- ❌ Don't use predictable patterns
- ❌ Don't share it with others

## After Setting JWT_SECRET

1. Restart your backend server
2. Test admin login to ensure it works
3. Verify with: `cd backend && node check-env.js`

