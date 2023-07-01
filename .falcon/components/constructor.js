export default function constructor(content="", props={}, sign="div"){
    return `<${sign} ${Object.keys(props).map(key => `${key}="${props[key]}"`).join(" ")}>${content}</${sign}>`;
}

export function brConstructor(props){
    return `<br ${Object.keys(props).map(key => `${key}='${props[key]}'`).join(" ")} />`;
}