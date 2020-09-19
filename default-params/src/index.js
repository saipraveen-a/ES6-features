/*const leadSinger = (artist) => {
  console.log(`${artist} is the lead singer of Cold Play`);
}*/

const leadSinger = (artist = "someone") => {
  console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger("Chris Martin");