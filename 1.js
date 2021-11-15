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
}];

let answer = [];
let next;
function foo(arr) {
    if((typeof arr) === 'object') {
        next = arr.map(a => a.childnode).flat();
        arr.forEach(n => {
            if(n.type === "sk") answer.push(n.name);
        })

        foo(next);
    } else return;
}

// foo(root);
// console.log(answer);
// 콜스택 오류가 나는 이유를 모르겠음.

// function foo(arr) {

// }

// let answer = [];

// function foo(root) {
//     if((typeof root) === 'object') {
//     for(let x of root) {
//         if(x.type === "sk") answer.push(x.name);
//     }
//     root = root.map(n => n.childnode).flat(); 
//     return foo(root);
//     } else return;
// }

// foo(root);
let i = 1;
while((typeof root) !== 'object') {
    root = root.flatMap(n => n.childnode);
    console.log(i, root);
    i++;
}
console.log(root.flatMap(n => n.childnode).flatMap(n => n.childnode));