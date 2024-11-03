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
        <CreateProjectModal
          :show="showCreateModal"
          @project-submitted="handleProjectSubmitted"
          @cancel-button-clicked="showCreateModal = false"
        >
          <template #header>
            <h3>Create Project</h3>
          </template>
        </CreateProjectModal>
      </Teleport>

      <div
        v-for="project in projects"
        :key="project.id"
        class="mb-4 mx-20 project-tile"
      >
        <RouterLink
          :to="{name: 'project.show', params: {id: project.id}}"
        >
          <div class="border-neutral-500 border rounded-2xl  bg-slate-700">
            <div
              class="rounded-t-2xl  rounded-b-md mb-3 p-1 pl-3 text-md truncate  bg-gradient-to-r from-slate-700 to-slate-800 clear-right"
            >
              {{ project.name }}
            </div>

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
        </RouterLink>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
/*
imports
*/
  import { onBeforeMount, ref } from 'vue'
  import { useToast } from 'vue-toastification'
  import { Project } from '@/api/types'
  import { createProject} from '@/api/project.service'
  import {fetchProjects} from '@/api/project.service'
  import CreateProjectModal from '@/components/CreateProjectModal.vue'

  /*
toastification
*/
  const toast = useToast()

  /*
projects
*/
  const projects = ref<Project[]>([])
  onBeforeMount(() => fetchProjects(projects))

  /*
create-project modal
*/
  const showCreateModal = ref(false)
  const handleCreateClick = () => {
    showCreateModal.value = true
  }

  /*
project submission
*/
  const handleProjectSubmitted = (projectData: Project) => {
    createProject(projectData)
      .then(() => toast.success(`Project ${projectData.name} created!`))
      .then(() => fetchProjects(projects))
    showCreateModal.value = false
  }

</script>

<style>
  .project-tile:hover {
      filter: drop-shadow(0 0 0.5em #64ff8b9e);
  }

  h1 {
      font-size: 3.2em;
      line-height: 1.1;
  }
</style>
