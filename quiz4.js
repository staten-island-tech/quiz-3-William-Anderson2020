const dejon = {
    nameFirst : `Dejon`,
    nameLast : `Kurti`,
    mass : 110,
    height : 1.95,
    bmi : function() {
    return this.mass / (this.height * this.height);
    },
};

dejon.bmi();

const rob = {
    nameFirst : `Robert`,
    nameLast : `Grande`,
    mass : 78,
    height : 1.69,
    bmi : function() {
    return this.mass / (this.height * this.height);
    },
};

rob.bmi();

if (dejon.bmi() > rob.bmi()){
    console.log(`Dejon's BMI is greater than Rob's.`);
} else if (dejon.bmi() < rob.bmi()){
    console.log(`Rob's BMI is greater than Dejon's.`);
} else if (dejon.bmi() == rob.bmi()){
    console.log(`Their BMIs are equal.`);
}

