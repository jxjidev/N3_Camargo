const express = require('express');
const app = express();
const port = 3000;
 
app.use(express.json());
 
app.get('/componentes', (req, res) => {
});
 
app.get('/componentes/:id', (req, res) => {
});
 
app.post('/componentes', (req, res) => {
});
 
app.put('/componentes/:id', (req, res) => {
});
 
app.delete('/componentes/:id', (req, res) => {
});
 
app.get('/componentes/categoria/:id', (req, res) => {
});
 
app.get('/componentes/equipamento/:id', (req, res) => {
});
 
app.listen(port, () => {
console.log(`Servidor rodando na porta ${port}`);
});

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    }
     
    function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
     
    if (!token) return res.sendStatus(401);
     
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
    }
app.post('/login', (req, res) => {

    const user = { username: req.body.username }; 
  
    const accessToken = generateAccessToken(user);
  
    res.json({ accessToken: accessToken });
  });
  