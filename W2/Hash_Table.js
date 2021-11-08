
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

function Hashmap(){};

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
    for(const property in this) {
        delete this[property];
    }
}


// 중복 방지 알고리즘.