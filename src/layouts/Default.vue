<template>
  <div class="w-full h-full flex flex-col items-center small-caps ">
    <section id="profile" class="flex flex-col items-center my-auto ">
      <g-image alt="Me" class="rounded-full" src="~/assets/profile.jpeg" width="135" />
      <p class="text-gray-800 my-2 text-3xl">Oscar Hafner</p>
      <p class="text-gray-800 mt-1 mb-6 text-xl">Software development, electronics and random stuff</p>
      <nav class="flex flex-row w-full items-center justify-center">
        <p class="flex flex-row mx-1 px-1">
          <a class="text-lg" href="#">About</a>
        </p>
        <p class="flex flex-row mx-1 px-1">
          <a class="text-lg" href="#">Posts</a>
        </p>
        <p class="flex flex-row mx-1 px-1">
          <a class="text-lg" href="#">Work</a>
        </p>
      </nav>
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
