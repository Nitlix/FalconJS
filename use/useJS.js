import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);




export const jsUsed = {
    global: ""
}





async function getJS(hs){
    return await fs.readFileSync(
        path.join(__dirname, '../../scripts/' + hs)
    ).toString()
}

export default async function useJS(js, component="global"){
    if (component != "global"){
        if (jsUsed[component] == undefined){
            jsUsed[component] = []
        }
        else {
            return
        }
        
        jsUsed[component] = await getJS(js)

    }

    else {
        jsUsed.global += await getJS(js)
    }
    
    
}


