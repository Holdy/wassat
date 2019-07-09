'use strict';

const datatype = require('./datatype');

const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

function identify(input) {
    let result;

    if (ipv4Pattern.test(input)) {
        result = {
            canonical: input,
            datatype: datatype.IPv4_Address,
            based_on: 'regex pattern'
        };

        ///load aws range.
        if match
            result.semantics = {
                owner: 'service//amazon-web-services',
                meta: {region:'us-east-1', service:'blah'}
            }

    } else if (input.startsWith('H4sIAAAA')) {
        result = {
            canonical: input,
            datatype: datatype.base64_encoded_data,
            based_on: 'recognition of encoded gzip preamble bytes',
            wrapping: {
                datatype: datatype.gzip_data,
                based_on: 'gzip preamble bytes'
            }
        }
    } else if (matches guid regex) {
        result = {
            canonical: input,
            datatype: datatype.GUIDv4,
            based_on: 'regex pattern',
        };

        load guids
        if found
        result.semantics = {
            resource: 'device//usb-controller'

        }

    } 

    return result;
}

module.exports = identify;