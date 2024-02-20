module.exports = {
    defaults: {
      "transport": "state",
      "response": "tokens",
      "origin": "http://localhost:8088",
      "provider": "cognito",
    },
    "cognito": {
        "authorize_url": "https://xxx.auth.us-east-1.amazoncognito.com/oauth2/authorize",
        "access_url": "https://xxx.auth.us-east-1.amazoncognito.com/oauth2/token",
        "key": "xxx",
        "profile_url": "https://xxx.auth.us-east-1.amazoncognito.com/oauth2/userInfo",
        "secret": "xxx"
      }
  };