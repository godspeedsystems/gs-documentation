// scripts/moveBuild.js
const fs = require('fs-extra');

async function moveBuild() {
  await fs.move('build', 'docs', { overwrite: true });
  console.log('Build folder renamed to docs');
}

moveBuild();
