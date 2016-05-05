const TOTAL_MAX = 300000;
const TOTAL_MIN = 230000;

function run() {

}

/**
 * Generate the total application number for the current year
 * @return {Int} total number 
 */
function generateTotalNumber() {
    return Math.random() * (TOTAL_MAX - TOTAL_MIN) + TOTAL_MIN;
}