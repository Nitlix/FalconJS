import { g, path, svg } from "../../.falcon/components/base.js"
import mergeProps from "../../.falcon/components/mergeProps.js"



export default function Logo(size="3rem", props={}){
    return (
        svg(    
            g(
                path(
                    {
                        d: "M308.567 65.687 L 249.867 102.300 249.867 118.591 C 249.867 131.423,249.902 134.927,250.033 135.093 C 250.125 135.209,274.320 155.744,303.800 180.727 C 333.280 205.710,357.550 226.320,357.733 226.527 C 357.917 226.734,360.167 228.683,362.733 230.859 L 367.400 234.814 367.433 133.012 C 367.452 77.020,367.422 30.729,367.367 30.142 L 367.267 29.075 308.567 65.687 M32.578 64.337 C 32.627 81.715,32.707 109.837,32.756 126.830 L 32.844 157.726 43.189 166.997 L 53.533 176.267 210.200 272.426 C 296.367 325.313,367.002 368.670,367.167 368.774 L 367.467 368.964 367.458 303.115 L 367.449 237.267 358.491 229.487 L 349.533 221.708 341.533 216.942 C 293.435 188.290,33.054 33.107,32.811 32.950 L 32.489 32.740 32.578 64.337 M32.928 166.084 C 32.912 182.288,33.522 367.947,33.591 368.029 C 33.658 368.109,150.425 297.239,150.687 296.959 C 150.734 296.908,150.814 289.337,150.864 280.133 L 150.954 263.400 98.579 217.733 C 69.773 192.617,45.903 171.761,45.536 171.387 C 45.006 170.849,34.089 161.287,33.163 160.550 C 32.946 160.378,32.933 160.691,32.928 166.084 ",
                        stroke: "none",
                        fill: "var(--primary)",
                        fillRule: "evenodd",
                    }
                ),
                {
                    id: "svgg"
                }
            ),
            mergeProps(
                {
                    class: "logo",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "400",
                    height: "397.8666666666667",
                    viewBox: "0, 0, 400,397.8666666666667",
                    style: `width: ${size}; height: ${size};`
                },
                props
            )
        )
    )
}

