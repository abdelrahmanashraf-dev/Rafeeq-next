import { spawn } from "node:child_process";

// Accept both Next.js and preview-runner host/port flags.
const input = process.argv.slice(2);
const args = [];
for (let index = 0; index < input.length; index++) {
  const arg = input[index];
  if (arg === "--strictPort") continue;
  args.push(arg === "--host" ? "--hostname" : arg);
}
if (!args.includes("--hostname")) args.push("--hostname", "127.0.0.1");
const child = spawn(process.execPath, ["node_modules/next/dist/bin/next", "dev", "--webpack", ...args], {
  stdio: "inherit", env: { ...process.env, WATCHPACK_POLLING: "1000" },
});
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => child.kill(signal));
child.on("exit", (code) => process.exit(code ?? 1));
