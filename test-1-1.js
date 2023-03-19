// 1. 하.*N to M

// N부터 M까지 홀수를 출력하는 프로그램을 작성해보자.

// - 첫째 줄에 자연수 N과 자연수 M이 공백을 가지고 주어진다. (N ≤ M ≤ 1,000)
// - 첫째 줄에 N부터 M까지의 홀수를 공백을 사이에 두고 차례대로 출력한다. 
// (단, 한 줄에 최대 4개씩 출력해야 한다.)

function solution(n, m) {
  //n과 m 사이의 홀수를 구하는 반복문
    let count = 0;
    let list = ''

    for(let i = n; i <= m; i++) {
        if(i%2 === 1) {
            if(count % 4 === 0){
                list += '\n'
            }
            list += i+' ';
            count += 1;
            // console.log(list)
        }
    }
    console.log(list)
}

let n = 115;
let m = 134;

solution(n,m)

 