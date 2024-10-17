import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
    const filePath = path.join(process.cwd(), 'public', 'scripts', 'tes.lua'); // Arahkan ke file Lua
    try {
        // Baca file Lua
        const luaScript = await fs.readFile(filePath, 'utf8');
        
        // Set header konten sebagai plain text
        res.setHeader('Content-Type', 'text/plain');
        
        // Kirim respons script Lua
        res.status(200).send(luaScript);
    } catch (error) {
        // Jika ada error
        res.status(500).send('Error reading Lua script');
    }
}
