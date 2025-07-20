const navId = document.getElementById("nav_menu");
const ToggleBtnId = document.getElementById("toggle_btn");
const CloseBtnId= document.getElementById("close_btn");


// Sembunyikan nav_menu di mobile saat halaman load
function hideNavMenuOnMobile() {
    if (window.innerWidth <= 767) { 
        navId.classList.remove("active");
        navId.style.display = "none";
    } else {
        navId.style.display = "block";
    }
}

// Jalankan saat halaman load
window.addEventListener("DOMContentLoaded", hideNavMenuOnMobile);

// Jalankan juga saat resize (biar responsif)
window.addEventListener("resize", hideNavMenuOnMobile);


ToggleBtnId.addEventListener("click", () => {
    navId.classList.add("active");
    navId.style.display = "block"; // pastikan menu muncul
});

CloseBtnId.addEventListener("click", () => {
    navId.classList.remove("active");
    navId.style.display = "none"; // pastikan menu hilang
}); 

// Inisialisasi AOS (Animate On Scroll)
AOS.init();

// logo
gsap.from(".logo", {
    duration: 0.5,
    opacity: 0,
    y: -10,
    delay: 1,
});

// nav menu
gsap.from(".nav_menu_list .nav_menu_item", {
    duration: 0.5,
    opacity: 0,
    y: -10,
    delay: 1,
    stagger: 0.3,
});

// toggle btn
gsap.from(".toggle_btn", {
    duration: 0.5,
    opacity: 0,
    y: -10,
    delay: 1,
});

// main heading
gsap.from(".main-heading", {
    duration: 0.5,
    opacity: 0,
    y: -10,
    delay: 2,
});

// btn
gsap.from(".btn_wrapper", {
    duration: 0.5,
    opacity: 0,
    y: -10,
    delay: 1.8,
});

// fasilitas
gsap.from(".fasilitas", {
    duration: 0.5,
    opacity: 0,
    y: -10,
    delay: 3,
});

// tentang kami
gsap.from(".tentang", {
    duration: 0.5,
    opacity: 0,
    y: -10,
    delay: 3,
});

// kontak
gsap.from(".kontak", {
    duration: 0.5,
    opacity: 0,
    y: -10,
    delay: 3,
});

// title tipe rumah
gsap.from(".title_tipe_rumah", {
    duration: 0.5,
    opacity: 0,
    y: -10,
    delay: 3,
});

//  tipe rumah
gsap.from(".tipe_rumah", {
    duration: 0.5,
    opacity: 0,
    y: -10,
    delay: 3,
});

gsap.from(".detil_tipe_rumah", {
    opacity:0,
    y:-10,
    delay:1.8, 
    duration:0.5,
});

gsap.from(".blog", {
    opacity:0,
    y:-10,
    delay:1.8,
    duration:0.5,

});


gsap.from(".detil_blog", {
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,

});


window.addEventListener("scroll", (e) => {
    const nav = document.querySelector(".header")
    if (window.pageYOffset >= 30 ) {
        nav.classList.add("shadow-header");
    } else {
        nav.classList.remove("show-header");
    }
})

// LOAD ALL TIPE RUMAH
const jsonData ={
    "rumah": [
        { 
            "tipe":"A",
            "gambar_rumah":"../img/house-1.jpg",
            "nama":"Casa Verde",
            "luas_bangunan": 120,
            "luas_tanah": 200,
            "kamar_mandi": 2,
            "kamar_tidur": 3,
            "deskripsi":"Casa Verde, rumah dengan desain modern dan luas tanah yang cukup untuk kehidupan keluarga. Dengan dua kamar mandi dan tiga kamar tidur, rumah ini menawarkan kenyamanan dan ruang yang ideal untuk keluarga Anda. Luas bangunan 120 m² dan luas tanah 200 m² memberikan ruang yang cukup untuk berbagai aktivitas keluarga.",
            "harga":"700Jt-an",
            "carpot":1,
            "denah_rumah":"../img/denah_rumah.jpg"
        },
        { 
            "tipe":"B",
            "gambar_rumah":"../img/house-2.png",
            "nama":"Sky Villa",
            "luas_bangunan": 180,
            "luas_tanah": 250,
            "kamar_mandi": 3,
            "kamar_tidur": 4,
            "deskripsi": "Sky Villa, rumah dengan pemandangan yang menakjubkan dan desain yang elegan. Dengan tiga kamar mandi dan empat kamar tidur, rumah ini menawarkan kenyamanan dan ruang yang ideal untuk keluarga besar. Luas bangunan 180 m² dan luas tanah 250 m² memberikan ruang yang cukup untuk berbagai aktivitas keluarga.",
            "harga":"800Jt-an",
            "carpot":1,
            "denah_rumah":"../img/denah_rumah.jpg"
        },
        { 
            "tipe":"C",
            "gambar_rumah":"../img/house-3.png",
            "nama":"Lakaviwe Mansion",
            "luas_bangunan": 220,
            "luas_tanah": 300,
            "kamar_mandi": 4,
            "kamar_tidur": 5,
            "deskripsi": "Lakaviwe Mansion, rumah megah dengan desain mewah dan luas tanah yang sangat besar. Dengan empat kamar mandi dan lima kamar tidur, rumah ini menawarkan kenyamanan dan ruang yang ideal untuk keluarga besar. Luas bangunan 220 m² dan luas tanah 300 m² memberikan ruang yang cukup untuk berbagai aktivitas keluarga. Rumah ini juga dilengkapi dengan fasilitas modern dan taman yang luas untuk bersantai.",
            "harga":"850Jt-an",
            "carpot":1,
            "denah_rumah":"../img/denah_rumah.jpg"
        },
        { 
            "tipe":"D",
            "gambar_rumah":"../img/house-4.png",
            "nama":"Garden Retreat",
            "luas_bangunan": 150,
            "luas_tanah": 180,
            "kamar_mandi": 2,
            "kamar_tidur": 3,
            "deskripsi": "Garden Retreat, rumah elegan dengan taman yang luas dan desain yang nyaman. Dengan dua kamar mandi dan tiga kamar tidur, rumah ini menawarkan kenyamanan dan ruang yang ideal untuk keluarga kecil. Luas bangunan 150 m² dan luas tanah 180 m² memberikan ruang yang cukup untuk berbagai aktivitas keluarga. Rumah ini juga dilengkapi dengan taman yang indah untuk bersantai dan menikmati alam.",
            "harga":"950Jt-an",
            "carpot":1,
            "denah_rumah":"../img/denah_rumah.jpg"
        },
    ]
}

function createHouseCard(house, index, isMobileViwe) {
    // Menggunkan Fungsi Ganjil Genap
    const isOdd = index % 2 !== 1;

    const penjelasan = `
    <div class="col-md-6 mt-4 mb-4">
        <h2>${house.nama}</h2>
        <p>${house.deskripsi}</p>
        <div class="row">
            <div class="col-md-5 mb-3">
                <div class="card justify-content-center align-items-center p-3 tipe_rumah_item">
                    <i class="fa fa-briefcase"></i>
                    <h3>${house.luas_bangunan}</h3>
                    <p>Luas Bangunan</p>
                </div>
            </div>

            <div class="col-md-5 mb-3">
                <div class="card justify-content-center align-items-center p-3 tipe_rumah_item">
                    <i class="fa fa-briefcase"></i>
                    <h3>${house.luas_tanah}</h3>
                    <p>Luas Tanah</p>
                </div>
            </div>

             <div class="col-md-5 mb-3">
                <div class="card justify-content-center align-items-center p-3 tipe_rumah_item">
                    <i class="fa fa-shower"></i>
                    <h3>${house.kamar_mandi}</h3>
                    <p>Kamar Mandi</p>
                </div>
            </div>

             <div class="col-md-5 mb-3">
                <div class="card justify-content-center align-items-center p-3 tipe_rumah_item">
                    <i class="fa fa-bed"></i>
                    <h3>${house.kamar_tidur}</h3>
                    <p>Kamar Tidur</p>
                </div>
            </div>

        </div>
        <a href="./detail_rumah.html?tipe_rumah=${house.tipe}"class="btn_home viwe_more_btn mt-1" style="text-decoration:none">Selengkapnya</a>
    </div>
    `;

    const gambar_rumah = `
    <div class="col-md-6 mt-4 mb-4">
        <img src="${house.gambar_rumah}" alt="${house.nama}" class="img-fluid">
    </div>
    `;


    // Menggunakan kondisi untuk menentukan urutan gambar dan penjelasan
    var html = ''
    if (isOdd) {
        html = gambar_rumah + penjelasan;
    } else {
        html = penjelasan + gambar_rumah;
    }

    // Jika tampilan mobile
    if (isMobileViwe) {
        html = gambar_rumah + penjelasan;
    }
    // Mengembalikan HTML yang telah dibuat
    return html;
}

function createTipeLain(house) {
    const item = `
    <div class="col-md-6 mt-4 mb-4">
        <img src="${house.gambar_rumah}" class="w-100" style="max-height:200px; object-fit:cover; object-position:bottom">
        <br><br>
        <a href="./detail_rumah.html?tipe_rumah=${house.tipe}">
            <h3 class="text-center">Rumah ${house.nama}</h3>
        </a>
    </div>
    `
    return item;
}

// Load data into HTML wev wiwe
const rumahContainer = document.getElementById('rumahContainer');
if (rumahContainer != null) {
    jsonData.rumah.forEach((house, index) => {
        const houseCard = createHouseCard(house, index, false);
        rumahContainer.innerHTML += houseCard;
    });
}

// load data into HTML mobile viwe
const rumahContainerMobile = document.getElementById('rumahContainerMobile');
if (rumahContainerMobile != null ) {
    jsonData.rumah.forEach((house, index) => {
        const houseCard = createHouseCard(house, index, true);
        rumahContainerMobile.innerHTML += houseCard;
    });
}

// load data tipe lain 
const LihatTipeLain = document.getElementById('LihatTipeLain');
if (LihatTipeLain != null) {
    jsonData.rumah.forEach((house, index) => {
        const tipeCard = createTipeLain(house);
        LihatTipeLain.innerHTML += tipeCard;
    });
}

//LOAD DETAIL RUMAH
function filterRumahByTipe(tipe){
    const filteredRumah = jsonData.rumah.find(rumah => rumah.tipe == tipe);
    return filteredRumah || null;
}

//Mengambil query value dari url 
var queryString = window.location.search;

var searchParams = new URLSearchParams(queryString);

var tipeRumahValue = searchParams.get('tipe_rumah');

//load data to viwe html
let filteredRumah = null;
if (tipeRumahValue != null && tipeRumahValue != "")  { 
    filteredRumah = filterRumahByTipe(tipeRumahValue.toUpperCase());
}

if (filteredRumah == null) {
    console.log("Rumah not found");
} else {
    document.getElementById("gambar-rumah").innerHTML = 'Rumah ' + filteredRumah.gambar_rumah; 
    document.getElementById("nama-rumah").innerHTML = filteredRumah.nama; 
    document.getElementById("deskripsi-rumah").innerHTML = filteredRumah.deskripsi; 
    document.getElementById("harga-rumah").innerHTML = filteredRumah.harga; 
    document.getElementById("luas-bangunan-rumah").innerHTML = filteredRumah.luas_bangunan; 
    document.getElementById("luas-tanah-rumah").innerHTML = filteredRumah.luas_tanah; 
    document.getElementById("kamar-mandi-rumah").innerHTML = filteredRumah.kamar_mandi; 
    document.getElementById("kamar-tidur-rumah").innerHTML = filteredRumah.kamar_tidur; 
    document.getElementById("carpot-rumah").innerHTML = filteredRumah.carpot; 
    document.getElementById("denah-rumah").innerHTML = filteredRumah.denah_rumah; 
}

//FOR BLOG LOAD DATA

const blogData = [
    {
        id:1,
        title:"Perumahan Dengan Hunian Nyaman dan Modern: Case Verde di Myskill Residence",
        date:"24 Maret 2025, 09:00 AM",
        description:"Dalam dunia porperti, terutama di industri perumahan kebutuhan akan hunian yang nyaman dan modern semakin menjadi prioritas bagi masyarakat urban.Salah satu perumahan yang menawarkan konsep tersebut adalah Myskill Residence dengan tipe hunian bernama Case Verde...",
        detail_blog:"../content/blog-1.html",
        image_blog:"../img/house-1.jpg",

    },

    {
        id:2,
        title:"Menikmati Kemewahan Hidup di Sky Villa: Rumah Hunian Modern Dengan Pemanadangan Mengangungkan",
        date:"22 Maret 2025, 08:00 AM",
        description:"Selamat datang di Sky Villa, rumah hunian modern yang menghadirkan kemewahan dan kenyamanan di tengah-tengah pemandangan yanag menakjubkan.Ini bukan sekedar tempat tinggal, tetepi sebuah pengalaman hidup bergaya dan bersantai diatas lagit biru ...",
        detail_blog:"../content/blog-2.html",
        image_blog:"../img/house-2.png",

    },
]
function generatedBlogHTML(blogPost) {
    return `
      <div class="card mb-4">
         <div class="row">
           <div class="col-md-4">
              <img src="${blogPost.image_blog}" width="100%" height="100%" />
           </div>
           <div class="col-md-8 p-4">
              <h5>${blogPost.title}</h5>
              <div class="blog-date- d-flex mt-1">
                <i class="fa fa-calendar md-2 mt-1"></i>
                <p>${blogPost.date}</p>
              </div>
              <p class="description-blog mt-1 ">${blogPost.description}</p>
              <a href="../page/detail_blog.html?id=${blogPost.id}" class="btn btn-sa btn-primary btn-readmore">
                <i class="fa fa-book me-1"></i>
                read more
              </a>
           </div>
         </div>
      </div>
    `;
}

function generatedLatestBlogHTML(blogPost) {
    return `
        <a href="../page/detail_blog.html?id=${blogPost.id}" class="latest-blog-items">
            <p>${blogPost.title}</p>
            <div class="blog-date d-flex mt-1">
            <i class="fa fa-calendar md-2 mt-1"></i>
            <p>${blogPost.date}</p>
            <hr>
            </div>
        </a>
    `;
}

function renderBlogPosts(filteredBlogData = [], isFiltered = false) {
    const blogContainer = document.getElementById('blogContainer');
    const latesBlogContent = document.getElementById('latest-blog-content');

    // render latest blog
    if (latesBlogContent != null) {
        latesBlogContent.innerHTML = '';
        const lastTwoBlogPosts = blogData.slice(-2);
        lastTwoBlogPosts.forEach(blogPost => {
            latesBlogContent.innerHTML += generatedLatestBlogHTML(blogPost);
        });
    }

    if (blogContainer == null) {
        return; // skipped
    }

    blogContainer.innerHTML = '';

    if (isFiltered) {
        if (filteredBlogData.length == 0) {
            const emptyStateDiv = document.createElement('div');
            emptyStateDiv.textContent = "No blog post available";
            blogContainer.appendChild(emptyStateDiv);
        } else {
            filteredBlogData.forEach(blogPost => {
                blogContainer.innerHTML += generatedBlogHTML(blogPost);
            });
        }
    } else {
        blogData.forEach(blogPost => {
            blogContainer.innerHTML += generatedBlogHTML(blogPost);
        });
    }
}

function searchBlog(input) {
    const searchTerm = input.value.toLowerCase();
    const filteredBlogData = blogData.filter(blogPost =>
        blogPost.title.toLowerCase().includes(searchTerm)
    );

    if (input.value != null && input.value.trim() !== "") {
        renderBlogPosts(filteredBlogData, true);
    } else {
        renderBlogPosts([], false);
    }
}

// render blog post after page load
window.onload = function() {
    renderBlogPosts([], false);
}

//get value params query id

var idBlogValue = searchParams.get('id');

if (idBlogValue != null && idBlogValue !=""){
    const filteredBlogData = getBlogId(parseInt(idBlogValue,10));
    if (filteredBlogData != null && filteredBlogData != undefined) {
        document.getElementById("cardDetailImg").src = filteredBlogData.image_blog;
        document.getElementById("tgl-blog").innerHTML = filteredBlogData.date;
        document.getElementById("title-blog").innerHTML = filteredBlogData.title;
        loadDetailBlog(filteredBlogData.detail_blog)

    } else {
        console.log ("eror on data id parameter: " + idBlogValue)
    }
}
function getBlogId (blogId) {
    return blogData.filter(blog => blog.id === blogId) [0];
}

//Fungsi untuk load detail blog data

function loadDetailBlog(detailBlogURL) {
    const cardDetailBlog = document.getElementById("cardDetailBlog");
    if (cardDetailBlog == null && cardDetailBlog == undefined) {
        console.log("no element has id cardDetailBlog");
        return
    }

    document.getElementById("cardDetailBlog").sr = detailBlogURL;
}

