'use strict';

import CredentialIsh from '../credential/client';

let apiClient;

class CredentialsIsh {

  constructor(client, data = {}) {
    apiClient = client;
    this.data = data;
  }

  /**
   * Creates a credential for the currently authenticated user.
   *
   * @param {Object} details
   * @param {Object} details.label
   * @param {String} details.shell
   * @param {String} details.accessToken
   * @returns {Promise}
   */
  create(details) {
    return new Promise((resolve, reject) => {
      apiClient.post('/credentials', details).then((response) => {
        resolve(new CredentialIsh(apiClient, response.body.id, response.body));
      }).catch((err) => {
        reject(err);
      });
    });
  }

  list(params = {}) {
    return new Promise((resolve, reject) => {
      apiClient.get('/credentials').then((response) => {
        resolve(response.body.map((credential) => {
          return new CredentialIsh(apiClient, credential.id, credential);
        }));
      }).catch((err) => {
        reject(err);
      });
    });
  }

}

export default CredentialsIsh;
