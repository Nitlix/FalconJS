import reportCSS from "./reportCSS.js";


/**
 * @param {string} page
 * The page to use the component on
 * @param {string} componentPath
 * The path to the component
 * @returns the component
 */
export default async function useComponent(page, componentPath){
    //import component 
    const component = (await import(`../../components/${componentPath}.js`)).default
    await reportCSS(page, [componentPath])

    return component
}