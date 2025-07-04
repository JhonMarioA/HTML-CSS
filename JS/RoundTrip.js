const departTripTicket = {

  name: "Jhon",
  from: "Colombia, Pereira",
  to: "Italy, Roma",
  bussinessClass: false,
  upgrade(){
    if(departTripTicket.bussinessClass === false){
      departTripTicket.bussinessClass = true;
      console.log("Ticket upgraded to business class!\n");
    }else{
      console.log("Your ticket is already business class!") 
    }
 },
  leaveTime: 24,
  arriveTime: 4,
  flightTime() {
    let flightTime = this.arriveTime - this.leaveTime;
    if (flightTime < 0) {
      flightTime += 24;
    }
    console.log("\n" + flightTime + " hours");
  }
}

const returnTripTicket = {

  name: "Jhon",
  from: "Italy, Roma",
  to: "Colombia, Pereira",
  bussinessClass: false,
  upgrade(){
    if(returnTripTicket.bussinessClass === false){
       returnTripTicket.bussinessClass = true;
      console.log("Ticket upgraded to business class!");
    }else{
      console.log("Your ticket is already business class!") 
    }
 }
}

departTripTicket.upgrade()
console.log(departTripTicket)
departTripTicket.flightTime();