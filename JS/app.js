let button = document.getElementById('submit')
button.addEventListener('click', getResult)

function getResult() {
    let userName = document.getElementById('name').value;
    let ban = document.getElementById('bangla').value;
    let eng = document.getElementById('english').value;
    let math = document.getElementById('math').value;
    let phy = document.getElementById('physics').value;
    let chem = document.getElementById('chemistry').value;
    let bio = document.getElementById('biology').value;
    let ict = document.getElementById('ict').value;
    let result = ban + eng + math + physics + chem + bio + ict;
    let state = document.getElementById('status');
    let total_result = document.getElementById('view_result');
    if (result > 315) {
        state.innerHTML = "Passed!"
    } else {
        state.innerHTML = "Failed!!"
    }
    total_result.innerHTML = userName + ", your total marks is: " + result.value;
}

getResult()