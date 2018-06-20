'use strict';

import JobIsh from '../job/client';

let apiClient;

class JobsIsh {

  constructor(client, project) {
    apiClient = client;
    this.project = project;
  }

  /**
   * Creates a new Ish CD job on the given project.
   *
   * @param {Object} details
   * @param {String} details.label
   * @param {String} details.name
   * @param {Object} details.commands
   * @param {String} details.rawCommands
   *
   * @returns {Promise}
   */
  create(details) {
    return new Promise((resolve, reject) => {
      apiClient.post(`/projects/${this.project.identifier}/jobs`, details).then((response) => {
        resolve(new JobIsh(apiClient, this.project, response.body.id, response.body));
      }).catch((err) => {
        reject(err);
      });
    });
  }

  list(params = {}) {
    return new Promise((resolve, reject) => {
      apiClient.get(`/projects/${this.project.identifier}/jobs`).then((response) => {
        resolve(response.body.map((job) => {
          return new JobIsh(apiClient, this.project, job.id, job);
        }));
      }).catch((err) => {
        reject(err);
      });
    });
  }

}

export default JobsIsh;
