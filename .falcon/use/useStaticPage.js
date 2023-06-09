import { cache } from "../basic/FalconCompiler.js";



export default async function useStaticPage(page){
    cache.staticPageRequests.push(page);
    return true;
}