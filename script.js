const armyData = [
  {
    country: "USA",
    size: "1.4M",
    budget: "$850B",
    navy: "490 Ships",
    airforce: "13,000 Aircraft",
    border: "CBP, Coast Guard"
  },
  {
    country: "China",
    size: "2.0M",
    budget: "$290B",
    navy: "777 Ships",
    airforce: "3,285 Aircraft",
    border: "PAP"
  },
  {
    country: "India",
    size: "1.45M",
    budget: "$75B",
    navy: "295 Ships",
    airforce: "2,200 Aircraft",
    border: "BSF, ITBP"
  },
  {
    country: "Russia",
    size: "1.1M",
    budget: "$82B",
    navy: "605 Ships",
    airforce: "4,200 Aircraft",
    border: "FSB"
  },
  {
    country: "UK",
    size: "150K",
    budget: "$55B",
    navy: "80 Ships",
    airforce: "830 Aircraft",
    border: "Border Force"
  },
  {
    country: "France",
    size: "270K",
    budget: "$56B",
    navy: "180 Ships",
    airforce: "1,055 Aircraft",
    border: "Customs & Border Police"
  },
  {
    country: "Japan",
    size: "240K",
    budget: "$54B",
    navy: "154 Ships",
    airforce: "1,500 Aircraft",
    border: "Coast Guard"
  },
  {
    country: "South Korea",
    size: "580K",
    budget: "$48B",
    navy: "160 Ships",
    airforce: "1,560 Aircraft",
    border: "Border Police"
  },
  {
    country: "Germany",
    size: "185K",
    budget: "$52B",
    navy: "85 Ships",
    airforce: "850 Aircraft",
    border: "Federal Police"
  },
  {
    country: "Turkey",
    size: "355K",
    budget: "$22B",
    navy: "112 Ships",
    airforce: "1,056 Aircraft",
    border: "Gendarmerie"
  }
];

const tbody = document.getElementById("army-data");
armyData.forEach(army => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${army.country}</td>
    <td>${army.size}</td>
    <td>${army.budget}</td>
    <td>${army.navy}</td>
    <td>${army.airforce}</td>
    <td>${army.border}</td>
  `;
  tbody.appendChild(row);
});
