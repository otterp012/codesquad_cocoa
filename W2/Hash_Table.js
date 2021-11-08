
// const obj = {};

// obj.prototype.put = function(StringKey, StringValue) {
//     obj.StringKey = obj.StringValue;
// }

// obj.prototype.put = f()
//  Cannot set properties of undefined (setting 'put')
// 값을 설정할 수 없는 오류
// prototype가 없어서 . .?
// prototype을 사용하려면, 생성자 함수가 있어야하는데, 생성자함수강벗으니까..!

// 빈 객체 확인
// https://hianna.tistory.com/462

// 2번째오류

// Object.prototype.put = function(StringKey, StringValue) {
//     this.StringKey = StringValue;
// }
// StringKey 값을 받아오는게 아니고, Stringkey = StringValue가 나옴
// {StringKey : 2 } 이런식
// -> 대괄호표기법으로 바꿈

Object.prototype.put = function(StringKey, StringValue) {
    this[`${StringKey}`] = StringValue;
}

Object.prototype.remove = function(StringKey){
    delete this[`${StringKey}`];
}
// a값 대신 StringKey 들어가면 오류남 - 오타였음 오타조심
Object.prototype.containKey = function(StringKey) {
    for(let key of Object.keys(this)) {
        if(key === StringKey) return true;
        else return false;
    }
}
Object.prototype.get = function(StringKey) {
    for(let key of Object.keys(this)) {
        if(key === String) return this[`${StringKey}`];
    }
}

Object.prototype.isEmpty = function() {
    if(Object.keys(this).length === 0) return true;
    else return false;
}

Object.prototype.keys = function() {
    return Object.keys(this);
}

Object.prototype.replace = function(StringKey, StringValue) {
    if(Object.keys(this).includes(StringKey)) {
        this[`${StringKey}`] = StringValue;
    }
}

Object.prototype.size = function() {
    return Object.keys(this).length;
}

Object.prototype.clear = function() {
    for(const property in this) {
        delete this[property];
    }
}
// 객체 순회 더 공부하기?
function hashMapFunction() {
    this.hashMap = new Object();
    hashMapFunction.prototype.put = function(StringKey, StringValue) {
        this.hashMap[`${StringKey}`] = StringValue;
    }
}
const obj = new Object();

obj.put(1, 1);
obj.put(2, 2);
obj.replace("2", 3);
console.log(obj);
console.log(obj.get("1"));

console.log(obj);
console.log(obj.length);
console.log(obj.isEmpty());
console.log(obj.keys());
obj.clear();

console.log(obj);