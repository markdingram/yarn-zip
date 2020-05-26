Yarn
====

1. AWS-CDK hangs currently - `yarn run test`

Yarn 2.0.0-rc.33.dev will hang as 

https://github.com/aws/aws-cdk/blob/a5c06a3a27b39a5315d0cfd0d34b3c1b25cfc464/packages/%40aws-cdk/core/lib/fs/fingerprint.ts

has:

```
while ((read = fs.readSync(fd, buffer, 0, BUFFER_SIZE, null)) !== 0)
```

(null not handled yet)

Should be fixed by <https://github.com/yarnpkg/berry/pull/1409> or similar



2. fs.readSync reads whole file each time to return each chunk


Run `yarn run slow`

```
$ yarn run slow
starting
read: 281.731ms 8192 8192
read: 480.655ms 8192 16384
read: 663.234ms 8192 24576
read: 845.223ms 8192 32768
read: 1027.200ms 8192 40960
read: 1210.914ms 8192 49152
read: 1391.626ms 8192 57344
read: 1590.551ms 8192 65536
read: 1764.586ms 8192 73728
read: 1944.802ms 8192 81920
read: 2139.621ms 8192 90112
read: 2333.735ms 8192 98304
read: 2525.436ms 8192 106496
....
```