 function isPrime(num){
        if (!Number.isInteger(num) || num > 1000) return "данные верны";
        let k = Math.sqrt(num);
        for (let i=2; i <= k; i++)
          if (num % i === 0) return "непростое число";
        return "простое число";
      }
      console.log(isPrime(55)); 

