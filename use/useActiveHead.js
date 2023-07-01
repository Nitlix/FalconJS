import { cache } from "../basic/FalconCompiler.js";




export default async function useActiveHead(page, settings){    
    if (!cache.activeHead[page]) cache.activeHead[page] = ' ';
    cache.activeHead[page] += settings;
    return true
}