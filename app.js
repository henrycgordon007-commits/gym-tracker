function showTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.add('hidden'));
  document.getElementById(tab).classList.remove('hidden');
}

const benchInput = document.getElementById("bench");
const benchBar = document.getElementById("benchBar");

benchInput.value = localStorage.getItem("bench") || 0;
benchBar.value = benchInput.value;

benchInput.addEventListener("input", () => {
  benchBar.value = benchInput.value;
  localStorage.setItem("bench", benchInput.value);
});
