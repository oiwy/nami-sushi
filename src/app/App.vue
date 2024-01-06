<script setup lang="ts">
import { Header } from "@/widgets";

const category = [
  {
    id: 1,
    name: "Роллы",
    link: "?category=1",
  },
  {
    id: 2,
    name: "суши и гунканы",
    link: "?category=2",
  },
  {
    id: 3,
    name: "сеты",
    link: "?category=3",
  },
  {
    id: 4,
    name: "лапша и рис",
    link: "?category=4",
  },
  {
    id: 5,
    name: "салаты",
    link: "?category=5",
  },
  {
    id: 6,
    name: "горячие блюда",
    link: "?category=6",
  },
];

const data = [
  {
    id: 1,
    name: "ролл ясай",
    description:
      "Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут",
    weight: 185,
    price: 220,
    image: "/ролл-ясай.png",
    image_alt: "ролл ясай",
  },
];
</script>

<template>
  <Header></Header>
  <main>
    <section>
      <div class="container py-5">
        <div class="mb-5 flex w-full items-center justify-center gap-x-3">
          <svg
            width="5"
            height="6"
            viewBox="0 0 5 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2.5" cy="3.41882" r="2.5" fill="#191919" />
          </svg>
          <span class="font-neucha text-2xl uppercase">доставка</span>
          <svg
            width="5"
            height="6"
            viewBox="0 0 5 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2.5" cy="3.41882" r="2.5" fill="#191919" />
          </svg>
        </div>
        <div class="mb-5 flex flex-wrap">
          <a
            class="px-4 py-3"
            v-for="item in category"
            :href="item.link"
            v-key="item.id"
          >
            <span class="font-neucha text-base uppercase text-secondary">
              {{ item.name }}
            </span>
          </a>
        </div>
        <div class="px-4" v-for="item in data">
          <div
            class="bg-card flex flex-col rounded-lg p-7 shadow-xl"
            v-key="item.id"
          >
            <div class="flex justify-center">
              <img :src="item.image" :alt="item.image_alt" />
            </div>
            <div class="flex items-center justify-between pb-6 pt-5">
              <h3 class="font-neucha text-xl uppercase text-black">
                {{ item.name }}
              </h3>
              <span class="font-sans text-sm text-content">
                {{ item.weight }} г
              </span>
            </div>
            <p class="pb-10 font-sans text-base text-content">
              {{ item.description }}
            </p>
            <div class="flex items-center justify-between">
              <span class="font-neucha text-lg text-black">
                {{ item.price }} ₽
              </span>
              <button
                class="rounded-lg bg-primary px-8 py-2 font-sans text-base text-white"
              >
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer></footer>
</template>
