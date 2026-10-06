const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'src', 'app');
const exts = ['.jsx', '.tsx', '.js', '.ts', '.md', '.html'];

const dupRegex = /\b([A-Za-zÀ-ž0-9'-]+)\s+\1\b/gi;

function replaceAllDuplicatesInText(text){
  let prev;
  do {
    prev = text;
    text = text.replace(dupRegex, (m, w)=> w);
  } while (text !== prev);
  return text;
}

function processFile(file){
  const ext = path.extname(file).toLowerCase();
  let content = fs.readFileSync(file, 'utf8');
  let out = content;

  if (ext === '.md' || ext === '.html'){
    out = replaceAllDuplicatesInText(content);
  } else {
    // For JSX/TSX/JS/TS, only replace text between tags (avoid attributes and code)
    out = content.replace(/>([^<{]+)</g, (m, g1)=>{
      const cleaned = replaceAllDuplicatesInText(g1);
      return '>' + cleaned + '<';
    });
  }

  if (out !== content){
    fs.writeFileSync(file, out, 'utf8');
    return true;
  }
  return false;
}

function walk(dir){
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries){
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (exts.includes(path.extname(e.name).toLowerCase())){
      try{
        const changed = processFile(full);
        if (changed) console.log('Fixed:', full);
      }catch(err){
        console.error('Error processing', full, err.message);
      }
    }
  }
}

if (!fs.existsSync(root)){
  console.error('Root not found:', root);
  process.exit(1);
}

walk(root);
console.log('Done.');
