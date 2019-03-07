import createStatementData from './createStatementData.js';

function statement (invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}
function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`; for (let perf of data.performances) {
    result += ` ${perf.play.name}: ${giveUSDFormatTo(perf.amount)} (${perf.audience} seats)\n`;
  }
  result += `Amount owed is ${giveUSDFormatTo(data.totalAmount)}\n`; result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;


  function giveUSDFormatTo(aNumber) {
    return new Intl.NumberFormat("en-US",
        {
          style: "currency", currency: "USD",
          minimumFractionDigits: 2
        }).format(aNumber/100);
  }

}
export default statement;
