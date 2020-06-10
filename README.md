# Generate token

This is a tiny one function library for making cryptographically secure string tokens / passwords from nodejs or from the browser. It has no dependancies.

In nodejs this uses the builtin `crypto.randomBytes()`, and in the browser this uses `window.crypto.getRandomValues()`. In both cases the generated values are cryptographically secure.

By default tokens are generated using the base64url character set, so all tokens are URL- and filename- safe printable characters (a-z, A-Z, 0-9, -, _). You can override this set by specifying an alphabet to use as the second parameter.

Usage:

`npm i --save @josephg/gentoken`

Then:

```javascript
const genToken = require('@josephg/gentoken')

// Generate a token with the default length (12 bytes)
console.log(genToken()) // Eg XDzWwNGzY-MS

// Generate a token with the specified length
console.log(genToken(20)) // Eg tM5cjzxG5VEc_tZzfAdl

// Generate a token with a different alphabet
console.log(genToken(20, 'abcdefg')) // Eg dfabbeegcdad
```

Note that if you use a small alphabet you restrict the generated entropy.


## Why make this a library?

Most web bundlers don't provide any way to replace a single javascript file in larger project. So if you write something like this inline, you end up getting a giant node crypto polyfill - which is stupid and annoying.

And yes, I know there's a million libraries which claim to do the same thing as this library in npm; but almost all of them have obvious security issues (eg they use Math.random()) or they don't provide a browser version.


# License

Copyright 2020 Joseph Gentle

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.