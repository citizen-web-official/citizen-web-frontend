<script setup lang="ts">
interface PublicTicket {
  title: string
  description: string
  type: 'referendum' | 'public-poll'
  options: string[]
  implications: {
    pros: string[]
    cons: string[]
  }
  source_summary: string
  ai_generated_date: string
  status: 'proposed' | 'validated' | 'published'
}

const props = defineProps<{
  ticket: PublicTicket
}>()

const handleVote = (option: string) => {
  console.log(`Vote submitted for "${props.ticket.title}": ${option}`)
  // Mock API call - to be replaced with actual API integration
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div
    class="card w-full max-w-2xl border border-gray-200 bg-base-100 shadow-xl"
  >
    <div class="card-body">
      <!-- Header -->
      <div class="flex items-center gap-2">
        <div class="badge badge-primary">
          {{ ticket.type === 'referendum' ? 'Référendum' : 'Sondage Public' }}
        </div>
        <div
          class="badge"
          :class="{
            'badge-warning': ticket.status === 'proposed',
            'badge-success': ticket.status === 'validated',
            'badge-info': ticket.status === 'published',
          }"
        >
          {{ ticket.status }}
        </div>
      </div>

      <!-- Title and Description -->
      <h2 class="card-title mt-2 text-xl font-bold text-primary">
        {{ ticket.title }}
      </h2>
      <p class="mt-2 text-gray-700">{{ ticket.description }}</p>

      <!-- Implications -->
      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <!-- Pros -->
        <div class="rounded-lg bg-green-50 p-4">
          <h3 class="mb-2 flex items-center gap-2 font-semibold text-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Pour
          </h3>
          <ul class="space-y-2">
            <li
              v-for="(pro, index) in ticket.implications.pros"
              :key="index"
              class="flex items-start gap-2 text-sm text-gray-700"
            >
              <span class="mt-1 text-green-500">•</span>
              {{ pro }}
            </li>
          </ul>
        </div>

        <!-- Cons -->
        <div class="rounded-lg bg-red-50 p-4">
          <h3 class="mb-2 flex items-center gap-2 font-semibold text-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Contre
          </h3>
          <ul class="space-y-2">
            <li
              v-for="(con, index) in ticket.implications.cons"
              :key="index"
              class="flex items-start gap-2 text-sm text-gray-700"
            >
              <span class="mt-1 text-red-500">•</span>
              {{ con }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Source and Date -->
      <div class="mt-4 text-sm text-gray-600">
        <p class="font-medium">Source:</p>
        <p>{{ ticket.source_summary }}</p>
        <p class="mt-2">Généré le {{ formatDate(ticket.ai_generated_date) }}</p>
      </div>

      <!-- Voting Options -->
      <div class="card-actions mt-6 justify-end space-x-2">
        <button
          v-for="option in ticket.options"
          :key="option"
          @click="handleVote(option)"
          class="btn"
          :class="{
            'btn-primary': option === 'Oui',
            'btn-error': option === 'Non',
            'btn-ghost': option === 'Abstention',
          }"
        >
          {{ option }}
        </button>
      </div>
    </div>
  </div>
</template>
