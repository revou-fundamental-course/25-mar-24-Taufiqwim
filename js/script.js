function calculate () {
    let weightInput = document.getElementById ('weight-input');
        console.log(weightInput.value);

    if (isNaN(weightInput)) {
        console.log('Not-Number');
    } else {
        console.log('number')
    }

}