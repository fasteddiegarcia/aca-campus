![](http://static1.squarespace.com/static/538f3fcde4b05c5fecc7a40e/t/538f48a4e4b00d94e8c253b3/1453396632576/?format=400w)

# Campus Manager
[![Stories in Ready](https://badge.waffle.io/AustinCodingAcademy/aca-campus.png?label=ready&title=Ready)](http://waffle.io/AustinCodingAcademy/aca-campus)

[![Heroku](https://heroku-badge.herokuapp.com/?app=aca-campus)](http://aca-campus.herokuapp.com)

### Development

After cloning and navigating into directory:

1. `npm install`

1. Create `config/env.js`
  ```javascript
  module.exports = {
    mongo_url: 'mongodb://localhost/aca-campus',
    host: 'http://localhost:3000'
  }
  ```

1. leave `npm run gulp` running in one terminal session

1. leave `npm run develop` running in another terminal session

1. navigate to `http://localhost:3000`

### Activity
[![Throughput Graph](https://graphs.waffle.io/AustinCodingAcademy/aca-campus/throughput.svg)](https://waffle.io/AustinCodingAcademy/aca-campus/metrics/throughput)
