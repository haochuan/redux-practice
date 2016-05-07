import moment from 'moment';

const ROUND_ONE = 20000;
const ROUND_TWO = 65000;


const TOTAL_MAX = 300000;
const TOTAL_MIN = 200000;

const ANNUAL_INCRESEMENT = 20000;
const START_DATE = moment("2017-04-01");

const ADV_RATE_MIN = 0.1;
const ADV_RATE_MAX = 0.3;

const PP_RATE_MIN = 0.1;
const PP_RATE_MAX = 0.4;

const DAILY_DIFF = 500;


// function run(time) {
//     const ANNOUCE_DATE = time.
// }

/**
 * Generate the total application number for the current year
 * @param  {Moment} time Moment obj for current time
 * @return {Int} total number 
 */
function generateTotalNumber(time) {
    const random = Math.random() * (TOTAL_MAX - TOTAL_MIN) + TOTAL_MIN;
    const yearDiff = time.diff(START_DATE, 'years');
    return random + ANNUAL_INCRESEMENT * yearDiff;
}

/**
 * Generate 4 types of data based on the total number
 * adv pp, adv nonpp, reg pp, reg nonpp
 * @param  {Number} number Total number
 * @return {Obj}        Seperated data
 */
function seperateTotalNumber(number) {
    const advRate = Math.random() * (ADV_RATE_MAX - ADV_RATE_MIN) + ADV_RATE_MIN;
    const ppAdvRate = Math.random() * (PP_RATE_MAX - PP_RATE_MIN) + PP_RATE_MIN;
    const ppRegRate = Math.random() * (PP_RATE_MAX - PP_RATE_MIN) + PP_RATE_MIN;

    const advTotal = Math.floor(number * advRate);
    const regTotal = number - advTotal;

    const advPp = Math.floor(advTotal * ppAdvRate);
    const advNonpp = advTotal - advPp;

    const regPp = Math.floor(regTotal * ppRegRate);
    const regNonpp = regTotal - regPp;

    return {
        adv_pp: advPp,
        adv_nonpp: advNonpp,
        reg_pp: regPp,
        reg_nonpp: regNonpp
    }
}

/**
 * Test if win the lottery
 * @param  {Obj} info   Info about the application
 * @param  {Obj} number Seperated Data
 * @return {Obj}        New info about the application
 */
function lottery(info, number) {
    let result = {};
    let roundOne = null;
    let roundTwo = null;

    if (info.type === 'adv') {
        roundOne = Math.random() < ROUND_ONE / (number.adv_pp + number.adv_nonpp);
        if (!roundOne) {
            roundTwo = Math.random() < ROUND_TWO / (number.adv_pp + number.adv_nonpp + number.reg_pp + number.reg_nonpp - ROUND_ONE);
        }
    } else {
        roundOne = Math.random() < ROUND_TWO / (number.adv_pp + number.adv_nonpp + number.reg_pp + number.reg_nonpp - ROUND_ONE);
    }

    let pass = (roundOne || roundTwo) ? true : false;

    return Object.assign(info, {
        roundOne: roundOne,
        roundTwo: roundTwo,
        pass: pass
    });
} 

function timeline(time, totalNumber) {
    let line = [];
    // announce stopping receiving
    let announceDate = time.add(Math.floor(Math.random() * (14 - 7) + 7), 'd');
    line.push({
        event: 'annouce',
        time: announceDate.format('YYYY-MM-DD'),
        description: "Annouced received " + totalNumber + " applications"
    });

    // first adv pp receipt
    let firstAdvPpDate = announceDate.add(Math.floor(Math.random() * (5 - 0) + 0), 'd');
    line.push({
        event: 'firstAdvPp',
        time: firstAdvPpDate.format('YYYY-MM-DD'),
        description: "First Adv PP received on " + firstAdvPpDate.format('YYYY-MM-DD')
    });

    // first reg pp receipt
    let firstRegPpDate = firstAdvPpDate.add(Math.floor(Math.random() * (7 - 3) + 3), 'd');
    line.push({
        event: 'firstRegPp',
        time: firstRegPpDate.format('YYYY-MM-DD'),
        description: "First Reg PP received on " + firstRegPpDate.format('YYYY-MM-DD')
    });

    // first adv nopp receipt
    let firstAdvNonppDate = firstRegPpDate.add(Math.floor(Math.random() * (12 - 5) + 5), 'd');
    line.push({
        event: 'firstAdvNonpp',
        time: firstAdvNonppDate.format('YYYY-MM-DD'),
        description: "First Adv nonPP received on " + firstAdvNonppDate.format('YYYY-MM-DD')
    });

    // first adv nopp receipt
    let firstRegNonppDate = firstAdvNonppDate.add(Math.floor(Math.random() * (5 - 0) + 0), 'd');
    line.push({
        event: 'firstRegPp',
        time: firstRegNonppDate.format('YYYY-MM-DD'),
        description: "First Reg nonPP received on " + firstRegNonppDate.format('YYYY-MM-DD')
    });
    return line;

    // TODO: add chart realted to four lines here
}

/**
 * Generate the chart data for timeline
 * @param  {Moment} start  Start date moment objecdt
 * @param  {Number} days   How many days will last
 * @param  {Number} number Total Number
 * @return {Array}        Chart data
 */
function generateChartData(start, days, number) {
    const dailyBase = Math.floor(number / days);
    const diff = dailyBase / 4;
    let currentDate = start;
    let line = [];
    let numberLeft = number;

    while(numberLeft > 0) {
        let dailyReal = dailyBase + Math.floor(Math.random() * (2 * diff) - diff);
        if (numberLeft > dailyReal) {
            line.unshift({
                date: currentDate.format("YYYY-MM-DD"),
                count: dailyReal
            });
        } else {
            line.unshift({
                date: currentDate.format("YYYY-MM-DD"),
                count: numberLeft
            });
        }
        currentDate = currentDate.subtract(1, 'd');
        numberLeft = numberLeft - dailyReal;
    }
    return line;
}
// 
// 
let data = seperateTotalNumber(250000);
let info = {type: 'adv', pp: true};
let result = lottery(info, data);
let line = timeline(START_DATE, data);
let chart = generateChartData(START_DATE, 20, 100000);

console.log(data);
// console.log(result);
// console.log(line);
console.log(chart);