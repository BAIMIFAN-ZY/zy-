const { push } = require("isomorphic-git");
const http = require("isomorphic-git/http/node");
const fs = require("fs");
const path = "D:/Zhaozy/ai设计作品集合/portfolio";
const TOKEN = "ghp_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";
async function main() {
  console.log("Pushing...");
  const r = await push({ fs, http, dir: path, remote: "origin", ref: "main",
    onAuth: () => ({ username: "BAIMIFAN-ZY", password: TOKEN }),
    onProgress: (p) => { if (p.phase) process.stdout.write(p.phase + " "); }
  });
  console.log(r ? "OK!" : "No update");
}
main().catch(e => console.log("Error:", e.message));