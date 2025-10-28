// scripts/build-env.js
const fs = require('fs');
const path = require('path');

// Leer las variables de entorno
const supabaseUrl = process.env.NG_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NG_APP_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.NG_APP_SUPABASE_SERVICE_ROLE_KEY || '';

// Generar el contenido del archivo environment.prod.ts
const envContent = `export const environment = {
    production: true,
    SUPABASE_URL: '${supabaseUrl}',
    SUPABASE_ANON_KEY: '${supabaseAnonKey}',
    SUPABASE_SERVICE_ROLE_KEY: '${supabaseServiceKey}'
};`;

// Escribir el archivo
const envPath = path.join(__dirname, '..', 'src', 'environments', 'environment.prod.ts');
fs.writeFileSync(envPath, envContent);

console.log('Environment file generated successfully');
