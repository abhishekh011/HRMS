function CurrentTime(){
const currentDate = new Date();
const day: number = currentDate.getDate();
const year: number = currentDate.getFullYear();
const hours: string = currentDate.getHours().toString().padStart(2, '0');
const minutes: string = currentDate.getMinutes().toString().padStart(2, '0');
const monthNames: string[] = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const monthName: string = monthNames[currentDate.getMonth()];
const formattedDate: string = `${day} ${monthName} ${year}`;
const formattedTime: string = `${hours}:${minutes}`;

console.log("Formatted Date:", formattedDate);
console.log("Formatted Time:", formattedTime);
  return {formattedDate,formattedTime};
}

export default CurrentTime;