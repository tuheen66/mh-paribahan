const seats = document.getElementsByClassName("seats");

let sum = 0;
let totalPrice = 0;
const remainingSeats = document.getElementById("remaining-seats");
let seatLeft = parseInt(remainingSeats.innerText);

const seatsBooked = document.getElementById("seats-booked");
let numberOfSeatsBooked = parseInt(seatsBooked.innerText);

let count = 0;
for (const seat of seats) {
  seat.addEventListener("click", function (e) {
    if (count < 4) {
      count++;
      seat.style.backgroundColor = "#1DD100";
      seat.style.color = "white";
      e.target.disabled = true;

      seatLeft = seatLeft - 1;
      remainingSeats.innerText = seatLeft;

      // number of seats booked
      numberOfSeatsBooked = numberOfSeatsBooked + 1;

      seatsBooked.innerText = numberOfSeatsBooked;

      // selecting the seats

      const seatNumber = e.target.innerText;

      const h4 = document.createElement("h4");
      h4.innerText = seatNumber;

      const h41 = document.createElement("h4");
      h41.innerText = "Economy";

      const h42 = document.createElement("h4");
      h42.innerText = "550";

      const bookedSeats = document.getElementById("selected-seats");
      bookedSeats.appendChild(h4);
      bookedSeats.appendChild(h41);
      bookedSeats.appendChild(h42);

      // total Price
      totalPrice = totalPrice + 550;

      const totalTicketPrice = document.getElementById("total-price");
      totalTicketPrice.innerText = totalPrice;
      const grandTotal = document.getElementById("grand-total");
      grandTotal.innerText = totalPrice;

      const applyCouponButton = document.getElementById("apply-coupon");
      const applyCouponInput = document.getElementById("coupon-input");

      // enable apply coupon

      if (count === 4) {
        applyCouponButton.classList.remove("btn-disabled");
        applyCouponInput.classList.remove("btn-disabled");
      }

      // enable 'next' button

      document.getElementById("phone").addEventListener("keyup", function (e) {
        const num = parseInt(e.target.value);
        const buttonNext = document.getElementById("button-next");
        console.log(num, totalPrice);

        if (typeof num === "number" && totalPrice > 0) {
          buttonNext.classList.remove("btn-disabled");
        }
      });
    } else {
      alert("You cannot buy more than 4 seats");

      function restrictBookingMoreThanFourSeats(e) {
        const extraSeats = document.querySelectorAll(
          "e.target:not(btn-disabled)"
        );
        for (const seat of seats) {
          e.target.classList.add("btn-disabled");
          e.target.disabled = true;
        }
      }
    }
  });

  // setting grand total with or without coupon

  function applyCoupon() {
    const discountAmount15 = (totalPrice * 15) / 100;
    const discountAmount20 = (totalPrice * 20) / 100;

    const couponInput = document.getElementById("coupon-input");
    const grandTotal = document.getElementById("grand-total");
    const totalDiscount = document.getElementById("total-discount");

    const discountSection = document.getElementById("discount-section");
    discountSection.classList.remove("hidden");

    // const inputCoupon = document.getElementById("input-coupon");
    // inputCoupon.classList.add("hidden");

    if (couponInput.value === "NEW15") {
      totalDiscount.innerText = discountAmount15;
      grandTotal.innerText = totalPrice - discountAmount15;
      const inputCoupon = document.getElementById("input-coupon");
      inputCoupon.classList.add("hidden");
    } else if (couponInput.value === "Couple20") {
      totalDiscount.innerText = discountAmount20;
      grandTotal.innerText = totalPrice - discountAmount20;
      const inputCoupon = document.getElementById("input-coupon");
      inputCoupon.classList.add("hidden");
    } else {
      alert("invalid coupon code, Please use correct code");
      grandTotal.innerText = totalPrice;
    }

    // apply coupon function end
  }

  // for of loop end
}
