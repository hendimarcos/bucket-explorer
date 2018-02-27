const AWS = require("aws-sdk");
import { AwsWrapper } from "./aws";

export function getWasabi(options) {
  const wasabiEndpoint = new AWS.Endpoint("s3.wasabisys.com");
  const wasabi = new AWS.S3({
    endpoint: wasabiEndpoint,
    accessKeyId: options.accessKeyId,
    secretAccessKey: options.secretAccessKey
  });

  return new AwsWrapper(wasabi);
}
