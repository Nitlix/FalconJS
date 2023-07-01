import useCSS from "../.falcon/use/useCSS.js"
import reportCSS from "../.falcon/use/reportCSS.js"
import useStaticPage from "../.falcon/use/useStaticPage.js"


useCSS([["flame.css"], ["global.css"]])
reportCSS("*", ["global"])


export default async function Layout(content, data, page){
    return (
        content
    )
}