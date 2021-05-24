function createHead(){
    return{
        value: "Head",
        next: null
    }
}

function createNode(value = null){
    return{
        value: value,
        next: null
    }
}

function insert(node, value){
    if(node.next == null){
        node.next = createNode(value);
    }
    else{
        insert(node.next, value);
    }
}

function query(node, value){
    if(node == null){
        return false;
    }
    else if(node.value == value){
        return true;
    }
    else if(node.value != value){
        return query(node.next, value);
    }
    else{
        return false;
    }
}

function printList(node){
    if(node == null){
        return
    }
    else{
        console.log(node.value);
        printList(node.next);
    }
}

function remove(current_node, prev_node = null, value){
    if(current_node.value == value){
        if(prev_node != null){
            prev_node.next = current_node.next;
            current_node = null;
            return
        }
        else{
            
            current_node = null
            return
        }   
    }
    else{
        prev_node = current_node;
        current_node = current_node.next;
        remove(current_node, prev_node, value)

    }
    return 
}




head = createHead()

insert(head, 1)
insert(head,2)
insert(head,5)
insert(head,8)
insert(head,6)
insert(head,53)

printList(head)

remove(head, null, 53)

printList(head)