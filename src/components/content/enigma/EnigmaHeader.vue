<template>
  <header class="text-center mb-12">
    <div class="inline-block p-4 bg-red-100 rounded-full mb-4">
      <span class="text-6xl">⚙️</span>
    </div>
    <h1 class="text-5xl font-bold text-gray-800 mb-4">Die ENIGMA-Maschine</h1>
    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
      Von der polyalphabetischen Verschlüsselung zur Rotor-Chiffriermaschine
    </p>
  </header>
</template>

<style scoped>
header {
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
