// 3. 중. 맥주

// 항해 선술집에는 맥주를 시키면 1병 당 도장을 하나 찍어드립니다.  
// 도장이 10개가 되면 **서비스맥주** 1병으로 바꿀 수 있고, 
// 바꾼 맥주에도 도장을 하나 찍어드립니다. 

// 주문한 맥주병 수 `beer` 가 주어질 때 마실 수 있는 
// 최대 서비스 맥주병 수를 return 하도록 하는 solution 함수를 작성하세요.

// - `beer` 는 정수입니다
// - • 0 ≤ `beer` ≤ 10,000

function solution(beer) {
  let stamp = beer; //도장은 맥주 1명당 준다.
  let service = 0; // 초기화

  while(stamp >= 10){ //도장이 10개 이상되었을때
    service += stamp/10 
    //서비스 맥주는 도장을 10개로 나눈 몫만큼 추가
    stamp = stamp%10 + stamp/10
    //남은 도장 + 서비스 맥주
  }
  return service;
}
let beer = 9911;
console.log(parseInt(beer)); //정수 출력을 위해