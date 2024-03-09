<template>
  <div class="bg-cyan-950 h-screen pt-5">
    <div class=" flex flex-col">
      <button
        id="show-modal"
        @click="handleCreateClick"
        type="button"
        class="bg-green-600 rounded-xl w-40 px-3 py-1 text-sm m-auto mb-5"
      >
        Create
      </button>
      <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <CreateModal
          :show="showCreateModal"
          @close="showCreateModal = false"
          @project-submitted="handleProjectSubmitted"
          @cancel-button-clicked="showCreateModal = false"
        >
          <template #header>
            <h3>Create Project</h3>
          </template>
        </CreateModal>
      </Teleport>

      <div
        v-for="project in projects"
        :key="project.id"
        class="mb-4 mx-20"
      >
        <div class="border-neutral-500 border-2 rounded-2xl  bg-slate-700">
          <div class="text-sm  truncate ml-3">
            <span class="text-orange-400"> Summary: </span>{{ project.summary }}
          </div>
          <div class="text-sm  truncate ml-3">
            <span class="text-green-400"> Description: </span>{{ project.description }}
          </div>
          <div class="text-xs  truncate ml-3 mb-2">
            <span class="text-blue-400"> Markup: </span>{{ project.description_markup }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
  import { ref } from 'vue'
  import CreateModal from './CreateModal.vue'
  import { Project } from '../api/types'


  const showCreateModal = ref(false)
  defineProps({
    projects: {
      type: Array<Project>,
      required: true,
    },
  })
  const emit = defineEmits(['projectSubmitted'])

  const handleCreateClick = () => {
    showCreateModal.value = true
  }

  const handleProjectSubmitted = (projectData: Project) => {
    emit('projectSubmitted', projectData)
    showCreateModal.value = false
  }
</script>
