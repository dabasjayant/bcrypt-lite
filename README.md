# **bcrypt-mini**

A library to help you hash passwords.

`bcrypt-mini` is a standalone, lightweight version of Bcrypt.js with no dependencies, ideal for environments where minimalism and ease of use are key.

## **Installation**

You can install `bcrypt-mini` via npm:

```bash
npm install bcrypt-mini
```

Alternatively, you can include it directly in your project via script tag:

```html
<script src="path/to/bcrypt-mini.js"></script>
```

## **Background**

The original bcrypt library in Node.js requires some node specific dependencies that are unavailable in other environments like Next.js edge runtime. Moreover, there are certain times when a lightweight and simple package is more optimal.

There, *bcrypt-mini* allows you to securely work with passwords even if you don't have access to a Node server.

Example, you may use it with cloudflare workers, static websites, etc.



## **Usage**

### **Node.js**

```javascript
const bcrypt = require('bcrypt-mini');

// Hash a password
const hash = bcrypt.hashSync('plaintextPassword');

// Compare password and hash
bcrypt.compareSync('plaintextPassword', hash);
```

### **Next.js**

```javascript
import bcrypt from 'bcrypt-mini';

// Hash a password
const hash = bcrypt.hashSync('plaintextPassword');

// Compare password and hash
bcrypt.compareSync('plaintextPassword', hash);
```

### **Browser**

```javascript
<script src="path/to/bcrypt-mini.js"></script>

<script>
    // Hash a password
    const hash = bcrypt_lite.hashSync('plaintextPassword');

    // Compare password and hash
    bcrypt_lite.compareSync('plaintextPassword', hash);
</script>
```

## **Demo**

In progress..

## **Features**

- Lightweight and standalone – no external dependencies.
- Compatible with both Node.js and browser environments.
- Simple API, similar to original bcrypt.js

## **License**

New-BSD / MIT ([see](https://github.com/dabasjayant/bcrypt-mini/blob/master/LICENSE))