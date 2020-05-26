const cdk = require('@aws-cdk/core')
const path = require.resolve('@aws-cdk/aws-s3-deployment/lambda/bundle.zip');

// hangs due to https://github.com/yarnpkg/berry/pull/1409 (explicit null for position param in ZipFS.readSync)
cdk.FileSystem.fingerprint(path);

console.log('done');
