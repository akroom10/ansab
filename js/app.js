/* =========================================================
   Dessert Menu Data + UI
   Edit the products array to change the menu.
   ========================================================= */

const categoryMeta = {
  popular: "الأكثر طلبًا",
  cheesecake: "تشيز كيك",
  cakes: "الكيك",
  cookies: "الكوكيز",
  "crepe-waffle": "كريب ووافل",
  other: "حلويات أخرى"
};

const products = [
  { id: 1, name: "تشيز كيك لوتس", price: 24, category: "popular", description: "تشيز كيك كريمي مع طبقة لوتس وصوص غني.", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "تشيز كيك فراولة", price: 24, category: "popular", description: "تشيز كيك ناعم مع فراولة طازجة ولمسة فانيلا.", image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "كيك شوكولاتة", price: 22, category: "popular", description: "طبقات شوكولاتة غنية بقوام رطب وصوص ناعم.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "براونيز لوتس", price: 20, category: "popular", description: "براونيز كثيف مع كريمة لوتس وبسكويت مقرمش.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?auto=format&fit=crop&w=800&q=80" },

  { id: 5, name: "تشيز كيك لوتس", price: 24, category: "cheesecake", description: "تشيز كيك كريمي مع طبقة لوتس وصوص غني.", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "تشيز كيك فراولة", price: 24, category: "cheesecake", description: "تشيز كيك ناعم مع فراولة طازجة ولمسة فانيلا.", image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80" },
  { id: 7, name: "تشيز كيك التوت", price: 26, category: "cheesecake", description: "كريمة تشيز كيك مخملية مع صوص التوت.", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80" },

  { id: 8, name: "كيك شوكولاتة", price: 22, category: "cakes", description: "طبقات شوكولاتة غنية بقوام رطب وصوص ناعم.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80" },
  { id: 9, name: "كيك رد فلفت", price: 24, category: "cakes", description: "رد فلفت مخملي مع كريمة جبن خفيفة.", image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80" },
  { id: 10, name: "كيك زعفران", price: 23, category: "cakes", description: "كيك هش بنكهة الزعفران مع لمسة كريمية.", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=80" },

  { id: 11, name: "كوكيز شوكولاتة", price: 12, category: "cookies", description: "كوكيز طري من الداخل مع قطع شوكولاتة غنية.", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80" },
  { id: 12, name: "كوكيز بستاشيو", price: 14, category: "cookies", description: "كوكيز زبدية مع فستق محمص ولمسة ملح خفيفة.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80" },
  { id: 13, name: "كوكيز نوتيلا", price: 14, category: "cookies", description: "كوكيز غني بحشوة نوتيلا وقلب شوكولاتة دافئ.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80" },

  { id: 14, name: "كريب نوتيلا", price: 22, category: "crepe-waffle", description: "كريب رقيق مع نوتيلا وتزيين شوكولاتة ناعم.", image: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=800&q=80" },
  { id: 15, name: "كريب لوتس", price: 24, category: "crepe-waffle", description: "كريب طازج مع كريمة لوتس وبسكويت مقرمش.", image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80" },
  { id: 16, name: "وافل شوكولاتة", price: 22, category: "crepe-waffle", description: "وافل ذهبي مقرمش مع شوكولاتة وصوص غني.", image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80" },
  { id: 17, name: "وافل فراولة", price: 24, category: "crepe-waffle", description: "وافل طازج مع فراولة وكريمة خفيفة.", image: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&w=800&q=80" },

  { id: 18, name: "بان كيك ميني", price: 20, category: "other", description: "قطع بان كيك صغيرة مع صوصات وتزيين لطيف.", image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80" },
  { id: 19, name: "ميني تارت فواكه", price: 21, category: "other", description: "تارت هش مع كريمة فانيلا وفواكه موسمية.", image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=800&q=80" },
  { id: 20, name: "كنافة نوتيلا", price: 23, category: "other", description: "كنافة ذهبية مقرمشة مع نوتيلا وصوص كريمي.", image: "https://images.unsplash.com/photo-1579888944880-d98341245702?auto=format&fit=crop&w=800&q=80" }
];

const productSections = document.getElementById("product-sections");
const categoryButtons = [...document.querySelectorAll(".category-chip")];
const toTop = document.getElementById("toTop");
const sheet = document.getElementById("productSheet");
const backdrop = document.getElementById("modalBackdrop");
const sheetImage = document.getElementById("sheetImage");
const sheetTitle = document.getElementById("sheetTitle");
const sheetDescription = document.getElementById("sheetDescription");
const sheetPrice = document.getElementById("sheetPrice");
const sheetCategory = document.getElementById("sheetCategory");
const sheetClose = document.getElementById("sheetClose");
const sheetCloseLabel = document.getElementById("sheetCloseLabel");

const formatter = new Intl.NumberFormat("ar-SA");

function productCard(product) {
  return `
    <article class="product-card" tabindex="0" role="button"
      data-product-id="${product.id}"
      aria-label="عرض تفاصيل ${product.name}">
      <img
        class="product-image"
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
        decoding="async"
      >
      <div class="product-info">
        <h4 class="product-name">${product.name}</h4>
        <p class="product-desc">${product.description}</p>
        <div class="product-price">${formatter.format(product.price)} <small>ريال</small></div>
      </div>
    </article>
  `;
}

function renderMenu() {
  productSections.innerHTML = Object.entries(categoryMeta).map(([key, label]) => {
    const items = products.filter(product => product.category === key);
    return `
      <section class="product-section" id="category-${key}" data-category-section="${key}">
        <div class="product-section-title">
          <h3>${label}</h3>
          <span class="title-line" aria-hidden="true"></span>
        </div>
        <div class="products-grid">
          ${items.length ? items.map(productCard).join("") : `
            <p class="empty-state">لا توجد منتجات في هذا القسم حاليًا.</p>
          `}
        </div>
      </section>
    `;
  }).join("");

  observeCards();
}

function observeCards() {
  const cards = document.querySelectorAll(".product-card");
  if (!("IntersectionObserver" in window)) {
    cards.forEach(card => card.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: "0px 0px -30px" });

  cards.forEach(card => observer.observe(card));
}

function openProduct(productId) {
  const product = products.find(item => item.id === Number(productId));
  if (!product) return;

  sheetImage.src = product.image;
  sheetImage.alt = product.name;
  sheetTitle.textContent = product.name;
  sheetDescription.textContent = product.description;
  sheetPrice.textContent = formatter.format(product.price);
  sheetCategory.textContent = categoryMeta[product.category] || "";

  backdrop.hidden = false;
  sheet.hidden = false;
  document.body.classList.add("modal-open");

  requestAnimationFrame(() => {
    backdrop.classList.add("show");
    sheet.classList.add("show");
  });

  sheetClose.focus();
}

function closeProduct() {
  sheet.classList.remove("show");
  backdrop.classList.remove("show");
  document.body.classList.remove("modal-open");

  setTimeout(() => {
    sheet.hidden = true;
    backdrop.hidden = true;
  }, 420);
}

function scrollToCategory(category) {
  const target = document.getElementById(`category-${category}`);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });

  categoryButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.category === category);
  });
}

categoryButtons.forEach(button => {
  button.addEventListener("click", () => scrollToCategory(button.dataset.category));
});

productSections.addEventListener("click", event => {
  const card = event.target.closest(".product-card");
  if (card) openProduct(card.dataset.productId);
});

productSections.addEventListener("keydown", event => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".product-card");
  if (!card) return;
  event.preventDefault();
  openProduct(card.dataset.productId);
});

[sheetClose, sheetCloseLabel, backdrop].forEach(element => {
  element.addEventListener("click", closeProduct);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !sheet.hidden) closeProduct();
});

window.addEventListener("scroll", () => {
  toTop.classList.toggle("visible", window.scrollY > 600);
}, { passive: true });

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderMenu();
