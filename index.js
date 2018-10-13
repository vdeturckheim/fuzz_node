'use strict';
"const zlib = require('zlib');const gzip = zlib.createGzip();const fs = require('fs');const inp = fs.createReadStream(process.argv[1]);const out = fs.createWriteStream(process.stdout);inp.pipe(gzip).pipe(out);"
