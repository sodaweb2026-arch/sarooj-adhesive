/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        const open = nav.classList.toggle("open");

        menuBtn.setAttribute("aria-expanded", open);

    });


    document.querySelectorAll(".nav a").forEach(link => {

        link.addEventListener("click", () => {
            nav.classList.remove("open");

            menuBtn.setAttribute("aria-expanded", "false");

        });

    });

}



/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");


if (
    galleryItems.length > 0 &&
    lightbox &&
    lightboxImage &&
    lightboxClose
) {

    galleryItems.forEach(item => {

        item.addEventListener("click", () => {

            const image = item.querySelector("img");

            if (!image) return;

            lightboxImage.src = image.src;

            lightbox.classList.add("active");

        });

    });


    lightboxClose.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });


    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });
    }


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name")?.value.trim();

        const phone =
            document.getElementById("phone")?.value.trim();

        const subject =
            document.getElementById("subject")?.value.trim();

        const message =
            document.getElementById("message")?.value.trim();


        if (!name || !phone || !message) {

            alert("لطفاً نام، شماره تماس و پیام را کامل کنید.");

            return;

        }


        /* شماره واتساپ مدیریت */

        const whatsappNumber = "989183111587";


        /* متن پیام */

        const whatsappMessage =
            "سلام، از طریق سایت چسب ساروج پیام دارم.\n\n" +
            "نام: " + name + "\n" +
            "شماره تماس: " + phone + "\n" +
            "موضوع: " + (subject || "بدون موضوع") + "\n" +
            "پیام: " + message;


        /* ساخت لینک واتساپ */

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        /* پاک کردن فرم */

        contactForm.reset();


        /* پیام موفقیت */

        alert(
            "پیام شما آماده ارسال شد.\n" +
            "واتساپ را باز کنید و پیام را ارسال کنید."
        );


        /* باز کردن واتساپ */

        window.open(whatsappURL, "_blank");

    });

}

/* =========================
   product joz
========================= */
const params = new URLSearchParams(window.location.search);
const product = params.get("product");

const title = document.getElementById("product-title");
const name = document.getElementById("product-name");
const description = document.getElementById("product-description");
const use = document.getElementById("product-use");
const packaging = document.getElementById("product-packaging");
const color = document.getElementById("product-color");
const packageColor = document.getElementById("product-package-color");
const technical = document.getElementById("product-technical");
const image = document.getElementById("product-image");
const products = {

    tile: {
        name: "چسب کاشی خمیری ساروج",

        description:
            "چسب کاشی خمیری ساروج برای نصب انواع کاشی و سرامیک روی سطوح مختلف مانند دیوار، کف و سقف در محیط‌های داخلی کاربرد دارد. این محصول به دلیل سهولت استفاده، قدرت چسبندگی بالا، سرعت خشک شدن بالا و قیمت مناسب مورد توجه مصرف‌کنندگان و متخصصان قرار گرفته است.",

        use:
            "نصب انواع کاشی و سرامیک روی دیوار، کف و سقف در محیط‌های داخلی.",

        packaging:
            "دبه‌ای",

        color:
            "سفید",

        packageColor:
            "زرد",


        image:
            "assets/pro2.png"
    },
    porcelain: {
        name: "چسب پودری پرسلانی و اسلب",

        description:
            "چسب پودری پرسلانی و اسلب با پلیمر ساخته شده است و قدرت چسبندگی بسیار بالا و قابلیت استفاده در زیرساخت‌های مختلف را دارد. این محصول برای نصب کاشی در استخرها و مخازن نگهداری آب نیز مناسب است.",

        use:
            "نصب کاشی و استفاده در استخرها و مخازن نگهداری آب.",

        packaging:
            "کیسه‌ای",

        color:
            "سفید",

        packageColor:
            "قرمز و سفید",


        image:
            "assets/pro3.png"
    },


    concrete: {
        name: "چسب بتن استحکامی",

        description:
            "چسب بتن استحکامی یک مایع غلیظ شیری‌رنگ است که به عنوان افزودنی در ملات‌های پایه سیمانی و همچنین به عنوان پیونددهنده بتن استفاده می‌شود.",

        use:
            "استفاده به عنوان افزودنی در ملات‌های پایه سیمانی و پیونددهنده بتن.",
            packaging:
            "دبه‌ای",

        color:
            "سفید",

        packageColor:
            "قرمز",

        technical:
            "قرمز و سفید",

        image:
            "assets/pro4.png"
    },


    stone: {
        name: "چسب پودری سنگ‌نما",

        description:
            "چسب پودری سنگ‌نما بر پایه مواد سیمانی تشکیل شده و علاوه بر سیمان، دارای افزودنی‌های پلیمری است. از این چسب برای چسباندن سنگ‌های آنتیک، کاشی و سرامیک در ساختمان‌ها استفاده می‌شود. همچنین در مکان‌هایی که تماس مستقیم با آب یا رطوبت دارند، مانند حمام، استخر و مخازن آب، قابل استفاده است.",

        use:
            "چسباندن سنگ‌های آنتیک، کاشی و سرامیک و استفاده در محیط‌های مرطوب و در تماس با آب.",

        packaging:
            "گونی",

        color:
            "سفید",

        packageColor:
            "قرمز",


        image:
            "assets/pro8.png"
    },
    waterproof: {
        name: "واترپروف مایع و پودری",

        description:
            "واترپروف بتن در دو حالت پودری و مایع، بدون ایجاد اثر نامطلوب بر روی بتن، به آن خاصیت آب‌گریزی می‌دهد. این محصول برای پر کردن ریزفضاهای خالی و میکروسکوپی بین اجزای سازنده بتن کاربرد دارد. همچنین از ویژگی‌های آن می‌توان به مقاومت بتن در برابر نمک‌های یخ‌زده و جلوگیری از نفوذ آب به داخل بتن اشاره کرد.",

        use:
            "آب‌گریز کردن بتن، پر کردن ریزفضاهای خالی و کمک به جلوگیری از نفوذ آب به داخل بتن.",

        packaging:
            "نوع مایع: دبه‌ای / نوع پودری: __",

        color:
            "سفید",

        packageColor:
            "سفید و قرمز",


        image:
            "assets/pro9.png"
    },


    antifreeze: {
        name: "ضدیخ بتن",

        description:
            "ضدیخ بتن نوعی افزودنی بتن زودگیرکننده است که بر پایه نمک‌های کلسیم و اسیدهای معدنی تولید می‌شود. این ترکیبات با افزایش سرعت گیرش بتن، در شرایط سرد به بتن کمک می‌کنند تا در زمان مناسب به گیرش و سختی برسد.",
use:
            "استفاده در بتن در شرایط آب‌وهوایی سرد برای کمک به سرعت گیرش و سخت شدن بتن.",

        packaging:
            "دبه‌ای",

        color:
            "سفید",

        packageColor:
            "آبی",


        image:
            "assets/pro10.png"
    },

waterproofConcrete: {
        name: "چسب بتن آب‌بندی",

        description:
            "چسب بتن آب‌بندی یک مایع چسبنده است که برای ایجاد عایق رطوبتی در سطح بتن استفاده می‌شود. این محصول بتن را در برابر نفوذ آب و رطوبت محافظت می‌کند و از ترک خوردن و خشک شدن بتن جلوگیری می‌کند.",

        use:
            "ایجاد عایق رطوبتی و محافظت از بتن در برابر نفوذ آب و رطوبت.",

        packaging:
            "دبه‌ای",

        color:
            "سفید",

        packageColor:
            "سفید و سبز ",


        image:
            "assets/pro5.png"
    },


    grout: {
        name: "انواع پودر بندکشی",

        description:
            "پودر بندکشی یکی از اجزای اصلی در ساختمان‌سازی است و در انواع مختلف تولید می‌شود که بسته به کاربرد می‌توان نوع مناسب آن را انتخاب کرد. از ویژگی‌های مهم پودر بندکشی، پر کردن فضای خالی بین کاشی و سرامیک و کمک به ضدآب شدن آن است.",

        use:
            "پر کردن فضای خالی بین کاشی و سرامیک.",

        packaging:
            "گونی",

        color:
            "سفید",

        packageColor:
            "سفید",

        

        image:
            "assets/pro6.png"
    },


    hebel: {
        name: "چسب پودری بلوک هبلکس",

        description:
            "این چسب برای اتصال بلوک سیمانی، بلوک سبک، بلوک هبلکس و سایر بلوک‌های بتنی کاربرد دارد. یکی از مزایای آن اتصال بلوک‌های هبلکس با استفاده از مقدار کم چسب است. همچنین آماده‌سازی مخلوط آن نسبت به ملات سیمانی در زمان کوتاه‌تری انجام می‌شود و می‌تواند به اجرای سریع‌تر ساختمان‌سازی کمک کند.",

        use:
            "اتصال بلوک سیمانی، بلوک سبک، بلوک هبلکس و سایر بلوک‌های بتنی.",

        packaging:
            "گونی",

        color:
            "سفید",

        packageColor:
            "آبی",

        

        image:
            "assets/pro7.png"
    }

};
  




const selectedProduct = products[product] || products.tile;
if (title) title.textContent = selectedProduct.name;
if (name) name.textContent = selectedProduct.name;
if (description) description.textContent = selectedProduct.description;
if (use) use.textContent = selectedProduct.use;
if (packaging) packaging.textContent = selectedProduct.packaging;
if (color) color.textContent = selectedProduct.color;
if (packageColor) packageColor.textContent = selectedProduct.packageColor;
if (technical) technical.textContent = selectedProduct.technical;

if (image) {
    image.src = selectedProduct.image;
    image.alt = selectedProduct.name;
}

