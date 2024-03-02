const mailConfig = {
        host: '',
        port: 0,
        secure: false, 
        auth: {
                user: '',
                pass: ''
        },
        tls: {
                // No rechazar conexiones no autorizadas (opcional)
                rejectUnauthorized: false
        }
}

export { mailConfig }