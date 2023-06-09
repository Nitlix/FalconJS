import Combine from '../.falcon/basic/Combine.js'

// components

import { title, meta } from '../.falcon/components/base.js'
import useComponent from '../.falcon/use/useComponent.js'
import useActiveHead from '../.falcon/use/useActiveHead.js'


const Header = await useComponent("index", "global/header")


export default async function Page(data){
    useActiveHead("index", Combine(
        title("Nitlix - Home"),
        meta(
            {
                name: "description",
                content: "Nitlix's home page"

            }
        )     
    ))

    
    return (
        Combine(
            Header("index"),
            Date.now()
        )
    )
}
