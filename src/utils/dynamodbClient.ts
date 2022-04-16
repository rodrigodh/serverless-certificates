import { DynamoDB } from "aws-sdk";

const options = {
  region: "localhost",
  endpoint: "http://localhost:8000",
  accessKeyId: 'DEFAULT_ACCESS_KEY',  // needed if you don't have aws credentials at all in env
  secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env
};

const isOffline = () => {
  return process.env.IS_OFFLINE;
}

export const document = isOffline()
  ? new DynamoDB.DocumentClient(options)
  : new DynamoDB.DocumentClient();

