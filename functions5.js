//1. zadatak TODO pitanje zasto promenljiva mini nece da prihvati i u prvoj iteraciji

function min_max(a) {
    var i;
    var min = a[0];
    var max = a[0];
    var mini;
    var maxi;
    var t;

    for (i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
            mini = i;
        }
        if (a[i] > max) {
            max = a[i];
            maxi = i;
        }
    }

    t = a[mini];
    a[mini] = a[maxi];
    a[maxi] = t;

    return a;
}

console.log(min_max([1, 5, 9, 6, -1, 2, 8]));

//2. zadatak

function dev2(a) {
    var i;

    for (i = 0; i < a.length; i++) {
        a[i] = a[i] / 2 + 5;
    }
    return a;
}

console.log(dev2([3, 500, -10, 149, 53, 414, 1, 19]));

//3. zadatak

function grades(a, b) {

    if (51 <= b && b <= 60) {
        return "Student " + a + " je imao " + b + " poena i dobio je 6!";
    } else if (61 <= b && b <= 70) {
        return "Student " + a + " je imao " + b + " poena i dobio je 7!";
    } else if (71 <= b && b <= 80) {
        return "Student " + a + " je imao " + b + " poena i dobio je 8!";
    } else if (81 <= b && b <= 90) {
        return "Student " + a + " je imao " + b + " poena i dobio je 9!";
    } else if (91 <= b && b <= 100) {
        return "Student " + a + " je imao " + b + " poena i dobio je 10!";
    } else if (0 <= b && b <= 50) {
        return "Student " + a + " je imao " + b + " poena i pao je!";
    }
}

console.log(grades("Bogdan", 82));

//6. zadatak

function calculate() {
    var i;
    var even = 0;
    var odd = 0;
    var result;

    for (i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            even = even + i;
        } else if (i <= 500) {
            odd = odd + i;
        }
    }
    result = (even - odd) * 12.5;
    return result;
}

console.log(calculate());

//7. zadatak  [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

function stringCheck(array) {
    var i;
    var newString = '';

    for (i = 0; i < array.length; i++) {
        if (typeof array[i] == 'string' && array[i].length > 1) {
            newString = newString + array[i][0] + array[i][1];
        }
    }
    return newString;
}

console.log(stringCheck(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));
