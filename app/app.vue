<template>
  <div class="main">

    <!-- Floating action button -->

    <a href="#">
      <button class="fab">
        <i class="bi bi-chevron-double-up"></i>
      </button>
    </a>

    <!-- Backdrop -->
    <div ref="backdrop" @click="toggleMenu" class="backdrop"></div>

    <!-- Mobile menu -->
    <div ref="menu" class="menu">
      <div @click="toggleMenu" class="close">
        <i class="bi bi-x"></i>
      </div>
      <nav>
        <a @click="toggleMenu" href="#">Home</a>
        <hr>
        <a @click="toggleMenu" href="#overview">Overview</a>
        <hr>
        <a @click="toggleMenu" href="#rooms">Rooms</a>
        <hr>
        <a @click="toggleMenu" href="#gallery">Gallery</a>
        <hr>
        <a @click="toggleMenu" href="#floorplan">Floorplan</a>
        <hr>
        <a @click="toggleMenu" href="#highlights">Highlights</a>
        <hr>
        <a @click="toggleMenu" href="#contact">Contact</a>
      </nav>

    </div>

    <!-- Header -->
    <header :class="{ hide: isHidden }">

      <div class="logo">
        <img src="/images/logo.png" alt="">
      </div>

      <div class="nav">
        <a href="#">Home</a>
        <a href="#overview">Overview</a>
        <a href="#rooms">Rooms</a>
        <a href="#gallery">Gallery</a>
        <a href="#floorplan">Floorplan</a>
        <a href="#contact">Contact</a>
      </div>

      <div class="hamburger">
        <i @click="toggleMenu" class="bi bi-list"></i>
      </div>

      <div class="cta">
        <button>Schedule a visit</button>
      </div>

    </header>

    <!-- Hero section -->
    <section data-aos="fade-down" class="hero">

      <div class="text">
        <div class="translucent">
          <p>Urban Lifestyle</p>
        </div>
        <h2>Elegant and Comfort in a Modern Space</h2>
      </div>

      <div class="image">
        <img src="/images/hero-image.webp" alt="">
      </div>

    </section>

    <!-- Overview section -->
    <section id="overview" class="overview">

      <div data-aos="fade-left" class="text">
        <div class="translucent">Home Overview</div>
        <h2>Luxury living where comfort meets timeless style, effortlessly</h2>
        <p>Experience the perfect blend of modern design and classic elegance in our stunning homes.</p>
        <button class="cta">Schedule a visit</button>
      </div>

      <div class="features">
        <div data-aos="fade-up" class="box">
          <img src="/images/icons/home-1.png" alt="">
          <h3>Smart Home System</h3>
          <p>Control your home environment with the latest smart technology.</p>
        </div>
        <div data-aos="fade-up" class="box">
          <img src="/images/icons/solar.png" alt="">
          <h3>Solar Energy Panels</h3>
          <p>Harness the power of the sun to reduce your energy bills.</p>
        </div>
        <div data-aos="fade-up" class="box">
          <img src="/images/icons/aircondition.png" alt="">
          <h3>Central Air Conditioning</h3>
          <p>Enjoy optimal comfort with our state-of-the-art cooling systems.</p>
        </div>
        <div data-aos="fade-up" class="box">
          <img src="/images/icons/security.png" alt="">
          <h3>Home Security System</h3>
          <p>Keep your home safe with our advanced security features.</p>
        </div>
      </div>

    </section>

    <!-- Room details -->
    <section id="rooms" class="room_details">

      <div data-aos="fade-down" class="header">
        <div class="translucent">Room Details</div>
        <h2>Discover Rooms</h2>
      </div>

      <div data-aos="fade-right" class="selection">
        <p v-for="room in rooms" :key="room.name" @click="selectRoom(room)"
          :class="{ active: activeRoom.name === room.name }">{{ room.name }}</p>
      </div>

      <hr>

      <div data-aos="fade-left" class="display">
        <div class="text">
          <h2>{{ activeRoom.name }}</h2>
          <p>{{ activeRoom.description }}</p>
        </div>
        <div class="image">
          <img :src="activeRoom.image" :alt="activeRoom.name">
          <div>{{ activeRoom.size }}</div>
        </div>
      </div>

    </section>

    <!-- Gallery -->
    <section id="gallery" class="gallery">

      <div data-aos="fade-up" class="header">
        <div class="translucent">Discover Gallery</div>
        <h2>Exterior & Interior</h2>
      </div>

      <div data-aos="fade-up" class="selection">
        <p v-for="cat in categories" :key="cat" @click="selectCategory(cat)"
          :class="{ active: activeCategory === cat }"> {{ cat }} </p>
      </div>

      <div class="images" ref="gallery">
        <div data-aos="fade-down" v-for="img in filteredImages" :key="img.src">
          <img :src="img.src" alt="">
        </div>
      </div>

    </section>

    <!-- Floorplans -->
    <section id="floorplan" class="floorplan">

      <div class="plan">
        <div class="text">
          <div data-aos="fade-right" class="translucent">Discover</div>
          <h2 data-aos="fade-right">Floorplan</h2>
          <p data-aos="fade-right">Explore the thoughtfully designed floorplan, offering spacious living areas, functional layouts, and
            seamless flow between rooms. Each space is crafted to maximize comfort, convenience, and modern aesthetics,
            ensuring your home meets every lifestyle need.</p>
          <div data-aos="fade-left" class="table">
            <div v-for="info in roomSize" :key="info" class="row">
              <span>{{ info.room }}</span>
              <span>{{ info.size }}</span>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" class="image">
          <swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :pagination="{ clickable: true }" loop
            :autoplay="{ delay: 5000 }">
            <swiper-slide>
              <img src="/images/floorplan.webp" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="/images/floorplan.webp" alt="">
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <div data-aos="fade-right" class="features">
        <div class="box">
          <img src="/images/icons/size.png" />
          <div>
            <p>Size</p>
            <p>1665 sft</p>
          </div>
        </div>
        <div class="box">
          <img src="/images/icons/bed.png" />
          <div>
            <p>Bedrooms</p>
            <p>5</p>
          </div>
        </div>
        <div class="box">
          <img src="/images/icons/bath.png" />
          <div>
            <p>Bathrooms</p>
            <p>5</p>
          </div>
        </div>
        <div class="box">
          <img src="/images/icons/car.png" />
          <div>
            <p>Parking Slots</p>
            <p>5</p>
          </div>
        </div>
      </div>

    </section>

    <!-- Highlights -->
    <section id="highlights" class="highlights">

      <div data-aos="fade-up" class="header">
        <div class="translucent">Near By Places</div>
        <h2>Highlights Nearby</h2>
      </div>

      <div class="grid">
        <div data-aos="fade-down" class="box">
          <div class="image">
            <img src="/images/school.webp" alt="">
          </div>
          <h3>School</h3>
          <p>4 miles</p>
        </div>
        <div data-aos="fade-down" class="box">
          <div class="image">
            <img src="/images/shopingmall.webp" alt="">
          </div>
          <h3>Shopping Mall</h3>
          <p>8 miles</p>
        </div>
        <div data-aos="fade-down" class="box">
          <div class="image">
            <img src="/images/university.webp" alt="">
          </div>
          <h3>University</h3>
          <p>12 miles</p>
        </div>
        <div data-aos="fade-down" class="box">
          <div class="image">
            <img src="/images/airport.webp" alt="">
          </div>
          <h3>Airport</h3>
          <p>16 miles</p>
        </div>
      </div>

    </section>

    <!-- Video Section -->
    <section data-aos="fade-up" class="video">
      <video src="/video.mp4" autoplay muted loop></video>
      <div class="tint">
        <div class="play">
          <i class="bi bi-play-fill"></i>
        </div>
      </div>
    </section>

    <!-- Conact -->
    <section id="contact" class="contact">

      <div data-aos="fade-down" class="header">
        <div class="translucent">Contact Us</div>
        <h2>Schedule a Visit</h2>
      </div>

      <div class="box">
        <div data-aos="fade-left" class="agent">
          <img src="/images/contact.webp" alt="">
          <h3>Emily Rodriguez</h3>
          <p>(555) 234-5678</p>
        </div>
        <form  data-aos="fade-right" @submit.prevent="">
          <div class="input-control">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <input type="date" required>
            <input type="time" required>
          </div>
          <textarea placeholder="Submit Request" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

    </section>

    <!-- Footer -->
    <footer>

      <div class="logo">
        <img src="/images/logo-white-text.png" alt="">
      </div>

      <div class="address">
        <p>712 Jefferson Ave, Brooklyn</p>
        <p>New York 11221</p>
      </div>

      <div class="info">
        <div class="box">
          <i class="bi bi-telephone-fill"></i>
          <div class="text">
            <h3>Call Us</h3>
            <a href="tel:+1 123 456 789"> +1 123 456 789</a>
          </div>
        </div>
        <div class="box">
          <i class="bi bi-clock-fill"></i>
          <div class="text">
            <h3>Opening Hours</h3>
            <p>Mon to Fri 08:00 - 17:00</p>
          </div>
        </div>
        <div class="box">
          <i class="bi bi-envelope-fill"></i>
          <div class="text">
            <h3>Email Us</h3>
            <a href="email-to:contact@laurelwood.com">contact@laurelwood.com</a>
          </div>
        </div>
      </div>

      <hr>

      <div class="bottom">
        <p>Copyright &copy; {{ new Date().getFullYear() }} Laurelwood by <a
            href="https://benzama-dev.vercel.app">Benzama</a> </p>
        <div class="icons">
          <div>
            <i class="bi bi-facebook"></i>
          </div>
          <div>
            <i class="bi bi-instagram"></i>
          </div>
          <div>
            <i class="bi bi-twitter-x"></i>
          </div>
          <div>
            <i class="bi bi-youtube"></i>
          </div>
          <div>
            <i class="bi bi-whatsapp"></i>
          </div>
        </div>
      </div>

    </footer>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Meta 

useHead({
  title: 'laurelwood - A modern family home',
  link: [
    { rel: 'icon', href: '/favicon.png'}
  ]

})

// Menu Toggle Function

const backdrop = ref(null);
const menu = ref(null);

const toggleMenu = () => {
  backdrop.value.classList.toggle('active');
  menu.value.classList.toggle('active');
}

// Header hide function

const isHidden = ref(false)
let lastScrollY = 0

const handleScroll = () => {
  const currentY = window.scrollY
  if (currentY > lastScrollY) {
    isHidden.value = true
  } else {
    isHidden.value = false
  }
  lastScrollY = currentY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

//Room Selection Function

const rooms = [
  {
    name: "Living Room",
    description: "A cozy, social hub with plush seating and entertainment. Ideal for relaxing, gatherings, and family time.",
    size: "22 m²",
    image: "/images/rooms/living-room.webp"
  },
  {
    name: "Dining Room",
    description: "A warm space for enjoying meals together, featuring a large dining table and soft lighting.",
    size: "15 m²",
    image: "/images/rooms/dining-room.webp"
  },
  {
    name: "Kitchen",
    description: "A modern kitchen with appliances, spacious counters, and ample storage for all your cooking needs.",
    size: "15 m²",
    image: "/images/rooms/kitchen.webp"
  },
  {
    name: "Master Bedroom",
    description: "A private retreat with a king-size bed, natural lighting, and calming decor.",
    size: "16 m²",
    image: "/images/rooms/master-bedroom.webp"
  },
  {
    name: "Bathroom",
    description: "A sleek bathroom with shower, bathtub, and elegant fixtures.",
    size: "6 m²",
    image: "/images/rooms/bathroom.webp"
  }
];

// default selected room
const activeRoom = ref(rooms[0]);

// function to set active room
const selectRoom = (room) => {
  activeRoom.value = room;
}

// gallery Filter Function

const categories = ['View All', 'Interior', 'Exterior'];

const images = [
  { src: "/images/interior/interior-1.webp", category: "Interior" },
  { src: "/images/interior/interior-2.webp", category: "Interior" },
  { src: "/images/interior/interior-3.webp", category: "Interior" },
  { src: "/images/interior/interior-5.webp", category: "Interior" },
  { src: "/images/interior/interior-4.webp", category: "Interior" },
  { src: "/images/exterior/exterior-1.webp", category: "Exterior" },
  { src: "/images/exterior/exterior-2.webp", category: "Exterior" },
  { src: "/images/exterior/exterior-3.webp", category: "Exterior" },
  { src: "/images/exterior/exterior-4.webp", category: "Exterior" },
  { src: "/images/exterior/exterior-6.webp", category: "Exterior" },
  { src: "/images/interior/interior-6.webp", category: "Interior" },
  { src: "/images/exterior/exterior-5.webp", category: "Exterior" },
];

const activeCategory = ref('View All');

const filteredImages = computed(() => {
  if (activeCategory.value === 'View All') {
    return images;
  }
  return images.filter(img => img.category === activeCategory.value);
});

const selectCategory = (cat) => {
  activeCategory.value = cat;
};

// Room size info

const roomSize = [
  { room: 'Living Room', size: '22 m²' },
  { room: 'Dining Room', size: '15 m²' },
  { room: 'Kitchen', size: '15 m²' },
  { room: 'Master Bedroom', size: '16 m²' },
  { room: 'kids Bedroom', size: '12 m²' },
  { room: 'Bath Room', size: '6 m²' },
  { room: 'Guest Toilet', size: '2 m²' },
  { room: 'Balcony', size: '5 m²' },
  { room: 'Storage Room', size: '3 m²' },
]

// Swiper Carousel

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Auto animate

import autoAnimate from '@formkit/auto-animate';
import { Meta, Title } from '#components';

const gallery = ref(null);
const display = ref(null);

onMounted(() => {
  if (gallery.value) {
    autoAnimate(gallery.value)
  }
  if (display.value) {
    autoAnimate(display.value)
  }
})

</script>