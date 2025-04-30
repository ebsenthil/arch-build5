// Sample aws-exports.js file for AWS Amplify configuration
// Save this as src/aws-exports.js after editing with your values

const awsmobile = {
  "aws_project_region": "YOUR_AWS_REGION",  // e.g., "us-east-1"
  "aws_cognito_identity_pool_id": "YOUR_COGNITO_IDENTITY_POOL_ID",
  "aws_cognito_region": "YOUR_AWS_REGION",
  "aws_user_pools_id": "YOUR_USER_POOL_ID",
  "aws_user_pools_web_client_id": "YOUR_USER_POOL_CLIENT_ID",
  "oauth": {},
  "aws_cloud_logic_custom": [
    {
      "name": "ArchDocGenApi",
      "endpoint": "YOUR_API_GATEWAY_URL",  // e.g., https://abcdefghij.execute-api.us-east-1.amazonaws.com
      "region": "YOUR_AWS_REGION"
    }
  ],
  "aws_content_delivery_bucket": "YOUR_S3_BUCKET_NAME",
  "aws_content_delivery_bucket_region": "YOUR_AWS_REGION",
  "aws_content_delivery_url": "https://YOUR_CLOUDFRONT_DISTRIBUTION_URL"
};

export default awsmobile;
