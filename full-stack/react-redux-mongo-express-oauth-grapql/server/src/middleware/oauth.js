import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import jwtAuthz from 'express-jwt-authz';

import { config } from 'dotenv';
config();

// https://auth0.com/docs/quickstart/backend/nodejs/01-authorization#configure-auth0-apis

// Authentication middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set

// TODO: improve error handling here by throwing new HttpError and expanding this function with req, res, next

export const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),

  // Allows unsecured requests, requires we manually check in GraphQL
  credentialsRequired: false,

  // Validate the audience and the issuer.
  audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});




// example for using scopes
export const checkScopes = jwtAuthz(['read:messages']);
