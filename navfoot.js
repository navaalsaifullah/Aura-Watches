let main = document.getElementById('main');
let navbar = document.getElementById("navbar");
let footer = document.getElementById ('footer');

main.innerHTML = `<div class="top">
             <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <a href="./index.html">
                <img src="./images/logo.png" alt="logo" class="logo">
              </a>
              <a href="./index.html" class="heading">
                <h1>Aura Watches</h1>
                </a>
             </div>
        </div>`

navbar.innerHTML = `<li class="nav-item">
    <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
  </li>
   <li class="nav-item">
    <a class="nav-link" href="./about.html">About</a>
  </li>
<div class="dropdown nav-item">
  <button class="btn dropdown-toggle nav-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Products
  </button>
  <ul class="dropdown-menu">
    <li><a href="./sportz.html" class="dropdown-item">Sportz</a></li>
    <li><a href="./premier.html" class="dropdown-item">Premier</a></li>
    <li><a href="./digital.html" class="dropdown-item">Digital</a></li>
    <li><a href="./smart.html" class="dropdown-item">Smart</a></li>
  </ul>
</div>
  <li class="nav-item">
    <a class="nav-link" href="./technology.html">Technology</a>
  </li>
   <li class="nav-item">
    <a class="nav-link" href="./store_locator.html">Store Locator</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="./support.html">Support</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="./contact_us.html">Contact Us</a>
  </li>`

footer.innerHTML = `<footer
          class="text-center text-lg-start footmiddle">
    <section
             class="d-flex justify-content-between p-4 foottop">
      <div class="me-5">
        <span style="font-weight: 500;">Get connected with us on social networks:</span>
      </div>
      <div>
        <a href="https://wa.me/03332125473" class="me-4" style="color: #1A3C5E;">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.facebook.com/" class="me-4" style="color: #1A3C5E">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://x.com" class="me-4" style="color: #1A3C5E">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://google.com" class="me-4" style="color: #1A3C5E">
          <i class="fab fa-google"></i>
        </a>
        <a href="https://www.instagram.com/" class="me-4" style="color: #1A3C5E">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com/" class="me-4" style="color: #1A3C5E">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/" class="me-4" style="color: #1A3C5E">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </section>
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <div class="col-2 col-sm-2 col-md-2 col-lg-12">
              <a href="./index.html">
                <img src="./images/logo.png" alt="logo" class="mb-3 mt-0 pt-0" style="  height: 100%; width: 80px; border-radius: 50%; background-color: #9cd0db;">
              </a>
              </div>
            <h6 class="text-uppercase fw-bold">Aura Watches</h6>
            <hr
                class="mb-2 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #9cd0db; height: 2px"
                />
            <p>
             Discover the timeless elegance of Aura Watches, where craftsmanship meets innovation. Each watch is meticulously designed to blend classic style with modern precision, making it the perfect accessory for any occasion. 
            </p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #9cd0db; height: 2px"
                />
             <p>
              <a href="./products.html" class="footmiddle">Products</a>
            </p>
             <p>
              <a href="./store_locator.html" class="footmiddle">Store Locator</a>
            </p>
            <p>
              <a href="./support.html" class="footmiddle">Support</a>
            </p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">Products</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #9cd0db; height: 2px"
                />
            <p>
              <a href="./sportz.html" class="footmiddle">Sportz</a>
            </p>
            <p>
              <a href="./premier.html" class="footmiddle">Premier</a>
            </p>
            <p>
              <a href="./digital.html" class="footmiddle">Digital</a>
            </p>
            <p>
              <a href="./smart.html" class="footmiddle">Smart</a>
            </p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #9cd0db; height: 2px"
                />
            <p><i class="fas fa-home mr-3 pe-3"></i><a href="./store_locator.html" class="info">Karachi</a></p>
            <p><i class="fas fa-envelope mr-3 pe-3"></i><a href="mailto:aurawatches@gmail.com" class="info">aurawatches@gmail.com</a></p>
            <p><i class="fas fa-phone mr-3 pe-3"></i><a href="tel:+92312220000" class="info">+92312220000</a></p>
          </div>
        </div>
      </div>
    </section>
    <div
         class="text-center p-3 footbottom"  style="font-weight: 500";>
      © 2025 Copyright:
      <a href="./index.html" style="color: #1A3C5E;"
         >Aura Watches</a
        >
    </div>
  </footer>`