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


function run() {

}

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

function lottery(info, number) {
    let result = {};
    let roundOne = null;
    let roundTwo = null;

    if (info.type === 'adv') {
        roundOne = Math.random() > (number.adv_pp + number.advNonpp) / ROUND_ONE;
        if (!roundOne) {
            roundTwo = Math.random() > (number.adv_pp + number.adv_nonpp + number.reg_pp + number.reg_nonpp - ROUND_ONE) / ROUND_TWO;
        }
    } else {
        roundOne = Math.random() > (number.adv_pp + number.adv_nonpp + number.reg_pp + number.reg_nonpp - ROUND_ONE) / ROUND_TWO;
    }

    let pass = (roundOne || roundTwo) ? true : false;

    return info.assign({
        roundOne: roundOne,
        roundTwo: roundTwo,
        pass: pass
    });
} 