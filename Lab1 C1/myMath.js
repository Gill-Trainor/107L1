module.exports = {
    funMath: function () {
        console.log("This is the math module");
    },
    sum: function (num1, num2) {
        return num1 + num2;
    },
    greater: function (num1, num2) {
        if (num1 > num2) {
            return num1;
        } else {
            return num2;
        }
        //return the bigger number
        //3, 20 = 20
    },
    smaller: function (num1, num2) {
        //return min number
        if (num1 < num2) {
            return num1;
        } else {
            return num2;
        }
    },
    division: function(number, by){
        if(by == 0){
            console.log('DO NOT DIVIDE BY 0, PLEASE!');
            return 0;
        }
        return number / by;
    },
    isEven: function(num){
        var res = num % 2;
        if(res ==0) return true;
        else return false;
    }
    
};