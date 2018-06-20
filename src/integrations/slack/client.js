'use strict';

import SlackIntegrationIsh from '../../integration/slack/client';

let apiClient;

class SlackIntegrationsIsh {

  constructor(client, data = {}) {
    apiClient = client;
    this.data = data;
  }

  /**
   * Creates a Slack Integration for the currently authenticated user.
   *
   * @param {Object} details
   * @param {Object} details.project
   * @param {Object} details.token
   * @returns {Promise<SlackIntegrationIsh>}
   */
  create(details) {
    return new Promise((resolve, reject) => {
      apiClient.post('/integrations/slack', details).then((response) => {
        resolve(new SlackIntegrationIsh(apiClient, response.body.id, response.body));
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Lists Slack Integrations for the currently authenticated user.
   *
   * @param {Object} params
   * @returns {Promise<SlackIntegrationIsh[]>}
   */
  list(params = {}) {
    return new Promise((resolve, reject) => {
      apiClient.get('/integrations/slack').then((response) => {
        resolve(response.body.map((integration) => {
          return new SlackIntegrationIsh(apiClient, integration.id, integration);
        }));
      }).catch((err) => {
        reject(err);
      });
    });
  }

}

export default SlackIntegrationsIsh;
