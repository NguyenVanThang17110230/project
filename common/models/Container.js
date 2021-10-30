// TODO-IMPORTANT: Add or remove file types allowed to be uploaded for the whole system (photos, media, document, ...)
// This is applied for the WHOLE system
export const ALLOW_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'application/pdf',
  'audio/mp3',
  'video/mp3'
]

// TODO-IMPORTANT: Update maximum file size allowed for the whole system
// This is applied for the WHOLE system
export const MAX_FILE_SIZE = 1024 * 1024 // 2MB

// TODO-IMPORTANT: Rename values of those keys on your favor.
//
// You can add more key-value for more containers if you want, but if the system already initialized via `/admin/setup`, then you need to
// call POST /api/containers API or connect DB to create new container by yourself.
// We let you control this instead of auto-create those new containers.
//
// Notice that:
//   - For AWS S3, because S3 buckets are global object, you need to create global unique bucket (container) name, like "youruniqueapp-avatar"
//   - For Mongo GridFS: no container is created in reality but it just mark metadata.container for the file object stored in Mongo
export const Containers = {
  AVATAR: 'loopnext-avatar',
  DOCUMENT_PARTY: 'loopnext-document-party'
}
