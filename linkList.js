function LinkList(){
    this.head = null;
    this.tail = null;
  }
  
  function Nodes(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
  
  // add to head
  LinkList.prototype.addNodeToHead = function (value){
    const newNode = new Nodes(value, this.head, null);
    if(this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  }
  
  let llHead = new LinkList();
  llHead.addNodeToHead(100);
  llHead.addNodeToHead(200);
  console.log('linkList add to head: ', llHead)

  // add to tail
  LinkList.prototype.addNodeToTail = function (value){
    const newNode = new Nodes(value, null, this.tail);
    if(this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  }
  
  let llTail = new LinkList();
  llTail.addNodeToTail(10);
  llTail.addNodeToTail(20);
  console.log('linkList add to tail: ', llTail);