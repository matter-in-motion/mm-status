'use strict';
const os = require('os');
const { DateTime } = require('luxon');

const Controller = function() {
};

Controller.prototype.__init = function(units) {};

Controller.prototype.cpu = function() {
  const load = os.loadavg();
  const cores = os.cpus().length;
  return Promise.resolve({
    load1: load[0],
    load5: load[1],
    load15: load[2],
    cores,
    utilization: Math.min(Math.floor(load[0] * 100 / cores), 100)
  })
};

Controller.prototype.memory = function() {
  const free = os.freemem();
  const total = os.totalmem();

  return Promise.resolve({
    free,
    total,
    percent: free * 100 / total
  });
};

Controller.prototype.os = function() {
  return Promise.resolve({
    uptime: os.uptime(),
    type: os.type(),
    release: os.release(),
    hostname: os.hostname(),
    arch: os.arch(),
    platform: os.platform(),
    user: os.userInfo()
  });
};

Controller.prototype.process = function() {
  return Promise.resolve({
    pid: process.pid,
    memory: process.memoryUsage(),
    uptime: process.uptime(),
    argv: process.argv
  });
};

Controller.prototype.time = function() {
  const now = DateTime.local();
  return Promise.resolve({
    ts: now.valueOf(),
    iso: now.toISO(),
    zone: now.zoneName
  });
};


module.exports = Controller;
