import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';



import { cache } from '../basic/FalconCompiler.js';


const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);







async function getCSS(css){
    return await fs.readFileSync(
        path.join(__dirname, '../../styles/' + css)
    ).toString()
}


export default async function useCSS(all=[]){


    for (let i = 0; i < all.length; i++){
        const path = all[i][0]
        let component = all[i][1]


        if (!component){
            component = "global"
        }

        if (component != "global"){
            if (cache.css[component] == undefined){
                cache.css[component] = []
            }
            else {
                return
            }

            cache.css[component] = await getCSS(path)

        }

        else {
            cache.css.global += await getCSS(path)
        }

    }
}




