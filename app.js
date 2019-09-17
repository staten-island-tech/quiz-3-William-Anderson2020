const raphPayments = [140, 45, 270];
function tipCalculator(bill){
	let percentage;
	if (bill < 50){
		percentage = .2;
	} else if (bill >= 50 && bill<200){
		percentage = .15;
	}else if (bill >= 200){
		percentage = .1;
	}
	return bill * percentage;
}

let raphTips = [];

for ( i = 0; i < raphPayments.length; i++) {
	raphTips.push(tipCalculator(raphPayments[i]));
}

let raphTotals = [];

for (i = 0; i<raphPayments.length; i++) {
	raphTotals.push(raphPayments[i] + raphTips[i]);
}

const raphBigPayments = raphPayments.filter( value => value > 100);

console.log(`Raph's payments were ${raphPayments}. The tips he paid were ${raphTips}. The totals he paid were ${raphTotals}. The payments he made over $100 were ${raphBigPayments}.`);






/* const raphPayment = [140, 45, 270];
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