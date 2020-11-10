<template>
  <div class="w-full h-full flex flex-col items-center small-caps ">
    <section id="profile" class="flex flex-col items-center my-auto ">
      <g-image alt="Me" class="rounded-full" src="~/assets/profile.jpeg" width="135" />
      <p class="text-gray-800 my-2 text-3xl">Leo La Carne</p>
      <p class="text-gray-800 mt-1 mb-6 text-xl">Just another site</p>
    </section>
    <main class="my-auto">
      <slot/>
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
