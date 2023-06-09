export let headAddContents = ``

export default function ExtraHead(content){
    headAddContents += content;
    return headAddContents;
}