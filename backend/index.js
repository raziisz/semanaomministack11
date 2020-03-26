const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        evento: 'Semana Omministack 11.0',
        aluno: 'Luiz Felipe'
    });
});

app.listen(3333);