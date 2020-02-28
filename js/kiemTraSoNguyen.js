function kiemTraSNT(n) {
    let testSNT = true;
    if (n < 2) {
        testSNT = false;
    } else if (n == 2) {
        testSNT = true;
    } else if (n % 2 == 0) {
        testSNT = false;
    }else {
        for (let i = 3; i < n-1; i += 2) {
            if (n % i == 0) {
                testSNT = false;
                break;
            }
        }
    }
    if (testSNT == true){
        alert(n + " là số nguyên tố ")
    } else {
        alert(n + " không phải là số nguyên tố ")
    }
}
kiemTraSNT(9);