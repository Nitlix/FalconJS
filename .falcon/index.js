import createServer from "./basic/createServer.js";

import {
    fileURLToPath
} from 'url';
import ScanDirectory from './util/ScanDirectory.js';
import chokidar from 'chokidar';
//go through all pages in /pages

import fs, {
    chownSync
} from 'fs';
import path from 'path';
import FalconCompiler, { clearCacheData } from "./basic/FalconCompiler.js";

let listener = null;





const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);
const pagesDirectory = path.join(__dirname, '../pages');

const publicDirectory = path.join(__dirname, '../public');



async function compile() {

    console.log("Updating your app...");

    const startTime = Date.now();

    const app = await createServer();
    const files = ScanDirectory(pagesDirectory);



    files.forEach(async (file) => {


        // Add this file to the list of files
        if (path.extname(file) != ".js") return;
        if (file == "_layout.js") return;


        let originalName = file.split(".js")[0];
        let name = file.split(".js")[0];

        
        if (name == "index") name = "";
        if (name == "_layout") return;


        app.get(`/${name}`, async (req, res) => {
            const loadStart = Date.now();
            res.status(200).end(
                await FalconCompiler(originalName, req)
            )
            console.log(`Rendered page ${originalName} in `, Math.round(Date.now() - loadStart), "ms")
        })


    });



    const publicFiles = ScanDirectory(publicDirectory);


    publicFiles.forEach(async (file) => {
        app.get(`/${file}`, async (req, res) => {
            let filestream = fs.createReadStream(`./public/${file}`);
            filestream.pipe(res);
        })
    })




    listener = app.listen(3000)

    
    console.log("Updated the app in ", Date.now() - startTime, "ms")
}






let complationThread = setTimeout(compile, 5);

async function onUpdate(path) {
    await listener.close();
    await clearTimeout(complationThread);
    complationThread = setTimeout(compile, 5);
}

const allDirectory = path.join(__dirname, '../');


const watcher = chokidar.watch(allDirectory, {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true
});

watcher.on('change', path => {
    onUpdate(path);
});