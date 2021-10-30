import aws from 'aws-sdk'

const s3 = new aws.S3({
  credentials: {
    accessKeyId: process.env.STORAGE_AWS_KEY_ID,
    secretAccessKey: process.env.STORAGE_AWS_KEY
  }
})

export default s3
