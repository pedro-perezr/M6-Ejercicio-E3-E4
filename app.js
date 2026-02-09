const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();

/* archivos estaticos */
app.use(express.static('public'));

/* motor hbs */
app.set('view engine', 'hbs');

/* parciales */
hbs.registerPartials(__dirname + '/views/partials');

/* helper simple */
hbs.registerHelper('priorityClass', function(p) {
  if (p === 'alta') return 'rojo';
    if (p === 'media') return 'naranja';
      return 'azul';
      });

      /* rutas */

      app.get('/perfil', (req, res) => {
        res.render('perfil', {
            nombre: 'Ana',
                profesion: 'Programadora'
                  });
                  });

                  app.get('/dashboard', (req, res) => {

                    const datos = {
                        user: {
                              name: 'Carlos',
                                    isAdmin: true
                                        },
                                            projects: [
                                                  {
                                                          name: 'Api',
                                                                  isCompleted: false,
                                                                          tasks: [
                                                                                    { description: 'hacer endpoints', priority: 'alta' },
                                                                                              { description: 'login jwt', priority: 'media' }
                                                                                                      ]
                                                                                                            },
                                                                                                                  {
                                                                                                                          name: 'Frontend',
                                                                                                                                  isCompleted: true,
                                                                                                                                          tasks: []
                                                                                                                                                }
                                                                                                                                                    ]
                                                                                                                                                      };
app.use(express.urlencoded({ extended: true }));
                                                                                                                                                        res.render('dashboard', datos);
                                                                                                                                                        });
app.get('/mensajes', (req, res) => {

  const texto = fs.readFileSync('mensajes.json', 'utf-8');
    const lista = JSON.parse(texto);

      res.render('libro', { mensajes: lista });

      });
 
app.post('/nuevo-mensaje', (req, res) => {

  const nuevo = {
      usuario: req.body.usuario,
          mensaje: req.body.mensaje
            };

              const texto = fs.readFileSync('mensajes.json', 'utf-8');
                const lista = JSON.parse(texto);

                  lista.push(nuevo);

                    fs.writeFileSync('mensajes.json', JSON.stringify(lista, null, 2));

                      res.redirect('/mensajes');

                      });
                                                                                                                                                        app.listen(3000, () => {
                                                                                                                                                                                                                                                                                                                  console.log('servidor listo en puerto 3000');                                                                                                                                                          console.log('servidor listo en puerto 3000');
                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            console.log('servidor listo en puerto 3000');
                                                                                                                                                          });