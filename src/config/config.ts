export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME, 
    "password": process.env.POSTGRES_PASSWORD, 
    "database": process.env.POSTGRES_DATABASE, 
    "host": process.env.POSTGRES_HOST, 
    "dialect": "postgres",
    "aws_region": process.env.POSTGRES_REGION, 
    "aws_profile": "default",
    "aws_media_bucket": process.env.POSTGRES_MEDIABUCKET, 
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": "postgres"
  }
}
