module.exports = message => {
    const { headers, payload } = message;
    return `Message received with Content-Type '${headers.getValue('Content-Type')}' and payload '${payload}'.`;
}

// set argument type to message, default is payload
module.exports.$argumentType = 'message';