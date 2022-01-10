const express = require('express');
const { engine } = require('express-handlebars');
const path=require('path');
//Inicializamos la aplicación.
const app = express();
//Inicializamos los settings
app.set('port',process.env.PORT || 8080);
app.set('views', path.join(__dirname,'views'));
app.use(require('./routes/indexController'));
app.use(require('./routes/registrarController'));
app.use(require('./routes/logoutController'));
app.use(require('./routes/homeController'));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs',engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs'
}));
app.set('view engine','hbs');
//levantamos servidor
app.listen(app.get('port'),()=>{
    console.log('El servidor esta corriendo en el puerto', app.get('port'));
});

