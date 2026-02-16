let stepsTotal = 0;
let caloriesTotal = 0;
let labels = [];
let stepsData = [];
let caloriesData = [];

const ctx = document.getElementById("chart").getContext("2d");

const appChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            { label: "Steps", data: stepsData },
            { label: "Calories", data: caloriesData }
        ]
    },
    options: { responsive: true }
});

function addData() {
    const steps = Number(document.getElementById("steps").value);
    const calories = Number(document.getElementById("calories").value);

    if (!steps || !calories) return;

    labels.push("Entry " + (labels.length + 1));
    stepsData.push(steps);
    caloriesData.push(calories);

    stepsTotal += steps;
    caloriesTotal += calories;

    document.getElementById("stepsTotal").innerText = stepsTotal;
    document.getElementById("caloriesTotal").innerText = caloriesTotal;

    appChart.update();

    document.getElementById("steps").value = "";
    document.getElementById("calories").value = "";
}