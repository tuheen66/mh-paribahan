const seats = document.getElementsByClassName("seats")

let sum = 0

const remainingSeats = document.getElementById('remaining-seats')
let seatLeft = parseInt(remainingSeats.innerText)

const seatsBooked = document.getElementById("seats-booked")
let numberOfSeatsBooked = parseInt(seatsBooked.innerText)

for (const seat of seats) {
    seat.addEventListener('click', function () {


        seat.style.backgroundColor = "#1DD100";
        seat.style.color = 'white'

        //    calculating remaining seats

        seatLeft = seatLeft - 1
        remainingSeats.innerText = seatLeft

        // number of seats booked
        numberOfSeatsBooked = numberOfSeatsBooked + 1

        seatsBooked.innerText = numberOfSeatsBooked


        if (numberOfSeatsBooked > 4) {
            alert("You can't book more than 4 tickets")

        }

        
    })


}