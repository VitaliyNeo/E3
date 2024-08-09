<script>
function funcSum(number1) { 
  return function funcSum2(number2) {
    return console.log(number1+number2);
  }
}
funcSum(4)(8)

</script>