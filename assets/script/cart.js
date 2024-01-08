function selector(item) {
  return document.querySelector(`.${item}`);
}

function imagesrc(image, i) {
  selector(image).src = i.target.src;
}

function onClick(item, imgclass) {
  selector(item).addEventListener("click", (i) => {
    imagesrc(imgclass, i);
  });
}

function srcSelect(name, name2) {
  return (selector(name).src = selector(name2).src);
}

function src(name) {
  return selector(name).src;
}

selector("menu-img").addEventListener("click", () => {
  selector("nav").style.display = "flex";
});

selector("close-menu").addEventListener("click", () => {
  selector("nav").style.display = "";
});
onClick("imageone", "image-clicked");
onClick("imagetwo", "image-clicked");
onClick("imagethree", "image-clicked");
onClick("imagefour", "image-clicked");

onClick("modal-imageone", "modal-content");
onClick("modal-imagetwo", "modal-content");
onClick("modal-imagethree", "modal-content");
onClick("modal-imagefour", "modal-content");

/*modal*/

function checkstatus() {
  const displayvalue = window
    .getComputedStyle(selector("product-display"))
    .getPropertyValue("display");
  return displayvalue;
}

setInterval(checkstatus, 1000);

console.log(checkstatus());

selector("image-clicked").addEventListener("click", (i) => {
  if (!(checkstatus() === "none")) {
    imagesrc("modal-content", i);
    selector("modal").style.display = "flex";
  } else {
    console.log("wala pong modal");
  }
});

selector("close").addEventListener("click", () => {
  selector("modal").style.display = "none";
});

selector("next").addEventListener("click", () => {
  const modalContent = src("modal-content");
  if (modalContent === src("modal-imageone")) {
    srcSelect("modal-content", "modal-imagetwo");
    selector("modal-imageone").style.opacity = "1";
    selector("modal-imagetwo").style.opacity = "0.5";
  } else if (modalContent === src("modal-imagetwo")) {
    srcSelect("modal-content", "modal-imagethree");
    selector("modal-imagetwo").style.opacity = "1";
    selector("modal-imagethree").style.opacity = "0.5";
  } else if (modalContent === src("modal-imagethree")) {
    srcSelect("modal-content", "modal-imagefour");
    selector("modal-imagethree").style.opacity = "1";
    selector("modal-imagefour").style.opacity = "0.5";
  } else if (modalContent === src("modal-imagefour")) {
    srcSelect("modal-content", "modal-imageone");
    selector("modal-imagefour").style.opacity = "1";
    selector("modal-imageone").style.opacity = "0.5";
  }
});

selector("prev").addEventListener("click", () => {
  const modalContent = src("modal-content");
  if (modalContent === src("modal-imageone")) {
    srcSelect("modal-content", "modal-imagefour");
    selector("modal-imageone").style.opacity = "1";
    selector("modal-imagefour").style.opacity = "0.5";
  } else if (modalContent === src("modal-imagetwo")) {
    srcSelect("modal-content", "modal-imageone");
    selector("modal-imagetwo").style.opacity = "1";
    selector("modal-imageone").style.opacity = "0.5";
  } else if (modalContent === src("modal-imagethree")) {
    srcSelect("modal-content", "modal-imagetwo");
    selector("modal-imagethree").style.opacity = "1";
    selector("modal-imagetwo").style.opacity = "0.5";
  } else if (modalContent === src("modal-imagefour")) {
    srcSelect("modal-content", "modal-imagethree");
    selector("modal-imagefour").style.opacity = "1";
    selector("modal-imagethree").style.opacity = "0.5";
  }
});
let quantity = 0;
selector("increase").addEventListener("click", () => {
  quantity++;

  selector("output").innerHTML = `${quantity}`;
  const output = Number(selector("disprice").innerHTML);

  if (selector("prdctTitle").innerHTML === "Your Cart is Empty") {
    selector("productPrice").style.display = "none";
  } else if (!(selector("prdctTitle").innerHTML === "Your Cart is Empty")) {
    selector("productPrice").innerHTML = `<p class="idvPrice">$${Number(
      selector("disprice").innerHTML
    )} x ${quantity}</p>
    <p class="total">$${output * quantity}</p>`;
    if (!(selector("cartdrop").innerHTML === "")) {
      console.log("im here");
      selector("counts").innerHTML = `${Number(selector("output").innerHTML)}`;
    }
  }
});
selector("decrease").addEventListener("click", () => {
  quantity > 0 && quantity--;

  console.log(quantity);
  selector("output").innerHTML = `${quantity}`;

  if (selector("prdctTitle").innerHTML === "Your Cart is Empty") {
    selector("productPrice").style.display = "none";
    selector("rem").style.display = "none";
  } else if (quantity === 0) {
    selector("prdctTitle").innerHTML = `Your Cart is Empty`;
    selector("productPrice").style.display = "none";
    selector("imgproduct").style.display = "none";
    selector("counts").style.display = "none";
    selector("rem").style.display = "none";
  } else if (!(selector("prdctTitle").innerHTML === "Your Cart is Empty")) {
    selector("productPrice").innerHTML = `<p class="idvPrice">$${Number(
      selector("disprice").innerHTML
    )} x ${quantity}</p>
    <p class="total">$${Number(selector("disprice").innerHTML) * quantity}</p>`;
    if (!(selector("cartdrop").innerHTML === "")) {
      console.log("im here");
      selector("counts").innerHTML = `${Number(selector("output").innerHTML)}`;
    }
  }
});
selector("checkout").addEventListener("click", () => {
  return console.log("im tanos");
});
dropcheckout();

selector("addbtn").addEventListener("click", () => {
  if (Number(selector("output").innerHTML) === 0) {
    selector("counts").style.display = "none";
    selector("productPrice").style.display = "none";
  } else {
    selector("counts").style.display = "block";
    selector("counts").innerHTML = `${Number(selector("output").innerHTML)}`;

    selector("cartInfo").innerHTML = `<div class="product">
  <img class='imgproduct' src="./images/image-product-1-thumbnail.jpg" alt="" />
  <div class="productInfo">
    <p class="prdctTitle">Fall Limited Edition Sneakers</p>
    <div class="productPrice">
      <p class="idvPrice">$${Number(
        selector("disprice").innerHTML
      )} x ${quantity}</p>
      <p class="total">$${Number(selector("disprice").innerHTML) * quantity}</p>
    </div>
  </div>
  <div class="rem">
    <img class="delme" onclick="rem()"  src="./images/icon-delete.svg" alt="" />
  </div>
</div>
<div class="checkout"><button>Checkout</button></div>`;
  }
});

function dropcheckout() {
  selector("cartimg").addEventListener("click", () => {
    console.log("click");

    const cartdrop = selector("cartdrop");
    if (cartdrop.style.display === "none") {
      cartdrop.style.display = "block";
    } else {
      cartdrop.style.display = "none";
    }
  });
}

const imgNext = selector("img-next");

imgNext.addEventListener("click", () => {
  const imgClicked = src("image-clicked");
  if (imgClicked === src("imageone")) {
    srcSelect("image-clicked", "imagetwo");
  } else if (imgClicked === src("imagetwo")) {
    srcSelect("image-clicked", "imagethree");
  } else if (imgClicked === src("imagethree")) {
    srcSelect("image-clicked", "imagefour");
  } else if (imgClicked === src("imagefour")) {
    srcSelect("image-clicked", "imageone");
  }
});

const imgPrev = selector("img-prev");

imgPrev.addEventListener("click", () => {
  const imgClicked = src("image-clicked");
  if (imgClicked === src("imageone")) {
    srcSelect("image-clicked", "imagefour");
  } else if (imgClicked === src("imagetwo")) {
    srcSelect("image-clicked", "imageone");
  } else if (imgClicked === src("imagethree")) {
    srcSelect("image-clicked", "imagetwo");
  } else if (imgClicked === src("imagefour")) {
    srcSelect("image-clicked", "imagethree");
  }
});

function rem() {
  selector("product").innerHTML = `<div class="productInfo">
  <p class="prdctTitle">Your Cart is Empty</p>
  <div class="productPrice" style="display: none">
    <p class="idvPrice"></p>
    <p class="total"></p>
  </div>
</div>
<div class="rem"></div>`;

  selector("counts").style.display = "none";
}
