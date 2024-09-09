### Configuration

OIDC can be configured using `server/config/oidc.js` or providing environment variables with values.

| oidc.js variable| Environment Key| Description |
|--|--|--|
| clientID| OPENID_CLIENT_ID | The client ID provided by your OpenID Connect provider. |
| clientSecret | OPENID_CLIENT_SECRET | The client secret provided by your OpenID Connect provider. |
| callbackURL | OPENID_CALLBACK_URL | The callback URL that your OpenID provider will redirect to after authentication.|
| discoverURL | OPENID_DISCOVER_URL | The discovery URL of your OpenID provider, used to retrieve metadata (issuer, token endpoints, etc.)|

