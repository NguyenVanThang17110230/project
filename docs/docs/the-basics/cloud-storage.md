---
id: cloud-storage
title: Cloud storage
---

## Google Cloud Storage

- Access the link:
  https://console.cloud.google.com/storage/browser?project=<project_id>
- Choose `Storage` and do like the images below

[![](/img/google_cloud_1.png)](google_cloud_1.png)
[![](/img/google_cloud_2.png)](google_cloud_2.png)

- Copy private-key to `./server/config/<file_private_key>.json` and commit to
  source code (security issue here, need a better way!)

- Config .env file or environment variable setting on cloud hosting to have
  correct environment variables for Google Cloud Storage

```bash
STORAGE_PROVIDER=google
STORAGE_GOOGLE_KEY_FILE_NAME=./server/config/<file_private_key>.json
STORAGE_GOOGLE_PROJECT_ID=<project_id>
```

## AWS S3

TODO: Need contribution

## Azure

TODO: Need contribution
