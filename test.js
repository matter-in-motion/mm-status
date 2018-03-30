'use strict';
const test = require('ava');
const extension = require('./index');
const createApp = require('mm-test').createApp;

process.env.NODE_ENV = 'production';

const app = createApp({ extensions: [ extension ] });
const status = app.units.require('resources.status.controller');

test('gets the cpu info', t => status
  .cpu()
  .then(info => {
    t.is(typeof info.load1, 'number');
    t.is(typeof info.load5, 'number');
    t.is(typeof info.load15, 'number');
    t.is(typeof info.cores, 'number');
    t.is(typeof info.utilization, 'number');
  })
);

test('gets the memory info', t => status
  .memory()
  .then(info => {
    t.is(typeof info.free, 'number');
    t.is(typeof info.total, 'number');
    t.is(typeof info.percent, 'number');
  })
);

test('gets the os info', t => status
  .os()
  .then(info => {
    t.is(typeof info.uptime, 'number');
    t.is(typeof info.type, 'string');
    t.is(typeof info.release, 'string');
    t.is(typeof info.hostname, 'string');
    t.is(typeof info.arch, 'string');
    t.is(typeof info.platform, 'string');
    t.is(typeof info.user, 'object');
  })
);

test('gets the process info', t => status
  .process()
  .then(info => {
    t.is(typeof info.pid, 'number');
    t.is(typeof info.memory, 'object');
    t.is(typeof info.uptime, 'number');
    t.is(typeof info.argv, 'object');
  })
);

test('gets the time info', t => status
  .time()
  .then(info => {
    t.is(typeof info.ts, 'number');
    t.is(typeof info.iso, 'string');
    t.is(typeof info.zone, 'string');
  })
);
