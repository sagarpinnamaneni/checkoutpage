import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css';

const upcomingShows = [
  {
    name: 'Spiderman',
    date: 'June 1, 2023',
    price: 50,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSIDYqmL8NCDWkv5erIObwCu4jMDGwOs3GL0exnOj5OFXwR7IFK1fw0MyV_DHhk2gwkXg&usqp=CAU"
  },
  {
    name: 'TopGun',
    date: 'July 15, 2023',
    price: 75,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DoJzj-JOMxrNlR--X0Rwm22UdsweaV6fuQ&usqp=CAU"
  },
  {
    name: 'Lone Survivor',
    date: 'August 20, 2023',
    price: 60,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWnY54OuV9GeLCboLMO8I8nu8IVOGthMthHODIg0y5U7CJNqZnmlWB5YZO31T7ajcHuM&usqp=CAU"
  },
];

const CheckoutPage = () => {
  const [selectedShow, setSelectedShow] = useState([upcomingShows[0].poster, upcomingShows[0].name, upcomingShows[0].price]);
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  const handleShowSelection = (event) => {
    const newShow = [...selectedShow];
    newShow[0] = event.target.src
    newShow[1] = event.target.alt
    newShow[2] = event.target.id
    setSelectedShow(newShow)
  };

  const handleInputChange = (event) => {
    setNumberOfTickets(event.target.value);
  };

  

  const subtotal = selectedShow[2] * numberOfTickets;
  const discount = 0.2 * subtotal
  const total = subtotal - discount;

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: send billing info to server to process payment
    alert('Payment processed successfully!');
  };

  
    // const [total, setTotal] = useState(100); // Replace 100 with the actual total value
  
    const handlePayment = () => {
      if (total > 0) {
        alert(`Thank you for booking the tickets. Your total amount is $${total} and your tickets will be delivered to your email.`);
      }
      else{
        alert(`Please choose the number of tickets and make the suitable payment. Your tickets will be delivered to your email.`);

      }
    
    };

  


  return (
    <div>
      <div>
        <nav class="navbar">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
          </svg>
          <ul class="navbar-list">
            <li class="navbar-item navbar-item-main"><a href="#">Home</a></li>
            <li class="navbar-item navbar-item-secondary"><a href="#">Movies</a></li>
            <li class="navbar-item navbar-item-secondary"><a href="#">Tickets</a></li>
            <li class="navbar-item navbar-item-secondary"><a href="#">Ratings</a></li>
            <li class="navbar-item navbar-item-secondary"><a href="#">Rewards</a></li>
            <li class="navbar-item navbar-item-secondary"><a href="#">My Account</a></li>
          </ul>
        </nav>
      </div>

      <div class="Checkouthead">
        <h1>CHECKOUT</h1>
      </div>
      <div class="main">
        <ul class="cards">
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src={upcomingShows[0].poster} alt="Spiderman" id={upcomingShows[0].price} onClick={handleShowSelection} />
                <span class="card_price" name="showPrice"><span>$</span>{upcomingShows[0].price}</span>
              </div>
              <div class="card_content">
                <h2 class="card_title">Spiderman</h2>
                <div class="card_text">
                  <p>"Experience the thrill of adventure with Spiderman! Watch as he battles villains and saves the city. Action-packed scenes, stunning visuals, and a gripping storyline await you in this must-see movie!"</p>
                  <hr />
                </div>
              </div>
            </div>
          </li>

          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src={upcomingShows[1].poster} alt="TOPGUN" id={upcomingShows[1].price} onClick={handleShowSelection} />
                <span class="card_price"><span>$</span>{upcomingShows[1].price}</span>
              </div>
              <div class="card_content">
                <h2 class="card_title">TOPGUN</h2>
                <div class="card_text">
                  <p>Top Gun: Maverick is a highly anticipated sequel to the 1986 classic. With breathtaking aerial stunts and intense action, this film promises to be an adrenaline-fueled thrill ride that fans won't want to miss. "Get ready to soar with the high-flying action of Top Gun! Experience the thrill of aerial combat and see Tom Cruise at his best in this blockbuster hit. Don't miss it!"</p>
                  <hr />
                </div>
              </div>
            </div>
          </li>

          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <span class="note">Top Grossing</span>
                <img src={upcomingShows[2].poster} alt="Lone survior" id={upcomingShows[2].price} onClick={handleShowSelection} />
                <span class="card_price"><span>$</span>{upcomingShows[2].price}</span>
              </div>
              <div class="card_content">
                <h2 class="card_title">Lone survior</h2>
                <div class="card_text">
                  <p>"Experience the true story of brotherhood and survival. "Lone Survivor" is a heart-pounding film that will have you on the edge of your seat until the very end."  Follow the journey of a Navy SEAL team sent on a mission in Afghanistan, facing unexpected challenges and danger at every turn. A powerful story of courage, loyalty, and sacrifice.</p>
                  <hr />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* <div class="deliverymode">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="delivery" id="emailDelivery" value="email" />
          <label class="form-check-label" for="emailDelivery">
            Email Delivery
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="delivery" id="mobileDelivery" value="mobile" />
          <label class="form-check-label" for="mobileDelivery">
            Mobile Delivery
          </label>
        </div>

        <div id="emailDeliveryDetails" >
          <label for="emailInput">Enter Email Address:</label>
          <input type="text" id="emailInput" />
        </div>
      </div> */}

      <div class="flex-container">
        <div class="summarydiv">
          <div class="container d-lg-flex">
            <div class="box-1 bg-light user">
              <div class="box-inner-1 pb-3 mb-3 ">
                <div class="d-flex justify-content-between mb-3 userdetails">
                  <p class="greetingsshow">Enjoy your Show!</p>
                  <p class="fw-lighter"><span class="fas fa-dollar-sign"></span></p>
                </div>
                <div id="my" class="carousel slide carousel-fade img-details" data-bs-ride="carousel"
                  data-bs-interval="2000">
                  <div>
                    <img src={selectedShow[0]}></img>
                    <hr />
                    <span class="selectedshow">{selectedShow[1]}</span>
                    <hr />
                    <div class="movies-box">
                      <div class="tickets">
                        <span class="tickets-label">Number of Tickets</span>
                        {/* <input type="text" value={numberOfTickets} onChange={handleInputChange} /> */}
                        <label for="exampleFormControlSelect1"></label>
                        <select class="form-control" value={numberOfTickets} onChange={handleInputChange} id="exampleFormControlSelect1">
                         <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="radiobtn">
                <span class="tickets-label">Select your Show Time</span>
                  <input type="radio" name="box" id="one" />
                  <input type="radio" name="box" id="two" />
                  <input type="radio" name="box" id="three" />
                  <label for="one" class="box py-2 first">
                    <div class="d-flex align-items-start">
                      <span class="circle"></span>
                      <div class="course">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                          <span class="fw-bold">
                            12:00 PM
                          </span>
                          <span class="fas fa-dollar-sign">{selectedShow[2]}</span>
                        </div>
                        <span>MORNING SHOW</span>
                      </div>
                    </div>
                  </label>
                  <label for="two" class="box py-2 second">
                    <div class="d-flex">
                      <span class="circle"></span>
                      <div class="course">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                          <span class="fw-bold">
                            6:00 PM
                          </span>
                          <span class="fas fa-dollar-sign">{selectedShow[2]}</span>
                        </div>
                        <span>FIRST SHOW</span>
                      </div>
                    </div>
                  </label>
                  <label for="three" class="box py-2 third">
                    <div class="d-flex">
                      <span class="circle"></span>
                      <div class="course">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                          <span class="fw-bold">
                            9:00 PM
                          </span>
                          <span class="fas fa-dollar-sign">{selectedShow[2]}</span>
                        </div>
                        <span>SECOND SHOW</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div class="box-2">
              <div class="box-inner-2">
                <div>
                  <p class="fw-bold">Payment Details</p>
                  <p class="dis mb-3">Complete your purchase by providing your payment details</p>
                </div>
                <form action="">
                  <div class="mb-3">
                    <p class="dis fw-bold mb-2">Email address</p>
                    <input class="form-control" type="email" placeholder="abc@email.com" />
                  </div>
                  <div>
                    <p class="dis fw-bold mb-2">Card details</p>
                    <div class="d-flex align-items-center justify-content-between card-atm border rounded">
                      <div class="fab fa-cc-visa ps-3"></div>
                      <input type="text" class="form-control" placeholder="Card Details" />
                      <div class="d-flex w-50">
                        <input type="text" class="form-control px-0" placeholder="MM/YY" />
                        <input type="password" maxlength="3" class="form-control px-0" placeholder="CVV" />
                      </div>
                    </div>
                    <div class="my-3 cardname">
                      <p class="dis fw-bold mb-2">Cardholder name</p>
                      <input class="form-control" type="text" />
                    </div>
                    <div class="address">
                      <p class="dis fw-bold mb-3">Billing address</p>
                      <select class="form-select" aria-label="Default select example">
                        <option selected hidden>United States</option>
                        <option value="1">India</option>
                        <option value="2">Australia</option>
                        <option value="3">Canada</option>
                      </select>
                      <div class="d-flex">
                        <input class="form-control zip" type="text" placeholder="ZIP" />
                        <input class="form-control state" type="text" placeholder="State" />
                      </div>
                      <div class=" my-3">
                        <p class="dis fw-bold mb-2">PROMO CODE</p>
                        <div class="inputWithcheck">
                          <input class="form-control" type="text"  />
                          <span class="fas fa-check"></span>

                        </div>
                      </div>
                      <div class="d-flex flex-column dis">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                          <p>Subtotal</p>
                          <p><span class="fas fa-dollar-sign"></span>{subtotal} USD</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-2">
                          <p>PROMO<span>(20%)</span></p>
                          <p><span class="fas fa-dollar-sign"></span>{discount} USD</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-2">
                          <p class="fw-bold">Total</p>
                          <p class="fw-bold"><span class="fas fa-dollar-sign"></span>{total} USD</p>
                        </div>
                        <div class="btn btn-primary mt-2" onClick={handlePayment}>Make Payment</div>
                      </div>
                      
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>


        </div>
      </div>



    </div>





  );
};

export default CheckoutPage;