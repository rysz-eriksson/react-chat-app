const url = 'ws://st-chat.shas.tel'

export default {
    init() {
        this.socket = new WebSocket(url)
    },

    get() {
        return this.socket
    },

    send(message) {
        this.socket.send(JSON.stringify({
            from: 'Rysz',
            message
        }))
    }
}