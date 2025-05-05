const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Habilita CORS e JSON parsing
app.use(cors());
app.use(express.json());


// Rota de login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'admin' && password === '123456') {
    return res.json({ 
      success: true,
      user: { username: 'admin' },
      token: 'token-simulado-123' 
    });
  } else {
    return res.status(401).json({ 
      success: false,
      message: 'Usuarios ou senha incorretos' 
    });
  }
});

// Health check
app.get('/api/status', (req, res) => {
  res.json({ status: 'online', version: '1.0.0' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});