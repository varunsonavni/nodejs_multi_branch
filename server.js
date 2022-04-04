var reload = require('reload')

app.listen(5000, () => {

  console.log(`Listening on port 5000`);
})

reload(server);
