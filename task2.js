<script>
function simpleNum(number) { 
    let count = 0;
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
              count++
            }
         }
          if (count == 0 && number > 1) {
            console.log(number + "- данное число простое")
          }
          else if ((number == 0 || number == 1) || (number <= 1000 && count!=0)) {
                console.log(number + "- данное число непростое")
            } else { console.log("Проверьте вводимые данные")}        
    }
    
simpleNum(988);

</script>