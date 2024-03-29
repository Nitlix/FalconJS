

export default function mergeProps(props1, props2){
    //merge props2 into props1
    //if the property is "class", then just add the two classes together and seperate them with a space
    let mergedProps = props1;

    for(let prop in props2){
        if(prop == "class" || prop == "style"){
            if (mergedProps[prop] == undefined) mergedProps[prop] = props2[prop];
            else {
                mergedProps[prop] = mergedProps[prop] + " " + props2[prop];
            }
        }else{
            mergedProps[prop] = props2[prop];
        }
    }

    return mergedProps;
}