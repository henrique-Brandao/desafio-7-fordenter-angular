const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Habilita CORS e JSON parsing
app.use(cors());
app.use(express.json());

// Usuário fixo (admin/123456)
const USER = { 
  username: 'admin', 
  password: '123456' 
};

// Rota de login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === USER.username && password === USER.password) {
    return res.json({ 
      success: true,
      user: { username: USER.username },
      token: 'simulado-123' // Adicionei um token simulado
    });
  }
  
  return res.status(401).json({ 
    success: false,
    message: 'Credenciais inválidas' 
  });
});

// Health check
app.get('/api/status', (req, res) => {
  res.json({ status: 'online', version: '1.0.0' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});