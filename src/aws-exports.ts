const userPoolId = import.meta.env.VITE_AWS_USER_POOLS_ID;
const userPoolClientId = import.meta.env.VITE_AWS_USER_POOLS_WEB_CLIENT_ID;

if (!userPoolId || !userPoolClientId) {
  throw new Error('Missing required AWS Cognito environment variables');
}

export default {
  userPoolId,
  userPoolClientId,
};