import express from "express";
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());

app.use('/api0', createProxyMiddleware({
    target: 'https://api-content.ingresso.com', // URL da API original
    changeOrigin: true,
}));
app.use('/api1', createProxyMiddleware({
    target: 'https://api.ingresso.com', // URL da API original
    changeOrigin: true,
}));

app.listen(port, () =>{
    console.log("Proxy rodando na porta", port);
})