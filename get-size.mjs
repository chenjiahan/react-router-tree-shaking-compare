import fs from 'fs';
import path from 'path';
import { filesize } from 'filesize';
import { gzipSize } from 'gzip-size';

// Get all .js files from dist directory (excluding .js.map files)
function getJSFiles(dir) {
  const files = [];

  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} does not exist`);
    return files;
  }

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);

    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.js') && !item.endsWith('.js.map')) {
        files.push(fullPath);
      }
    });
  }

  traverse(dir);
  return files;
}

// Calculate total size and gzip size for all JS files
async function calculateSizes() {
  const distDir = path.join(import.meta.dirname, 'dist');
  const jsFiles = getJSFiles(distDir);

  if (jsFiles.length === 0) {
    console.log('No .js files found in dist directory');
    return;
  }

  console.log(`Found ${jsFiles.length} JS files:`);

  let totalSize = 0;
  let totalGzipSize = 0;

  // Process each file
  for (const filePath of jsFiles) {
    const content = fs.readFileSync(filePath);
    const size = content.length;
    const gzipped = await gzipSize(content);

    totalSize += size;
    totalGzipSize += gzipped;

    const relativePath = path.relative(distDir, filePath);
    console.log(`  ${relativePath}: ${filesize(size)} (${filesize(gzipped)} gzipped)`);
  }

  console.log('\n--- Summary ---');
  console.log(`Total size: ${filesize(totalSize)}`);
  console.log(`Total gzipped size: ${filesize(totalGzipSize)}`);
  console.log(`Compression ratio: ${((1 - totalGzipSize / totalSize) * 100).toFixed(1)}%`);
}

// Run the script
calculateSizes().catch(console.error);