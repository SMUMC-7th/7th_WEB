// 배열 리터럴 [] 를 사용하여 만드는 방법
let matthew = [];

// 각각 인덱스를 [] 안에 넣어, 배열 안에 값을 할당할 수 있다.
matthew[0] = 'kim';
matthew[1] = 'yong';
matthew[2] = 'min';

// i = 0 부터, matthew의 길이 총 3(['kim', 'yong', 'min'], i++ (하나씩 증가)
for (let i = 0; i < matthew.length; i++) {
	console.log(matthew[i]);
}