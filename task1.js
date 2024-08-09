<script>
function evenOdd() {

let arr = [4, 6, 7, 3, 1, 0, 9, 10, 11, "null"];
let even = 0;
let odd = 0;
let zero = 0;
let not_natural_numbers = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero ++
        } else if (arr[i]%2 === 0) {
            even ++
        } else if (arr[i]%2 > 0){
            odd ++
        } else {
            not_natural_numbers ++
	}
    }

console.log(zero, even, odd, not_natural_numbers);
}

evenOdd();
</script>