

export default function Combine(/**/){
    const args = arguments;
    const values = Object.values(args);

    const string = values.join("");
    
    return string;
}

export function CombineList(list){
    
}