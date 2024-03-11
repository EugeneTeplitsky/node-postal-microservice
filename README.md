# Simple Address Validation Microservice

Author: [Eugene Teplitsky](https://github.com/EugeneTeplitsky)

This is a simple ExpressJS-based microservice around [node-postal](https://github.com/openvenues/node-postal). Its
purpose is to receive a single POST parameter: `address`, containing an postal address, and output a JSON object with
the address parts broken up into components.

The resulting JSON structure is
described [here](https://github.com/openvenues/libpostal?tab=readme-ov-file#parser-labels).

## Installation

1. Clone this repository
2. Install build dependencies: `sudo apt-get install curl autoconf automake libtool pkg-config`
3. Build the [libpostal](https://github.com/openvenues/libpostal) libraries: `./build.sh`
4. Install the finished build product: `sudo make install`
5. Run `sudo ldconfig` just in case
6. Install `node-gyp` system-wide: `yarn global add node-gyp`
7. Install microservice dependencies: `yarn`
8. Copy `.env.example` to `.env` and edit parameters to fit your requirements
9. Start the microservice: `yarn start`

## Example Usage

**HTTP POST 127.0.0.1:3000**

```json
{
  "address": "123 Main Street, 3rd Floor, Apartment C, Anywhere USA 12345"
}
```

Output:

```json
[
  {
    "value": "123",
    "component": "house_number"
  },
  {
    "value": "main street",
    "component": "road"
  },
  {
    "value": "3rd floor",
    "component": "level"
  },
  {
    "value": "apartment c",
    "component": "unit"
  },
  {
    "value": "anywhere",
    "component": "city"
  },
  {
    "value": "usa",
    "component": "country"
  },
  {
    "value": "12345",
    "component": "postcode"
  }
]
```
