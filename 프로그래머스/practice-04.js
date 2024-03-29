
/* 문제1 
중. 배달의 민족

응수는 요즘 쌀 배달을 하고 있습니다. 쌀 가게에 정확하게 N 킬로그램 배달해야 합니다.
응수가 가진 쌀 포대는 3킬로와 5킬로 포대가 있다.
최대한 적은 봉지 개수로 배달을 하려합니다. 
예를 들면, 21킬로그램 쌀은, 3킬로 포대 7개로 배달 가능 하지만, 
5킬로 3포대와 3킬로 2포대로 배달하면 총 5포대로 더 적은 개수로 배달할 수 있다.
응수가 쌀을 N킬로그램 배달할 때, 가장 적은 쌀 포대의 개수를 구하는 프로그램을 작성하세요.

- 정수 N이 주어진다. (3 ≤ N ≤ 1,000)
- 정확하게 N킬로그램을 만들 수 없다면 -1을 출력

지정 입력값
N:
57
2

result:
13
-1
*/

/*
문제 풀이 방법은 
while문을 돌려 현재 n 에서 3을 빼주면서 조건을 비교해주어야 하는데 그 말은
count 의 수가 늘어난 다는 것은 그만큼 3kg 봉지를 추가 했다는 것이다.

그러나 배달해야하는 봉지의 개수를 최소화하려면 최대한 5kg 봉지로 배달해야한다.
그러면 값이 5로 나누어 떨어질때 즉지 5kg 봉지의 개수가 정해지도록 한다.

정리하면 값이 5로 나누어지는 조건에 일치하면 3의 경우를 뺀 킬로그램의 봉지개수와 
그동안 더한 count 봉지 개수를 더한 수를 출력해준다.

정확하게 n kg 을 만들 수 없다면 -1 도 출력해야한다.
*/


function solution(N){
  let count = 0;

  while(true) {
    if (N % 5 === 0) {
      console.log(N / 5 + count);
      break;
    }
    if(0 > N) {
      console.log(-1);
      break;
    }
    count++
    N -= 3;
  }
}
let N = 11;
solution(N)