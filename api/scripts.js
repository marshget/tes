import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
    const filePath = path.join(process.cwd(), 'public', 'scripts', 'tes.lua');

    try {
        const luaScript = await fs.readFile(filePath, 'utf8');
        if (!luaScript) {
            return res.status(404).send('Lua script not found');
        }
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send(luaScript);
    } catch (error) {
        console.error('Error reading Lua script:', error);
        res.status(500).send('Error reading Lua script');
    }
}
