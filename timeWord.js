const HOURS = {
  0: "twelve",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
};

const MINUTES = {
  0: "o'clock",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "eighteen",
};

function timeWord(str) {
  let arr = str.split(":");
  if (str === "00:00") return "midnight";
  if (str === "12:00") return "noon";

  let { hour, type } = transformHr(arr[0]);
  let { minutes, connector } = transformMn(arr[1]);
  let minString;
  let hourString = HOURS[hour];
  try {
    if (connector === "oh") {
      minString = connector + " " + MINUTES[minutes];
    } else if (connector && connector !== "oh") {
      minString = minutes + " " + MINUTES[connector];
    } else {
      minString = MINUTES[minutes];
    }
    if (minutes === 0) {
      minString = MINUTES[minutes];
    }
    return `${hourString} ${minString} ${type}`;
  } catch (err) {
    return err;
  }
}

function transformHr(hr) {
  if (+hr > 23) {
    throw new Error("Invalid hour input");
  }

  let valuesToSave = {};

  if (hr[0] === "0") {
    //will be am
    valuesToSave["hour"] = +hr[1];
    valuesToSave["type"] = "am";
  }
  if (hr === "10") {
    valuesToSave["hour"] = +hr;
    valuesToSave["type"] = "am";
  } else if (hr === "11") {
    valuesToSave["hour"] = +hr;
    valuesToSave["type"] = "am";
  } else if (hr === "12") {
    valuesToSave["hour"] = +hr;
    valuesToSave["type"] = "pm";
  } else if (+hr > 12 && +hr <= 23) {
    valuesToSave["hour"] = +hr % 12;
    valuesToSave["type"] = "pm";
  }
  return valuesToSave;
}

function transformMn(mn) {
  if (+mn > 59) {
    throw new Error("Invalid minute input");
  }

  let valuesToSave = {};
  //if mns[1] is 2,3,4,5 set first value to respective name
  // and then add second value to str(mns[2])
  // ex. 23 => mns[2] == "twenty"+ "three"
  let y = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  if (mn[0] === "0" && mn !== "00") {
    valuesToSave["minutes"] = +mn[1];
    valuesToSave["connector"] = "oh";
  }
  if (y.includes(+mn)) {
    valuesToSave["minutes"] = +mn;
  }
  if (mn[0] === "2") {
    valuesToSave["minutes"] = "twenty";
    valuesToSave["connector"] = +mn[1];
  } else if (mn[0] === "3") {
    valuesToSave["minutes"] = "thirty";
    valuesToSave["connector"] = +mn[1];
  } else if (mn[0] === "4") {
    valuesToSave["minutes"] = "fourty";
    valuesToSave["connector"] = +mn[1];
  } else if (mn[0] === "5") {
    valuesToSave["minutes"] = "fifty";
    valuesToSave["connector"] = +mn[1];
  }

  if (mn == "00") {
    valuesToSave["minutes"] = 0;
    delete valuesToSave.connector;
  }
  return valuesToSave;
}

module.exports = timeWord;
