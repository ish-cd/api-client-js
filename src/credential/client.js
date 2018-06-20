'use strict';

let apiClient;

class CredentialIsh {

  constructor(client, identifier, data = {}) {
    apiClient = client;
    this.identifier = identifier;
    this.data = data;
  }

  remove() {
    return new Promise((resolve, reject) => {
      apiClient.del(`/credentials/${this.identifier}`).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }
}

export default CredentialIsh;
