// Анонимная самовызывающаяся функция
// Запишем функцию в переменную counter
var counter = (function () {
    // Приватные переменные
    var _number;

    // Приватные методы
    var _checkInteger = function isInteger(x) {
        return (x ^ 0) === x;
    }

    // Публичные методы
    var setValue = function (x) {
        if (_checkInteger(x)) {
            _number = x;
        } else {
            console.log('Неверное значение');
        }
    }

    var increaseCounter = function () {
        _number++;
    }

    var decreaseCounter = function () {
        _number--;
    }

    var printCounter = function () {
        console.log(_number);
    }

    // Чтобы иметь доступ к внутренним переменным, их надо вернуть через return
    return {
        setValue,
        increaseCounter,
        decreaseCounter,
        printCounter
    }
}());

counter.setValue(1.2);
counter.printCounter();

counter.setValue(20);
counter.increaseCounter();
counter.increaseCounter();
counter.printCounter();
counter.decreaseCounter();
counter.printCounter();
