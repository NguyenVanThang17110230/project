---
id: trouble-shooting
title: Trouble shooting
---

1. Sometimes on development environment, navigation between pages doesn't work

   > Solution: Reload browser to solve.

2. For file upload, the due to many differences between AWS S3, Google Cloud
   Storage, Local file system, MongoDB GridFS, it's likely that bellow features
   don't work as expected on all cases:

- Automatically make file name unique
- File size restriction
- File type validation
- Something else ...
  > Solution: Write your own upload feature if you cannot find any workarounds
  > to solve above issues, or your app is too complex and you want to build
  > custom solution.
