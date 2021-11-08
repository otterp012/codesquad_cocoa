function Hashmap(){};

console.log(Hashmap.prototype);
Hashmap.prototype.put = function(StringKey, StringValue) {
    this[StringKey] = StringValue;
}

Hashmap.prototype.remove = function(StringKey){
    delete this[StringKey];
} 

Hashmap.prototype.containKey = function(StringKey) {
    for(let key in this) {
        if(key === StringKey) return true;
        else return false;
    }
}

Hashmap.prototype.get = function(StringKey) {
    return this[StringKey];
}

Hashmap.prototype.isEmpty = function() {
    if(Object.keys(this).length === 0) return true;
    else return false;
}

Hashmap.prototype.keys = function() {
    return Object.keys(this);
}

Hashmap.prototype.replace = function(StringKey, StringValue) {
    if(Object.keys(this).includes(StringKey)) {
        this[StringKey] = StringValue;
    }
}

Hashmap.prototype.size = function() {
    return Object.keys(this).length;
}

Hashmap.prototype.clear = function() {
    for(const StringKey in this) {
        delete this[StringKey];
    }
}

const map = new Hashmap();
map.put("a", 1);
map.put("b", 2);
map.put("c", 3);
map.put("a", 4);

console.log(Object.keys(map))
console.log(map);

// 중복 방지 알고리즘.

// for(let i = 0; i < Object.keys(map).length-1; i++) {
//     for(let j = 1; i < Object.keys(map).length; j++) {
//         if(map[i] === map[j]) {
//             console.log("중복입니다");
//             map.remove(map[i]);
//             break;
//         };
//     }
// }
// 원래 이중for문으로 모든 요소들을 비교하는 방법을 생각했으나,
// 객체의 특성상 추가되면 다른 값으로 덮혀지거나, 하기때문에
// 추후에 모든 요소를 비교하는 방법이 효과가 없을 것 같음.

// 이런 점에서 객체는 동적으로 수정이 가능하므로, 입력을 할때에 제한조건을
// 만들어 두는 것이, 중복을 방지 하기 위해 효과적이라 생각함.
// 결과적으로 put을 살짝 바꾸어주어,

Hashmap.prototype.put = function(StringKey, StringValue) {
    if(!this.containKey(StringKey)){
        this[StringKey] = StringValue;
    } else console.error("중복입니다");
}

// key가 같은 값이 추가되면 중복이라는 오류메세지 출력됨.
