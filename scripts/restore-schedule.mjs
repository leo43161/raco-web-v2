#!/usr/bin/env node
/**
 * Restaura el cronograma de recolección de residuos al horario normal.
 * Ejecutar manualmente el lunes 5/5 o después: node scripts/restore-schedule.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const FECHA_FIN = new Date("2026-05-05T00:00:00");

if (new Date() < FECHA_FIN) {
  console.log(`La suspensión sigue activa hasta el lunes 5/5. Nada que restaurar.`);
  process.exit(0);
}

// --- guia.ts ---
const guiaPath = resolve(root, "src/data/guia.ts");
let guia = readFileSync(guiaPath, "utf-8");

guia = guia.replace(
  `// SUSPENSION_ACTIVA: se vuelve false automáticamente al reconstruir después del 5/5
const _FECHA_FIN_SUSPENSION = new Date("2026-05-05T00:00:00");
export const SUSPENSION_ACTIVA = new Date() < _FECHA_FIN_SUSPENSION;
export const AVISO_SUSPENSION_RESIDUOS = "Sin recolección esta semana. Retoma el Lunes 5/5 con el cronograma habitual.";

`,
  ""
);

guia = guia.replace(
  `export const DATA_RESIDUOS_HUMEDOS: CronogramaResiduos[] = SUSPENSION_ACTIVA
  ? [{ dia: "Miércoles 30/4", zona: "A partir de las 08:00 hs" }]
  : [{ dia: "Lunes y Viernes", zona: "A partir de las 08:00 hs" }];`,
  `export const DATA_RESIDUOS_HUMEDOS: CronogramaResiduos[] = [
  { dia: "Lunes y Viernes", zona: "A partir de las 08:00 hs" }
];`
);

writeFileSync(guiaPath, guia, "utf-8");
console.log("✓ src/data/guia.ts restaurado");

// --- veraneantes/page.tsx ---
const pagePath = resolve(root, "src/app/veraneantes/page.tsx");
let page = readFileSync(pagePath, "utf-8");

// Remover imports de suspensión
page = page.replace(
  `,
  SUSPENSION_ACTIVA,
  AVISO_SUSPENSION_RESIDUOS`,
  ""
);

// Restaurar título húmedos
page = page.replace(
  `                {SUSPENSION_ACTIVA ? "Miércoles 30/4" : "Lunes y Viernes"}`,
  `                Lunes y Viernes`
);

// Remover "Próxima recolección" condicional
page = page.replace(
  `
              {SUSPENSION_ACTIVA && (
                <p className="text-sm font-semibold text-gray-500 mt-2">
                  Próxima recolección: Lunes 5/5
                </p>
              )}`,
  ""
);

// Remover banner de suspensión en secos
page = page.replace(
  `
            {SUSPENSION_ACTIVA && (
              <div className="bg-red-50 p-4 rounded-2xl border-l-4 border-red-500 mb-6">
                <p className="text-red-800 font-bold text-center italic text-sm md:text-base">
                  {AVISO_SUSPENSION_RESIDUOS}
                </p>
              </div>
            )}
`,
  "\n"
);

writeFileSync(pagePath, page, "utf-8");
console.log("✓ src/app/veraneantes/page.tsx restaurado");

console.log("\n✅ Cronograma de recolección vuelto al horario normal (Lunes y Viernes).");
console.log('   Revisá los cambios con "git diff" antes de hacer commit.');
