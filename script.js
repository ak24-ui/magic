function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
  }
  const coffeeData = {
    espresso: {
      title: "Espresso",
      img: "images/6.png",
      description: "A strong and rich coffee brewed by forcing hot water through finely-ground coffee beans.",
      health: "Espresso contains antioxidants and can improve long-term memory.",
      price: "7500 Tsh"
    },
    cappuccino: {
      title: "Cappuccino",
      img: "images/4.png",
      description: "A balanced mix of espresso, steamed milk, and milk foam.",
      health: "Cappuccino can reduce oxidative stress and improve alertness.",
      price: "8000 Tsh"
    }
    //  more entries as needed
  };

  function openModal(coffeeKey) {
    const data = coffeeData[coffeeKey];
    if (data) {
      document.getElementById('modal-title').innerText = data.title;
      document.getElementById('modal-img').src = data.img;
      document.getElementById('modal-description').innerText = data.description;
      document.getElementById('modal-health').innerText = `Health fact: ${data.health}`;
      document.getElementById('modal-price').innerText = data.price;
      document.getElementById('coffee-modal').style.display = 'flex';
    }
  }

  function closeModal() {
    document.getElementById('coffee-modal').style.display = 'none';
  }  