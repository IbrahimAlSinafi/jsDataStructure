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
  
  let ll = new LinkList();
  ll.addNodeToHead(100);
  ll.addNodeToHead(200);
  console.log('linkList add to head: ', ll)

  // add to tail
  LinkList.prototype.addNodeToTail = function (value){
    const newNode = new Nodes(value, null, this.tail);
    if(this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  }
  
  ll.addNodeToTail(10);
  console.log('previous tail: ', ll.tail.prev);


  // remove head
  LinkList.prototype.removeHead = function () {
    if(!this.head) return null;
      const val = this.head.value;
      this.head = this.head.next;
      if(this.head) this.head.prev = null;
      else this.tail = null;
    return val;
  }  
  console.log('remove: ', ll.removeHead())

  // remove tail
  LinkList.prototype.removeTail = function (){
    if(!this.tail) return null;
    const val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return val;
  }

  console.log('linkList after calling removeTail: ', ll.removeTail());

  // search value
  LinkList.prototype.search = function(searchVal) {
    while(this.head !== null) {
      if (this.head.value === searchVal) return 'found';
      this.head = this.head.next;
    }
    return null;
  }
  console.log(ll.search(100))