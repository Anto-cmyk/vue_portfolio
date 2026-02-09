<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import emailjs from "emailjs-com";

const form = ref(null);
const status = ref("");

// Send email function using sendForm
const sendEmail = () => {
  if (!form.value) return;

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE,
      import.meta.env.VITE_EMAILJS_TEMPLATE,
      form.value,
      import.meta.env.VITE_EMAILJS_PUBLIC
    )
    .then(() => {
      status.value = "Message sent successfully!";
      form.value.reset(); // reset form after sending
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      status.value = "Failed to send message.";
    });
};
</script>

<template>
  <div class="w-full min-h-screen p-6 bg-gray-100 flex flex-col items-center mb-6">
    <!-- Contact Info -->
    <div class="text-center mb-10 max-w-md">
      <div class="mt-6 space-y-4 mb-6 border shadow-lg bg-white px-4 py-3 rounded-md">
        <!-- Email -->
        <div class="flex items-center gap-3 text-lg font-medium">
          <Icon icon="mdi:email-outline" class="text-2xl text-blue-600" />
          <span>mwangiantony414@gmail.com</span>
        </div>

        <!-- Location -->
        <div class="flex items-center gap-3 text-lg font-medium">
          <Icon icon="mdi:map-marker" class="text-2xl text-red-600" />
          <span>Murang'a, Kenya</span>
        </div>
      </div>

      <h1 class="text-4xl font-bold mb-3">Get In Touch</h1>
      <p class="text-gray-600">Feel free to reach out to me anytime.</p>
    </div>

    <!-- Contact Form -->
    <div class="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
      <form ref="form" @submit.prevent="sendEmail" class="space-y-4">
        <div>
          <label class="font-medium">Your Name</label>
          <input
            name="from_name"
            type="text"
            required
            class="w-full border p-2 rounded-md"
          />
        </div>

        <div>
          <label class="font-medium">Your Email</label>
          <input
            name="from_email"
            type="email"
            required
            class="w-full border p-2 rounded-md"
          />
        </div>

        <div>
          <label class="font-medium">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            class="w-full border p-2 rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>

        <p v-if="status" class="text-center text-green-600 mt-3">{{ status }}</p>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
