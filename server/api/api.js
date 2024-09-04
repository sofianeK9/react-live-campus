import { Router } from "express";

const api = Router();

app.get('/api/hello', (_req, res) => {
    res.status(401).send('Vous ne passerez pas !');
});
app.get('/api/welcome', (_req, res) => {
    res.status(401).send('Vous ne passerez pas !');
});
app.get('/api/goodbye', (_req, res) => {
    res.status(401).send('Vous ne passerez pas !');
});


export default api