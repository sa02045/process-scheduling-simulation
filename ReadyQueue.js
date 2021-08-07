class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(pcb) {
    if (this.head) {
      this.tail.next = pcb;
      this.tail = pcb;
    } else {
      this.head = pcb;
      this.tail = pcb;
    }
    this.size = this.size + 1;
  }
  pop() {
    if (this.size === 0) return;
    this.size -= 1;
    const curPCB = this.head;
    this.head = curPCB.next;
    curPCB.next = null;
    return curPCB;
  }

  print() {
    let curPCB = this.head;
    while (curPCB !== null) {
      console.log(
        `${curPCB.id} ${curPCB.state} ${curPCB.excutedTime}/${curPCB.maxExcuteTime}`
      );
      curPCB = curPCB.next;
    }
  }
}

module.exports = Queue;
