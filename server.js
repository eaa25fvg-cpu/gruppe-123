import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const db = new pg.Pool({
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    ssl: { rejectUnauthorized: false },
});

// Test database forbindelse
const dbResult = await db.query('select now() as now');
console.log('Database forbindelse etableret:', dbResult.rows[0].now);

// Servér statiske filer fra public mappen
app.use(express.static('public'));

// API endpoint til at hente sange
app.get('/api/songs', async (req, res) => {
  try {
    console.log('Henter sange fra database...');
    const result = await db.query('SELECT * FROM song ORDER BY name ASC');
    console.log('Fandt', result.rows.length, 'sange');
    res.json(result.rows);
  } catch (error) {
    console.error('Fejl ved hentning af sange:', error);
    res.status(500).json({ error: 'Kunne ikke hente sange' });
  }
});

// Start serveren
app.listen(3000, () => {
  console.log('Server kører på http://localhost:3000');
});
