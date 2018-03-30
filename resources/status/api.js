'use strict';

module.exports = {
  __expose: true,

  cpu: function() {
    return {
      auth: { required: true },
      title: 'Status',
      description: 'Returns the CPU status',
      request: { type: 'null' },
      response: {
        type: 'object',
        required: [ 'load1', 'load5', 'load15', 'cores', 'utilization' ],
        additionalProperties: false,
        properties: {
          load1: { type: 'number' },
          load5: { type: 'number' },
          load15: { type: 'number' },
          cores: { type: 'number' },
          utilization: { type: 'number' }
        }
      },

      call: () => this.cpu()
    }
  },

  memory: function() {
    return {
      auth: { required: true },
      title: 'Status',
      description: 'Returns the memory status',
      request: { type: 'null' },
      response: {
        type: 'object',
        required: [ 'free', 'total', 'percent' ],
        additionalProperties: false,
        properties: {
          free: { type: 'number' },
          total: { type: 'number' },
          percent: { type: 'number' }
        }
      },

      call: () => this.memory()
    }
  },

  os: function() {
    return {
      auth: { required: true },
      title: 'Status',
      description: 'Returns the os status',
      request: { type: 'null' },
      response: {
        type: 'object',
        required: [ 'uptime', 'type', 'release', 'hostname', 'arch', 'platform', 'user' ],
        additionalProperties: false,
        properties: {
          uptime: { type: 'number' },
          type: { type: 'string' },
          release: { type: 'string' },
          hostname: { type: 'string' },
          arch: { type: 'string' },
          platform: { type: 'string' },
          user: { type: 'object' }
        }
      },

      call: () => this.os()
    }
  },

  process: function() {
    return {
      auth: { required: true },
      title: 'Status',
      description: 'Returns the process status',
      request: { type: 'null' },
      response: {
        type: 'object',
        required: [ 'pid', 'uptime', 'memory', 'argv' ],
        additionalProperties: false,
        properties: {
          pid: { type: 'number' },
          uptime: { type: 'number' },
          memory: { type: 'object' },
          argv: { type: 'object' }
        }
      },

      call: () => this.process()
    }
  },

  time: function() {
    return {
      auth: { required: true },
      title: 'Status',
      description: 'Returns the time status',
      request: { type: 'null' },
      response: {
        type: 'object',
        required: [ 'ts', 'iso', 'zone' ],
        additionalProperties: false,
        properties: {
          ts: { type: 'number' },
          iso: { type: 'string' },
          zone: { type: 'string' }
        }
      },

      call: () => this.time()
    }
  }
};
