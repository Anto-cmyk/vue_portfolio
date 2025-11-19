<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import emailjs from "emailjs-com";

const name = ref("");
const email = ref("");
const message = ref("");
const status = ref("");

const sendEmail = () => {
  const params = {
    from_name: name.value,
    from_email: email.value,
    message: message.value,
  };

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE,
      import.meta.env.VITE_EMAILJS_TEMPLATE,
      params,
      import.meta.env.VITE_EMAILJS_PUBLIC
    )
    .then(() => {
      status.value = "Message sent successfully!";
      name.value = "";
      email.value = "";
      message.value = "";
    })
    .catch(() => {
      status.value = "Failed to send message.";
    });
};
</script>

<template>
  <div class="w-full min-h-screen p-6 bg-gray-100 flex flex-col items-center mb-6">
    <h2></h2>
    <!-- Contact Info -->
    <div class="text-center mb-10 max-w-md">
      <div class="mt-6 space-y-4 mb-6.5 border shadow-lg bg-white px-4 py-3 rounded-md">
        <!-- Email -->
        <div class="flex items-center gap-3 text-lg font-medium">
          <Icon icon="mdi:email-outline" class="text-2xl text-blue-600" />
          <span> mwangiantony414@gmail.com </span>
        </div>

        <!-- Location -->
        <div class="flex items-center gap-3 text-lg font-medium">
          <Icon icon="mdi:map-marker" class="text-2xl text-red-600" />
          <span> Murang'a, Kenya </span>
        </div>
      </div>

      <h1 class="text-4xl font-bold mb-3">Get In Touch</h1>
      <p class="text-gray-600">Feel free to reach out to me anytime.</p>
    </div>

    <!-- Contact Form -->
    <div class="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
      <form @submit.prevent="sendEmail" class="space-y-4">
        <div>
          <label class="font-medium">Your Name</label>
          <input
            v-model="name"
            type="text"
            required
            class="w-full border p-2 rounded-md"
          />
        </div>

        <div>
          <label class="font-medium">Your Email</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full border p-2 rounded-md"
          />
        </div>

        <div>
          <label class="font-medium">Message</label>
          <textarea
            v-model="message"
            rows="4"
            required
            class="w-full border p-2 rounded-md"
          ></textarea>
        </div>

        <button class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Send Message
        </button>

        <p v-if="status" class="text-center text-green-600 mt-3">{{ status }}</p>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
