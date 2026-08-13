#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = path.join(process.cwd(), "registry", "plugins");
const schema = JSON.parse(fs.readFileSync(path.join(process.cwd(), "registry", "schema.json"), "utf8"));
const required = schema.required;
let files = [];
function walk(dir) {
  for (const item of fs.readdirSync(dir, {withFileTypes:true})) {
    const p=path.join(dir,item.name);
    if(item.isDirectory()) walk(p);
    else if(item.name.endsWith(".json")) files.push(p);
  }
}
walk(root);
let errors=[];
for (const file of files) {
  let x;
  try { x=JSON.parse(fs.readFileSync(file,"utf8")); } catch(e) { errors.push(`${file}: invalid JSON`); continue; }
  for(const k of required) if(!(k in x)) errors.push(`${file}: missing ${k}`);
  if(typeof x.name!=="string" || !x.name) errors.push(`${file}: invalid name`);
  if(typeof x.repository!=="string" || !/^https:\/\/github\.com\//.test(x.repository)) errors.push(`${file}: invalid repository`);
  if(!Array.isArray(x.type) || !x.type.length) errors.push(`${file}: invalid type`);
  if(!Array.isArray(x.categories) || !x.categories.length) errors.push(`${file}: invalid categories`);
  if(!Array.isArray(x.runtime) || !x.runtime.includes("dsh")) errors.push(`${file}: runtime must include dsh`);
  if(x.official !== false) errors.push(`${file}: imported entries must be community (official=false)`);
}
console.log(`Validated ${files.length} registry entries.`);
if(errors.length){ console.error(errors.join("\n")); process.exit(1); }
