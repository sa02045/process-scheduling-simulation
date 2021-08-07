class PCB {
  constructor({ id, maxExcuteTime }) {
    this.id = id;
    this.maxExcuteTime = maxExcuteTime;
    this.state = "new";
    this.excutedTime = 0;
    this.next = null;
  }

  get getProcessState() {
    return this.state;
  }

  set setProcessState(state) {
    this.state = state;
  }

  get getExcutedTime() {
    return this.excutedTime;
  }

  set setExcutedTime(time) {
    this.excutedTime = time;
  }
}

module.exports = PCB;
