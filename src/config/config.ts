export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME, //"mkudagramdev2",
    "password": process.env.POSTGRES_PASSWORD, //"!udacity123",
    "database": process.env.POSTGRES_DATABASE, //"mkudagramdev2",
    "host": process.env.POSTGRES_HOST, //"mkudagramdev2.cnoygy0nyv5u.us-west-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": process.env.POSTGRES_REGION, //"us-west-2",
    "aws_profile": "default",
    "aws_media_bucket": process.env.POSTGRES_MEDIABUCKET, //"udagram-mk-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": "postgres"
  }
}
