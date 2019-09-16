const raphPayment = [140, 45, 270];
function tipCalculator(bill){
    // switch (bill) {
    //     case (bill < 50):
    //         return (bill * .2);
    //     case (bill < 200):
    //         return (bill * .15);
    //     default:
    //         return (bill * .1);
    // }
    let percentage;
    switch (bill) {
        case (bill < 50):
            percentage = .2;
        case (bill < 200):
            percentage = .15;
        default:
            percentage = .1;
    }
    return percentage*bill;
}


/* const raphTips = [140*.15, 45*.2, 270*.1]; */