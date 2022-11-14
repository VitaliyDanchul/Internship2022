function onListening() {
    const address = this.address();

    console.log(`Server listening on ${typeof addr === 'string' ? `pipe ${address}` : `port ${address.port}`}`);
}

function bind(Server) {
    Server.on('listening', this.onListening.bind(Server));
}

module.exports = {
    bind,
    onListening,
};
