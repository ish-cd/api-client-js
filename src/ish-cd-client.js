'use strict';

import ClientBase from './ish-cd-client-base';
import AccountClient from './account/client';
import ApiTokenClient from './token/client';
import ApiTokensClient from './tokens/client';
import CredentialClient from './credential/client';
import CredentialsClient from './credentials/client';
import ProjectClient from './project/client';
import ProjectsClient from './projects/client';
import SlackIntegrationClient from './integration/slack/client';
import SlackIntegrationsClient from './integrations/slack/client';

class IshCD extends ClientBase {

  /**
   * Instantiates a new Ish CD API client.
   *
   * @param {String} token
   * @param {Object} options
   * @param {String} options.version
   * @param {String} options.host
   * @param {String} options.path
   */
  constructor(token, options = {}) {
    const version = options.version || 'v1',
          host = options.host || 'https://api.ish-cd.com',
          basePath = options.basePath || '';

    super(token, host, basePath + '/', version);
  }

  /**
   * Returns an Ish CD account API client.
   * @returns {AccountIsh}
   */
  account() {
    return new AccountClient(this);
  }

  /**
   * Returns an Ish CD API token API client.
   *
   * Note: for security reasons, API tokens cannot be managed through the API,
   * you must be authenticated in the browser to use this client.
   *
   * @param {String} identifier
   * @returns {ApiTokenIsh|ApiTokensIsh}
   */
  apiTokens(identifier) {
    if (identifier) {
      return new ApiTokenClient(this, identifier);
    }
    else {
      return new ApiTokensClient(this);
    }
  }

  /**
   * Returns an Ish CD integration API client.
   * @param {String} type
   * @param {*} identifier
   * @returns {SlackIntegrationIsh|SlackIntegrationsIsh}
   */
  integrations(type, identifier) {
    if (type === 'slack') {
      if (identifier) {
        return new SlackIntegrationClient(this, identifier);
      }
      else {
        return new SlackIntegrationsClient(this);
      }
    }
    else {
      throw new Error(`Unknown integration ${type}`)
    }
  }

  /**
   * Returns an Ish CD credential API client.
   * @param {String} identifier
   * @returns {CredentialIsh|CredentialsIsh}
   */
  credentials(identifier) {
    if (identifier) {
      return new CredentialClient(this, identifier);
    }
    else {
      return new CredentialsClient(this);
    }
  }

  /**
   * Returns an Ish CD project API client.
   *
   * @param {String} identifier
   * @returns {ProjectIsh|ProjectsIsh}
   */
  projects(identifier) {
    if (identifier) {
      return new ProjectClient(this, identifier);
    }
    else {
      return new ProjectsClient(this);
    }
  }

}

export default IshCD;
