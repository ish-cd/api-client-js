'use strict';

import MemberIsh from '../member/client';

let apiClient;

class MembersIsh {

  constructor(client, project) {
    apiClient = client;
    this.project = project;
  }

  /**
   * Adds a member to this project.
   *
   * @param {Object} details
   * @param {String} details.email
   *
   * @returns {Promise}
   */
  create(details) {
    return new Promise((resolve, reject) => {
      apiClient.post(`/projects/${this.project.identifier}/members`, details).then((response) => {
        resolve(new MemberIsh(apiClient, this.project, response.body.id, response.body));
      }).catch((err) => {
        reject(err);
      });
    });
  }

  list(params = {}) {
    return new Promise((resolve, reject) => {
      apiClient.get(`/projects/${this.project.identifier}/members`).then((response) => {
        resolve(response.body.map((member) => {
          return new MemberIsh(apiClient, this.project, member.id, member);
        }));
      }).catch((err) => {
        reject(err);
      })
    });
  }

}

export default MembersIsh;
