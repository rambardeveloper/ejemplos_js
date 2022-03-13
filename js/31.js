const boton = document.querySelector("#boton");
boton.addEventListener('click', () => {
    Notification.requestPermission()
    .then(
        _success => {
            console.log(_success);

            if(Notification.permission == 'granted') {
                new Notification('Esta es una notificacion', {
                    icon: "img/notification.png",
                    body: "Codigo de blabla"
                });
            }

        }
    )
    .catch(
        _error => {
            console.log(_error);
        }
    )
});
if(Notification.permission == 'granted') {
    new Notification('Esta es una notificacion', {
        icon: "img/notification.png",
        body: "Codigo de blabla"
    });
}
