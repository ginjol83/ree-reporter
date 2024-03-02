import admin from 'firebase-admin';
import nodemailer from 'nodemailer';
import { mailConfig } from '../config/mail-config.js'
import { firebaseConfig } from '../config/firebase-credentials.js';

admin.initializeApp({ credential: admin.credential.cert(firebaseConfig) });

const db = admin.firestore();

const snapshot = await db.collection('mailList').get();

const mailList = snapshot.docs.map(doc => doc.data());

const fechaActual = new Date().toLocaleDateString();

const sendMail = () => mailList.map(res =>{
    console.log(`sending mail to ${res.mail}`)
    const mailOptions = {
        from: mailConfig.mail, 
        to: res.mail,
        subject: `Informe del mercado electrico para ${fechaActual}`,
        text: `Hola, te adjutamos el informe con los precios del mercado electrico para hoy`,
        attachments: [
            { // archivo Excel como adjunto
              filename: mailConfig.fileName, 
              path: `./output/${mailConfig.fileName}` // Ruta al archivo en tu servidor
            }
          ]
    };
    
    const transporter = nodemailer.createTransport(mailConfig)    
    transporter.sendMail(mailOptions,{})
})

export { sendMail }