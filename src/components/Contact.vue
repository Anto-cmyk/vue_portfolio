
<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import emailjs from "@emailjs/browser";

const form = ref(null);
const loading = ref(false);
const status = ref("");
const statusType = ref("");

const sendEmail = async () => {
  if (!form.value || loading.value) return;

  status.value = "";
  statusType.value = "";

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    statusType.value = "error";
    status.value = "Email service configuration is incomplete.";
    return;
  }

  loading.value = true;

  try {
    await emailjs.sendForm(
      serviceId,
      templateId,
      form.value,
      { publicKey }
    );

    statusType.value = "success";
    status.value = "Your message has been sent successfully!";
    form.value.reset();
  } catch (error) {
    console.error("EmailJS error:", error);
    statusType.value = "error";
    status.value =
      "We couldn't send your message. Please try again.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <main
    class="min-h-screen bg-slate-50 px-4 py-14 sm:px-6 sm:py-20"
  >
    <div class="mx-auto max-w-6xl">
      <!-- Heading -->
      <div class="mb-12 text-center">
        <span
          class="inline-flex items-center gap-2 rounded-full
                 border border-blue-100 bg-blue-50 px-4 py-2
                 text-sm font-semibold text-blue-700"
        >
          <span class="h-2 w-2 rounded-full bg-green-500"></span>
          Let's connect
        </span>

        <h1
          class="mt-5 text-4xl font-extrabold tracking-tight
                 text-slate-900 sm:text-5xl"
        >
          Get in touch<span class="text-blue-600">.</span>
        </h1>

        <p class="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
          Have a project, an opportunity, or just want to say hello?
          Send me a message.
        </p>
      </div>

      <!-- Main card -->
      <div
        class="grid overflow-hidden rounded-3xl border
               border-slate-200 bg-white shadow-xl
               shadow-slate-200/60 lg:grid-cols-5"
      >
        <!-- Contact information -->
        <aside
          class="relative overflow-hidden bg-slate-950
                 p-7 text-white sm:p-10 lg:col-span-2"
        >
          <div
            class="pointer-events-none absolute -right-20 -top-20
                   h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
          ></div>

          <div class="relative">
            <p
              class="text-sm font-semibold uppercase
                     tracking-[0.18em] text-blue-300"
            >
              Contact information
            </p>

            <h2 class="mt-5 text-2xl font-bold leading-snug sm:text-3xl">
              Let's make something great together.
            </h2>

            <p class="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              I'm open to discussing software development projects,
              collaboration, and professional opportunities.
            </p>

            <div class="mt-10 space-y-6">
              <a
                href="mailto:mwangiantony414@gmail.com"
                class="group flex items-start gap-4 rounded-xl
                       transition hover:bg-white/5"
              >
                <span
                  class="flex h-12 w-12 shrink-0 items-center
                         justify-center rounded-xl bg-white/10
                         text-blue-300"
                >
                  <Icon icon="mdi:email-outline" class="text-2xl" />
                </span>

                <span class="min-w-0 py-1">
                  <span class="block text-sm text-slate-400">
                    Email address
                  </span>
                  <span
                    class="mt-1 block break-all text-sm font-medium
                           group-hover:text-blue-300"
                  >
                    mwangiantony414@gmail.com
                  </span>
                </span>
              </a>

              <div class="flex items-start gap-4">
                <span
                  class="flex h-12 w-12 shrink-0 items-center
                         justify-center rounded-xl bg-white/10
                         text-blue-300"
                >
                  <Icon
                    icon="mdi:map-marker-outline"
                    class="text-2xl"
                  />
                </span>

                <span class="py-1">
                  <span class="block text-sm text-slate-400">
                    Location
                  </span>
                  <span class="mt-1 block text-sm font-medium">
                    Murang'a, Kenya
                  </span>
                </span>
              </div>
            </div>

            <div class="mt-10 border-t border-white/10 pt-6">
              <div class="flex items-center gap-2 text-sm text-slate-300">
                <Icon
                  icon="mdi:clock-time-four-outline"
                  class="text-lg text-blue-300"
                />
                I look forward to hearing from you.
              </div>
            </div>
          </div>
        </aside>

        <!-- Contact form -->
        <section class="p-6 sm:p-10 lg:col-span-3 lg:p-12">
          <h2 class="text-2xl font-bold text-slate-900">
            Send a message
          </h2>

          <p class="mt-2 text-sm leading-6 text-slate-500">
            Fill in the form below. All fields are required.
          </p>

          <form
            ref="form"
            @submit.prevent="sendEmail"
            class="mt-8 space-y-6"
          >
            <!-- Name -->
            <div>
              <label
                for="from_name"
                class="mb-2 block text-sm font-semibold text-slate-700"
              >
                Your name
              </label>

              <div class="relative">
                <Icon
                  icon="mdi:account-outline"
                  class="absolute left-4 top-1/2 -translate-y-1/2
                         text-xl text-slate-400"
                />

                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  autocomplete="name"
                  placeholder="Enter your full name"
                  minlength="2"
                  maxlength="100"
                  required
                  class="w-full rounded-xl border border-slate-200
                         bg-slate-50 py-3.5 pl-12 pr-4 text-sm
                         text-slate-900 outline-none transition
                         placeholder:text-slate-400
                         focus:border-blue-500 focus:bg-white
                         focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            <!-- Email -->
            <div>
              <label
                for="from_email"
                class="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email address
              </label>

              <div class="relative">
                <Icon
                  icon="mdi:email-outline"
                  class="absolute left-4 top-1/2 -translate-y-1/2
                         text-xl text-slate-400"
                />

                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  autocomplete="email"
                  placeholder="you@example.com"
                  maxlength="254"
                  required
                  class="w-full rounded-xl border border-slate-200
                         bg-slate-50 py-3.5 pl-12 pr-4 text-sm
                         text-slate-900 outline-none transition
                         placeholder:text-slate-400
                         focus:border-blue-500 focus:bg-white
                         focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <p class="mt-2 text-xs text-slate-500">
                I'll use this address to reply to your message.
              </p>
            </div>

            <!-- Message -->
            <div>
              <div class="mb-2 flex items-center justify-between gap-3">
                <label
                  for="message"
                  class="text-sm font-semibold text-slate-700"
                >
                  Your message
                </label>

                <span
                  class="text-xs tabular-nums text-slate-400"
                  aria-live="polite"
                >
                  {{ form?.elements?.message?.value?.length || 0 }}/2000
                </span>
              </div>

              <textarea
                id="message"
                name="message"
                rows="5"
                minlength="10"
                maxlength="2000"
                required
                placeholder="Tell me about your project, question, or opportunity..."
                class="w-full resize-y rounded-xl border
                       border-slate-200 bg-slate-50 px-4 py-3.5
                       text-sm leading-6 text-slate-900 outline-none
                       transition placeholder:text-slate-400
                       focus:border-blue-500 focus:bg-white
                       focus:ring-4 focus:ring-blue-500/10"
              ></textarea>

              <p class="mt-2 text-xs text-slate-500">
                Please include enough detail for me to understand your enquiry.
              </p>
            </div>

            <!-- One status message only -->
            <div
              v-if="status"
              role="status"
              aria-live="polite"
              class="flex items-start gap-3 rounded-xl p-4
                     text-sm leading-6"
              :class="
                statusType === 'success'
                  ? 'bg-green-50 text-green-800'
                  : 'bg-red-50 text-red-700'
              "
            >
              <Icon
                :icon="
                  statusType === 'success'
                    ? 'mdi:check-circle-outline'
                    : 'mdi:alert-circle-outline'
                "
                class="mt-0.5 shrink-0 text-xl"
              />

              <p>{{ status }}</p>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="loading"
              class="flex w-full items-center justify-center gap-3
                     rounded-xl bg-blue-600 px-6 py-4
                     font-semibold text-white shadow-lg
                     shadow-blue-600/20 transition
                     hover:-translate-y-0.5 hover:bg-blue-700
                     focus:outline-none focus:ring-4
                     focus:ring-blue-500/30
                     disabled:cursor-not-allowed
                     disabled:opacity-60"
            >
              <Icon
                :icon="
                  loading
                    ? 'mdi:loading'
                    : 'mdi:send-outline'
                "
                class="text-xl"
                :class="loading ? 'animate-spin' : ''"
              />

              {{ loading ? "Sending your message..." : "Send message" }}
            </button>

            <p
              class="flex items-center justify-center gap-2
                     text-center text-xs leading-5 text-slate-500"
            >
              <Icon
                icon="mdi:shield-check-outline"
                class="shrink-0 text-base"
              />
              Your information is used to respond to your enquiry.
            </p>
          </form>
        </section>
      </div>

      <p class="mt-8 text-center text-sm text-slate-500">
        Thank you for visiting my portfolio.
      </p>
    </div>
  </main>
</template>
