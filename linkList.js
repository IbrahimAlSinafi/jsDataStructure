function LinkList(){
    this.head = null;
    this.tail = null;
  }
  
  function Nodes(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
  
  LinkList.prototype.addNodeToHead = function (value){
    const newNode = new Nodes(value, this.head, null);
    if(this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  }
  
  let ll = new LinkList();
  ll.addNodeToHead(100);
  ll.addNodeToHead(200);
  console.log(ll)