import { doctype, head, html, body, meta, style } from "../components/base.js"


export let cache = {
    css: {
        global: ''
    },
    js: {

    },


    layout: null,
    pageCompilers: {

    },

    head: {

    },
    activeHead: {
        
    },
    reports: {
        css: {
            '*': []
        }
    },


    staticPageRequests: []
}


function log(message){
    console.log(`\x1b[36m[Falcon Compiler]\x1b[0m ${message}`)
}


function handleCSS(page){
    let struct = ''

    for (let x = 0; x < cache.reports.css[page].length; x++){
        let component = cache.reports.css[page][x]

        if (cache.css[component] != undefined){
            struct += style(
                cache.css[component],
                {
                    "data-falcon-component": component
                }
            )
        }
    }

    for (let x = 0; x < cache.reports.css['*'].length; x++){
        let component = cache.reports.css['*'][x]

        if (cache.css[component] != undefined){
            struct += style(
                cache.css[component],
                {
                    "data-falcon-component": component
                }
            )
        }
    }


    return struct
}



export function clearCacheData(){
    cache = {
        css: {
            global: ''
        },
        js: {
    
        },
    
    
        layout: null,
        pageCompilers: {
    
        },
    
        head: {
    
        },
    
        reports: {
            css: {
                '*': []
            }
        }
    }
}


export default async function FalconCompiler(page, data){


    let staticPage = false;

    // import layout
    if (!cache.layout) {
        log(`Generating LAYOUT CACHE at first request (${page})...`)
        cache.layout = (await import(`../../pages/_layout.js`)).default
    }

    // import page
    if (!cache.pageCompilers[page]) {
        log(`Generating PAGE FUNCTION CACHE for ${page}...`)
        if (cache.staticPageRequests.includes(page)) {
            log(`Aborted ^^^`)
            log(`Generating STATIC PAGE CACHE for ${page}...`)


            const pageRenderer = (await import(`../../pages/${page}.js`)).default

            const renderedPage = pageRenderer(data)

            cache.pageCompilers[page] = (data)=>{
                return renderedPage
            }

            //remove page from static page requests

            staticPage = true;
        }
        else {
            cache.pageCompilers[page] = (await import(`../../pages/${page}.js`)).default
        }
    }

    if (cache.staticPageRequests.includes(page)) {
        staticPage = true;
    }

    
    //import head cache

    if (!cache.head[page]) {
        log(`Generating HEAD CACHE for ${page}...`)
        cache.head[page] = ' '
    }

     //import active head cache

     if (!cache.activeHead[page]) {
        log(`Generating ACTIVE HEAD CACHE for ${page}...`)
        cache.activeHead[page] = ' '
    }
    
    // generate css report
    if (!cache.reports.css[page]) {
        log(`Generating CSS REPORT for ${page}...`)
        cache.reports.css[page] = []
    }



    const Rendered_Page = await cache.pageCompilers[page](data)

    // get page 

    let struct = `
        ${doctype()}
        ${html(

            head(
                cache.head[page],
                cache.activeHead[page],
                meta({name:"viewport",content:"width=device-width, initial-scale=1.0"}),
                meta({charset:"UTF-8"}),
                handleCSS(page)
            ),
            body(
                Rendered_Page
            ),

            
            {
                lang: "en"
            },
        )}
    `

    // reset all active caches

        // head
        if (!staticPage){
            cache.activeHead[page] = ' '
        }


    // return rendered structure
    return struct
}