
const root = [{
	"id": 1,
	"name": "Yong",
	"phone": "010-0000-0000",
	"type": "sk",
	"childnode": [{
		"id": 11,
		"name": "echo",
		"phone": "010-0000-1111",
		"type": "kt",
		"childnode": [{
				"id": 115,
				"name": "hary",
				"phone": "211-1111-0000",
				"type": "sk",
				"childnode": [{
					"id": 1159,
					"name": "pobi",
					"phone": "010-444-000",
					"type": "kt",
					"childnode": [{
							"id": 11592,
							"name": "cherry",
							"phone": "111-222-0000",
							"type": "lg",
							"childnode": []
						},
						{
							"id": 11595,
							"name": "solvin",
							"phone": "010-000-3333",
							"type": "sk",
							"childnode": []
						}
					]
				}]
			},
			{
				"id": 116,
				"name": "kim",
				"phone": "444-111-0200",
				"type": "kt",
				"childnode": [{
					"id": 1168,
					"name": "hani",
					"phone": "010-222-0000",
					"type": "sk",
					"childnode": [{
						"id": 11689,
						"name": "ho",
						"phone": "010-000-0000",
						"type": "kt",
						"childnode": [{
								"id": 116890,
								"name": "wonsuk",
								"phone": "010-000-0000",
								"type": "kt",
								"childnode": []
							},
							{
								"id": 1168901,
								"name": "chulsu",
								"phone": "010-0000-0000",
								"type": "sk",
								"childnode": []
							}
						]
					}]
				}]
			},
			{
				"id": 117,
				"name": "hong",
				"phone": "010-0000-0000",
				"type": "lg",
				"childnode": []
			}
		]
	}]
}]
let t = [];
root.forEach(n => {
    if(n.type ==="sk") {
    t.push(n.name);
}})
console.log(t);
console.log(root.length);
// 1. root는 length가 1인 배열로 배열메서드를 사용할 수 있다.
// 이때 콜백함수에서 n은 배열의 요소들을 순회하게 된다.
// ex)
root.forEach(n => {
	if(n.type === "sk") console.log("?");
});
// {
//     id: 1,
//     name: 'Yong',
//     phone: '010-0000-0000',
//     type: 'sk',
//     childnode: [
//       {
//         id: 11,
//         name: 'echo',
//         phone: '010-0000-1111',
//         type: 'kt',
//         childnode: [Array]
//       }
//     ]
//   }
let mapped = root.map(n => n.childnode);
// 2. map 메서드를 사용해, item의 요소를 childnode로 확대할 수 있다. 
// -> 안쪽 배열로 순회할 수 있다. 
// [
//     [
//       {
//         id: 11,
//         name: 'echo',
//         phone: '010-0000-1111',
//         type: 'kt',
//         childnode: [Array]
//       }
//     ]
//   ]
// 그치만, map 메서드만 사용하면, 2차원 배열이된다.
// 다음 childnode로의 접근이 힘들게 되므로, flat 메서드로
// 1차원으로 평탄화 해준다.

let flatted = mapped.flat();

console.log(flatted);

root.find(n => {
    if(n.type === "sk") console.log("찾았다!");
})

// let ansewr = [];
// root.forEach(n => {
//     if(n.type === "sk") ansewr.push(n.name);
// })

// [
//     {
//       id: 11,
//       name: 'echo',
//       phone: '010-0000-1111',
//       type: 'kt',
//       childnode: [ [Object], [Object], [Object] ]
//     }
//   ]
//  평탄화되어 1차원 배열이 되었다!


// 3. find 메서드를 통해서 배열을 순회할 수 있다.
// 이때, 배열안만 순회하므로 하위 객체들을 순회한 것은 아니다.



// 쉽게 생각하면 재귀 말고,

let answer = [];

const fs = require('fs');
const jsonData = JSON.parse(fs.readFileSync('./Week1_Wed/mission2-5.json', 'utf8'));

function foo(arr) {
	arr.forEach(item => {
		if(item.type === "sk") answer.push(item.name);
	})

	let next = arr.childnode;

	if((typeof next) === 'object') {
		foo(next);
	}
}
foo(jsonData);
console.log(answer);

