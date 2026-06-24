document.addEventListener("DOMContentLoaded", () => {
document.getElementById("message").textContent =
"Welcome to MBI Farming Website!";
});

function showTip() {
const tips = [
"Water crops early in the morning.",
"Use organic fertilizer when possible.",
"Rotate crops to improve soil quality.",
"Monitor pests regularly."
];

```
const randomTip = tips[Math.floor(Math.random() * tips.length)];
alert(randomTip);
```

}
