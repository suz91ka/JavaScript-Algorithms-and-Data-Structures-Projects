function checkCashRegister(price, cash, cid) {
  let numeric_change = cash - price
  let sumOfLeftovers = 0
  let drawers = {
    "ONE HUNDRED": { value: 100.0, change: 0.0 },
    "TWENTY": { value: 20.0, change: 0.0 },
    "TEN": { value: 10.0, change: 0.0 },
    "FIVE": { value: 5.0, change: 0.0 },
    "ONE": { value: 1.0, change: 0.0 },
    "QUARTER": { value: 0.25, change: 0.0 },
    "DIME": { value: 0.1, change: 0.0 },
    "NICKEL": { value: 0.05, change: 0.0 },
    "PENNY": { value: 0.01, change: 0.0 },
  }
  console.log("----")
  for (const name in drawers) {
    let note_value = drawers[name].value

    let cid_row = cid.find(e => { 
      return e[0] == name})
    let amount = cid_row[1]

    console.log(numeric_change, note_value, amount)

    while (amount > 0 && numeric_change >= note_value) {
      amount = (amount - note_value).toFixed(2);
      drawers[name].change = drawers[name].change + note_value;
      numeric_change = (numeric_change - note_value).toFixed(2);
    }
    console.log(numeric_change, note_value, amount)
    sumOfLeftovers =+ amount;
  }

  let status = "OPEN";
  if(numeric_change > 0) {
      status = "INSUFFICIENT_FUNDS";
      change = [];
    } else {
      if(sumOfLeftovers == 0) {
        status = "CLOSED";
      }
    }

  let change = []
  let i = 0
  for (const name in drawers) {
    if (status == "CLOSED") {
      change.push(cid[i])
      i++;
    } else {
      if (status == "OPEN" && drawers[name].change > 0)
      change.push([name, Math.round(drawers[name].change * 100) /100])
    }
  }

  console.log(status, change)
  console.log("----")
  return {status: status, change: change};
}
 
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 3.75], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
