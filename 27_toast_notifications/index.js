const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five',
]

button.addEventListener('click', () => createNotifications('success'))

function createNotifications(type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type)
    notif.innerText = getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}