import constructor, { brConstructor } from "./constructor.js";
import parseArgs from "./parseArgs.js";

export function doctype(){
    return "<!DOCTYPE html>";
}


export function a(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "a");
}

export function abbr(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "abbr");
}

export function address(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "address");
}

export function area(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "area");
}

export function article(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "article");
}

export function aside(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "aside");
}

export function audio(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "audio");
}

export function b(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "b");
}

export function base(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "base");
}

export function bdi(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "bdi");
}

export function bdo(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "bdo");
}

export function big(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "big");
}

export function blockquote(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "blockquote");
}

export function body(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "body");
}

export function br(...args){
    const { content, props } = parseArgs(args);
    
    return brConstructor(content, props, "br");
}

export function button(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "button");
}

export function canvas(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "canvas");
}

export function caption(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "caption");
}

export function cite(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "cite");
}

export function code(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "code");
}

export function col(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "col");
}

export function colgroup(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "colgroup");
}

export function data(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "data");
}

export function datalist(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "datalist");
}

export function dd(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "dd");
}

export function del(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "del");
}

export function details(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "details");
}

export function dfn(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "dfn");
}

export function dialog(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "dialog");
}

export function div(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "div");
}

export function dl(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "dl");
}

export function dt(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "dt");
}

export function em(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "em");
}

export function embed(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "embed");
}

export function fieldset(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "fieldset");
}

export function figcaption(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "figcaption");
}

export function figure(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "figure");
}

export function footer(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "footer");
}

export function form(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "form");
}

export function h1(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "h1");
}

export function h2(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "h2");
}

export function h3(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "h3");
}

export function h4(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "h4");
}

export function h6(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "h6");
}

export function head(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "head");
}

export function header(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "header");
}

export function hr(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "hr");
}

export function html(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "html");
}

export function i(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "i");
}

export function iframe(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "iframe");
}

export function img(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "img");
}

export function input(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "input");
}

export function ins(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "ins");
}

export function kbd(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "kbd");
}

export function label(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "label");
}

export function legend(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "legend");
}

export function li(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "li");
}

export function link(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "link");
}

export function main(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "main");
}

export function map(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "map");
}

export function mark(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "mark");
}

export function meta(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "meta");
}

export function meter(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "meter");
}

export function nav(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "nav");
}

export function noscript(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "noscript");
}

export function object(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "object");
}

export function ol(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "ol");
}

export function optgroup(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "optgroup");
}

export function option(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "option");
}

export function output(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "output");
}

export function p(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "p");
}

export function param(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "param");
}

export function picture(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "picture");
}

export function pre(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "pre");
}

export function progress(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "progress");
}

export function q(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "q");
}

export function rp(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "rp");
}

export function rt(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "rt");
}

export function ruby(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "ruby");
}

export function s(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "s");
}

export function samp(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "samp");
}

export function script(...args){
    const { content, props } = parseArgs(args);

    const callbackString = content.toString();
    const functionBody = callbackString.match(/(?<=\{)([^}]*)/)[0].trim();
    
    return constructor(functionBody, props, "script");
}

export function manualScript(...args){
    const { content, props } = parseArgs(args);

    return constructor(content, props, "script");
}


export function section(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "section");
}

export function select(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "select");
}

export function small(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "small");
}

export function source(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "source");
}

export function span(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "span");
}

export function strong(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "strong");
}

export function style(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "style");
}

export function sub(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "sub");
}

export function summary(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "summary");
}

export function sup(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "sup");
}

export function svg(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "svg");
}

//svg components

export function circle(...args){
    const { content, props } = parseArgs(args);

    return constructor(content, props, "circle");
}

export function clipPath(...args){
    const { content, props } = parseArgs(args);

    return constructor(content, props, "clipPath");
}

export function defs(...args){
    const { content, props } = parseArgs(args);

    return constructor(content, props, "defs");
}

export function ellipse(...args){
    const { content, props } = parseArgs(args);

    return constructor(content, props, "ellipse");
}

export function foreignObject(...args){
    const { content, props } = parseArgs(args);

    return constructor(content, props, "foreignObject");
}

export function g(...args){
    const { content, props } = parseArgs(args);

    return constructor(content, props, "g");
}

export function image(...args){
    const { content, props } = parseArgs(args);

    return constructor(content, props, "image");
}

export function line(...args){
    const { content, props } = parseArgs(args);

    return constructor(content, props, "line");
}

export function path(...args){
    const { content, props } = parseArgs(args);

    return constructor(content, props, "path");
}

//continue

export function table(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "table");
}

export function tbody(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "tbody");
}

export function td(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "td");
}

export function template(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "template");
}

export function textarea(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "textarea");
}

export function tfoot(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "tfoot");
}

export function th(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "th");
}

export function thead(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "thead");
}

export function time(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "time");
}

export function title(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "title");
}

export function tr(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "tr");
}

export function track(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "track");
}

export function u(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "u");
}

export function ul(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "ul");
}

export function video(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "video");
}

export function wbr(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "wbr");
}

export function webview(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "webview");
}

export function xmp(...args){
    const { content, props } = parseArgs(args);
    
    return constructor(content, props, "xmp");
}

