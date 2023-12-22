<template>
  <form @submit.prevent="onSubmit">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label
              for="title"
              class="block text-sm font-medium leading-6 text-white"
            >Title</label>
            <div class="mt-2">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 "
              >
                <input
                  v-model="title"
                  type="text"
                  name="title"
                  id="title"
                  autocomplete="title"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6 ml-2 overflow-ellipsis"
                >
              </div>
            </div>
          </div>

          <div class="col-span-full">
            <label
              for="description"
              class="block text-sm font-medium leading-6 text-green-500"
            >Description</label>
            <div class="mt-2">
              <textarea
                v-model="description"
                id="description"
                name="description"
                rows="3"
                class="block w-full rounded-md border-0 py-1.5 text-white  bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label
              for="description_markup"
              class="block text-sm font-medium leading-6 text-blue-500"
            >Markup</label>
            <div class="mt-2">
              <select
                v-model="description_markup"
                id="description_markup"
                name="description_markup"
                autocomplete="description_markup"
                class="block w-full rounded-md border-0 py-1.5 text-white bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>PLAIN</option>
                <option>MARKDOWN</option>
                <option>ASCIIDOC</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        class="text-sm font-semibold leading-6 text-white"
        @click="onCancel"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Create
      </button>
    </div>
  </form>
</template>
  
<script setup lang="ts">
  import { ref } from 'vue'
  import { useToast } from 'vue-toastification'

  const title = ref('')
  const description = ref('')
  const description_markup = ref('PLAIN')

  const emit = defineEmits(['projectSubmitted', 'cancelButtonClicked'])

  const toast = useToast()

  const onSubmit = () => {
    if (!title.value || !description.value || !description_markup.value) {
      toast.error('All required fields must be filled')
      return
    }

    const projectData = {
      id: generateUniqueId(),
      title: title.value,
      description: description.value,
      description_markup: description_markup.value,
    }

    emit('projectSubmitted', projectData)

    title.value = ''
    description.value = ''
  }

  const onCancel = () => {
    emit('cancelButtonClicked', true)
  }


  const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000000)
  }
</script>