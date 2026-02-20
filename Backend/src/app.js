import express from 'express';
import cors from 'cors';   // 👈 add this
import authRoutes from './modules/auth/auth.routes.js';

const app = express();

app.use(cors({
    origin: "*"
}));          // 👈 add this
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
    res.status(200).json({ status: "OK" });
});

app.use('/api/auth', authRoutes);

export default app;
