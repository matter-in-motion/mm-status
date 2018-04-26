# Matter In Motion. App status resource extension

[![NPM Version](https://img.shields.io/npm/v/mm-status.svg?style=flat-square)](https://www.npmjs.com/package/mm-status)
[![NPM Downloads](https://img.shields.io/npm/dt/mm-status.svg?style=flat-square)](https://www.npmjs.com/package/mm-status)

This extension adds a __status__ resource.

## Usage

[Extensions installation instructions](https://github.com/matter-in-motion/mm/blob/master/docs/extensions.md)

## API

**All requests require authorization. All requests should be empty**

### cpu

returns the cpu status

**Response**

* **load1** — number, one minute load average
* **load5** — number, five minutes load average
* **load15** — number, fivteen minutes load average
* **cores** — number
* **utilization** — number

### memory

returns the memory status

**Response**

* **free** — number
* **total** — number
* **percent** — number

### os

returns the os status

**Response**

* **uptime** — number, the system uptime in number of seconds
* **type** — a string identifying the operating system name
* **release** — a string identifying the operating system release
* **hostname** — string, the hostname of the operating system
* **arch** — a string identifying the operating system CPU architecture for which the Node.js binary was compiled
* **platform** — a string identifying the operating system platform as set during compile time of Node.js
* **user** — object, information about the currently effective user

### process

returns the process status

**Response**

* **pid** — number, the PID of the process
* **memory** — object describing the memory usage of the Node.js process measured in bytes
* **uptime** — a number of seconds the current Node.js process has been running
* **argv** — array containing the command line arguments passed when the Node.js process was launched

### time

returns the time status

**Response**

* **ts** — number, current timestamp
* **iso** — string, ISO 8601-compliant representation
* **zone** — string, the name of the time zone

License: MIT.
