const fs = require('fs');
const path = require.resolve('@aws-cdk/aws-s3-deployment/lambda/bundle.zip');

const BUFFER_SIZE = 8 * 1024;
const buffer = Buffer.alloc(BUFFER_SIZE);
console.time('read');
console.log('starting');

const fd = fs.openSync(path, fs.constants.O_DSYNC | fs.constants.O_RDONLY | fs.constants.O_SYNC);
try {
  let read = 0;
  let total = 0;
  while ((read = fs.readSync(fd, buffer, 0, BUFFER_SIZE, -1)) !== 0) {
    total += read;
    console.timeLog('read', read, total);
  }
} finally {
  fs.closeSync(fd);
}
console.log('done');
