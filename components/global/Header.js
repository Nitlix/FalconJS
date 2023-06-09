import { header, div, a, p } from "../../.falcon/components/base.js";
import useCSS from "../../.falcon/use/useCSS.js";
import Logo from "./Logo.js";

useCSS([["components/global/Header.css", "global/header"]])


const navData = {
    index: {
        'Home': '/',
        'About Me': '#about',
        'Story': '#story',
        'Projects': '#projects',
        'Socials': '#socials',
        'Copyright': '#footer'
    }
}



function Nav(page){
    return (
        div(
            Object.keys(navData[page]).map((name)=>{
                return NavItem(name, navData[page][name])
            }),
            {
                class: "flex center gap2"
            }
        )
    )
}


function NavItem(name, href){
    return (
        a(
            p(name),
            {
                href: href
            }
        )
    )
}

export default function Header(page){
    return header(
        Logo(),
        Nav(page),
        {
            class: "flex center space"  
        }
    )
}