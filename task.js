var item =[];


function display(item){
    for(i=0;i<item.length;i++){
        console.log(item[i]);
    }
}

function add(item,...name){
    console.log(item);
    item.unshift(name)
    console.log(item);
    // remove item
    item[0].shift();
    console.log(item);
}



add(item,"soap","brush","item3")


item.pop()

display(item)




