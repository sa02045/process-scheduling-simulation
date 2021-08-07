# 💻프로세스 스케줄링 시뮬레이션

## 🙂개요

| short-term 스케줄러가 readyQueue에서 프로세스를 CPU에 할당하는 시뮬레이션입니다.

<br>
1. short-term 스케줄링 기법으로는 RR(라운드로빈) 알고리즘을 사용했습니다.
2. long-term 스케줄러 없이 프로세스들은 이미 readyQueue에 들어있다고 가정했습니다.

<br>
## 😊실행방법

```js
node OS.js
```

<br>

![11](https://user-images.githubusercontent.com/50866506/128592075-2934788c-dea6-4fbe-83aa-d5e786729d62.JPG)
![12](https://user-images.githubusercontent.com/50866506/128592070-23f56785-97c3-416f-8d7e-ba4fc1a301bb.JPG)

## 📗시뮬레이션 설명

1. PCB.js

   - 주어진 프로세스 정보를 바탕으로 `PCB`를 생성합니다.
   - 시뮬레이션을 위해서 `id` `state` `실행시간` `최대실행시간`의 정보를 담았고, 준비큐에서 다음 PCB를 가르킬 `next` 포인터를 가집니다.

2. ReadyQueue.js

   - CPU에 할당될 프로세스의 정보를 담은 `PCB`가 들어있는 큐 자료구조입니다.
   - OS에게 프로세스는 `PCB`형태로 관리합니다.

3. OS.js

   1. `run()`

   - OS는 `1초`마다 shortermScheduling합니다

   2. `shortermScheduling()`

   - short-term-Scheduler는 `readyQueue`에서 실행할 프로세스를 가져와 CPU에게 할당합니다.(dispatch)
   - CPU가 프로세스를 실행 후, 실행이 모두 완료되었다면 `terminated`하고, 아직 완료되지 않았다면 `waiting` 상태로 만들어 다시 `readyQueue`에 집어넣습니다.

   3. `dispatch()`

   - short-term-Scheduler가 `CPU`에게 실행할 프로세스를 할당합니다.

   4. `runProcess`

   - CPU가 프로세스를 실행하고 해당 프로세스의 실행시간을 +1초 증가시킵니다.

## 스케줄링 알고리즘

| RR(라운드로빈) 알고리즘을 사용했습니다.

- RR(라운드로빈) 알고리즘은 프로세스들 사이에 우선순위를 두지 않고, 순서대로 시간단위로 CPU를 할당합니다.
