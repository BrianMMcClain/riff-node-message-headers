module.exports = message => {
    const { headers, payload } = message;
    return `Content-Type: '${headers.getValue('Content-Type')}', User-Agent: '${headers.getValue('User-Agent')}' and payload '${payload}'.`;
}

// set argument type to message, default is payload
module.exports.$argumentType = 'message';