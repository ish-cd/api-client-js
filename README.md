# Ish CD API Client (JavaScript)

A JavaScript API client for Ish - Continuous Delivery. Client-side and server-side compatible.

[![Travis build status](http://img.shields.io/travis/ish-cd/api-client-js.svg?style=flat)](https://travis-ci.org/ish-cd/api-client-js)
[![Code Climate](https://codeclimate.com/github/ish-cd/api-client-js/badges/gpa.svg)](https://codeclimate.com/github/ish-cd/api-client-js)
[![Test Coverage](https://codeclimate.com/github/ish-cd/api-client-js/badges/coverage.svg)](https://codeclimate.com/github/ish-cdo/api-client-js)
[![Dependency Status](https://david-dm.org/ish-cd/api-client-js.svg)](https://david-dm.org/ish-cd/api-client-js)
[![devDependency Status](https://david-dm.org/ish-cd/api-client-js/dev-status.svg)](https://david-dm.org/ish-cd/api-client-js#info=devDependencies)

## Installation
`npm install @ish-cd/api-client --save`

## Usage

```javascript
// Instantiate the API client using an API token from an environment variable.
var clientIsh = require('@ish-cd/api-client'),
    client = new clientIsh(process.env.ISH_CD_API_TOKEN);

// Queue a run of the "backup-prod" job on the "my-corp" project.
var runQueued = client.projects('my-corp').jobs('backup-prod').runs().create();

// All actions return promises--you can react to them like this.
runQueued.then(function onceQueued(run) {
  console.log(run);
});
```
