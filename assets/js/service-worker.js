self.addEventListener('push', function(event) {
    const options = {
        body: 'Esta é uma notificação enviada mesmo com o site fechado.',
        icon: 'https://via.placeholder.com/100',
        data: { url: 'https://jaopred0.github.io/JoaoAndGabriella/' }
    };

    event.waitUntil(
        self.registration.showNotification('Notificação Programada', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});
