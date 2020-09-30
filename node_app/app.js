const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars');
const port = 3000

app.get('/', (req, res) => {
    res.render('index')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))