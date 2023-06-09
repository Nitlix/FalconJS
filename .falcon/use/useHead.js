import { cache } from "../basic/FalconCompiler.js";




export default async function useHead(page, settings){    
    if (!cache.head[page]) cache.head[page] = ' ';
    cache.head[page] += settings;
    return true
}