import { cache } from "../basic/FalconCompiler.js"


export default async function reportCSS(page='index', css=[]){
    if (cache.reports.css[page] == undefined){
        cache.reports.css[page] = []
    }

    css.forEach(component => {
        cache.reports.css[page].push(component)
    })
}

