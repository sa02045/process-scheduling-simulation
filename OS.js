const PCB = require("./PCB.js");
const Queue = require("./ReadyQueue");

class Os {
  constructor() {
    this.readyQueue = new Queue();
    this.createProcesses();
    this.curProcess = null;
    this.run();
  }

  // 모든 프로세스가 종료될때까지 실행
  run() {
    this.readyQueue.print();

    let timer = setInterval(() => {
      this.shortTermScheduling();
      if (this.readyQueue.size === 0) clearInterval(timer);
      console.log("\n");
    }, 1000);
  }

  runProcess(process) {
    process.setProcessState = "running";
    process.setExcutedTime = process.getExcutedTime + 1;
    console.log(
      `\n현재 실행중인 프로세스: ${process.id} ${process.getProcessState} ${process.getExcutedTime}/${process.maxExcuteTime}`
    );
  }

  dispatch(process) {
    this.curProcess = process;
    this.runProcess(this.curProcess);
  }
  shortTermScheduling() {
    console.log(`--------Queue------ ${this.readyQueue.size}개의 프로세스`);

    const process = this.readyQueue.pop();

    if (
      process.getProcessState !== "ready" &&
      process.getProcessState !== "waiting"
    )
      return;

    this.dispatch(process);

    if (process.getExcutedTime === process.maxExcuteTime) {
      console.log(
        `${process.id}가 종료되었습니다. ${process.getExcutedTime}/${process.maxExcuteTime}`
      );
      process.setProcessState = "terminated";
    } else {
      process.setProcessState = "waiting";
      this.readyQueue.append(process);
    }

    this.readyQueue.print();
  }
  createProcesses() {
    const process1 = new PCB({ id: "A", maxExcuteTime: 3 });
    const process2 = new PCB({ id: "B", maxExcuteTime: 7 });
    const process3 = new PCB({ id: "C", maxExcuteTime: 11 });
    const process4 = new PCB({ id: "D", maxExcuteTime: 2 });

    process1.setProcessState = "ready";
    process2.setProcessState = "ready";
    process3.setProcessState = "ready";
    process4.setProcessState = "ready";

    this.readyQueue.append(process1);
    this.readyQueue.append(process2);
    this.readyQueue.append(process3);
    this.readyQueue.append(process4);
  }
}

new Os();
