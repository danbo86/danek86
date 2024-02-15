const inputDates = [
  "02/02/2024 16:37",
  "02/03/2024 14:20",
  "02/04/2024 18:45"
];

const formattedDates = inputDates.map(inputDate => {
  const [datePart, timePart] = inputDate.split(" ");
  const [month, day, year] = datePart.split("/");
  const [hours, minutes] = timePart.split(":");

  // Tablica z nazwami miesięcy
  const months = [
    "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
    "lipca", "sierpnia", "września", "października", "listopada", "grudnia"
  ];

  // Przekształcenie daty na oczekiwany format
  return `${day} ${months[parseInt(month, 10) - 1]} ${year} ${hours}:${minutes}`;
});

console.log(formattedDates);