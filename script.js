// THIS FUNCTION CONVERTS FAHRENHEIT VALUES TO CELSIUS
const convertFahrToCelsius = (fahr) => {
    if (Number.isFinite(fahr) || typeof(fahr) === "string") {
        let result = (fahr - 32) / 1.8;
        return result.toFixed(4);
    } else if (Array.isArray(fahr)) {
      return `${JSON.stringify(fahr)} is not a valid number but an array.`
    } else {
      return `${JSON.stringify(fahr)} is not a valid number but a/an ${typeof(fahr)}.`
    }
  }

//console.log(convertFahrToCelsius(32));

  
// CheckYuGiOh FUNCTION
const checkYuGiOh = (n) => {

    const stringIsNumber = (n) => {
        return !isNaN(n)
    }

    if (typeof (n) === "number" || stringIsNumber(n) === true) {
        let arr = [];
        for (let i = 1; i <= n; i++) {
            let num = i;


            if (i % 2 === 0) { num = "yu" }
            if (i % 3 === 0) { num = "gi" }
            if (i % 5 === 0) { num = "oh" }
            if (i % 6 === 0) { num = "yu-gi" }
            if (i % 10 === 0) { num = "yu-oh" }
            if (i % 15 === 0) { num = "gi-oh" }
            if (i % 30 === 0) { num = "yu-gi-oh" }
            arr.push(num);

        }
        return arr;
        console.log(arr);

    } else {
        return `Invalid parameter: ${JSON.stringify(n)}`
    }
}
  
  
// console.log(checkYuGiOh("10"))