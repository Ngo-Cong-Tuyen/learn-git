const getBtn = document.getElementById("btn-get");
const postBtn = document.getElementById("btn-post");
const heightInput = document.querySelector("#bmi-height input");
const weightInput = document.querySelector("#bmi-weight input");
const resultInPut = document.querySelector(".result input");
console.log(heightInput)
// Get
getBtn.addEventListener("click", async function () {
  try {
    if (checkValidate()) caculateBmi();
  } catch (error) {
    console.log(error);
  }
});

// Post
postBtn.addEventListener("click", async function () {
  try {
    if (checkValidate()) caculateBmi();
  } catch (error) {
    console.log(error);
  }
});

async function caculateBmi() {
  let height = heightInput.value;
  let weight = weightInput.value;
  let res = await axios.get(
    `http://localhost:8080/bmi?height=${height}&weight=${weight}`
  );
  resultInPut.value = res.data;
}
function checkValidate() {
  let height = heightInput.value / 1;
  let weight = weightInput.value / 1;

  let isCheck = true;
  if (height == "") {
    setError(heightInput, "Không được để trống");
    isCheck = false;
  } else if (isNaN(height)) {
    setError(heightInput, "Dữ liệu phải là số");
    isCheck = false;
  } else setSuccess(heightInput);
  if (weight == "") {
    setError(weightInput, "Không được để trống");
    isCheck = false;
  } else if (isNaN(weight)) {
    setError(weightInput, "Dữ liệu phải là số");
    isCheck = false;
  } else setSuccess(weightInput);
  return isCheck;
}

function setError(ele, message) {
  let parentEl = ele.parentNode;
  parentEl.querySelector("small").style.color= "red";
  parentEl.querySelector("small").innerText = message;
}

function setSuccess(ele) {
  let parentEl = ele.parentNode;
  parentEl.querySelector("small").style.color= "green";
  parentEl.querySelector("small").innerText = "Dữ liệu hợp lệ";
}
