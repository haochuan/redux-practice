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


export default function main(info, currentYear) {
    const totalNumber = generateTotalNumber(currentYear);
    const seperatedNumber = seperateTotalNumber(totalNumber);
    const eventLine = timeline(currentYear, seperatedNumber);
    const adv_pp_data = generateData(moment(eventLine[1].time), 
                                     Math.floor(Math.random() * (21 - 14) + 14),
                                     seperatedNumber['adv_pp']);
    const reg_pp_data = generateData(moment(eventLine[2].time), 
                                     Math.floor(Math.random() * (21 - 14) + 14),
                                     seperatedNumber['adv_nonpp']);
    const adv_nonpp_data = generateData(moment(eventLine[3].time), 
                                     Math.floor(Math.random() * (35 - 14) + 14),
                                     seperatedNumber['reg_pp']);
    const reg_nonpp_data = generateData(moment(eventLine[4].time), 
                                     Math.floor(Math.random() * (35 - 14) + 14),
                                     seperatedNumber['reg_nonpp']);

    let application = lottery(info, seperatedNumber);
    // decide what data to use to generate the result date
    let whichData;
    if (application.type === 'adv') {
        if (application.pp) {
            whichData = adv_pp_data;
        } else {
            whichData = adv_nonpp_data;
        }
    } else {
        if (application.pp) {
            whichData = reg_pp_data;
        } else {
            whichData = reg_nonpp_data;
        }
    }
    let application_result = generateGotDate(application, whichData);
    return {
        totalNumber,
        seperatedNumber,
        eventLine,
        adv_pp_data,
        reg_pp_data,
        adv_nonpp_data,
        reg_nonpp_data,
        application,
        application_result
    };
}

/**
 * Generate the total application number for the current year
 * @param  {Moment} time Moment obj for current time
 * @return {Int} total number 
 */
function generateTotalNumber(time) {
    const random = Math.random() * (TOTAL_MAX - TOTAL_MIN) + TOTAL_MIN;
    const yearDiff = time.diff(START_DATE, 'years');
    return Math.floor(random + ANNUAL_INCRESEMENT * yearDiff);
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
function generateData(start, days, number) {
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

/**
 * Generate the pass date if there is any
 * @param  {Obj} info      application info
 * @param  {Array} chartData Array of generated chart data
 * @return {Obj}           application info with pass date if there is any
 */
function generateGotDate(info, chartData) {
    let userInfo = info;
    if (userInfo.pass) {
        let length = chartData.length;
        let randomIndex = Math.floor(Math.random() * (length - 1) + 1);
        userInfo.passDate = chartData[randomIndex - 1].date;
        return userInfo;
    } else {
        return userInfo;
    }
}