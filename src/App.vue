<script setup lang="ts">
  import { ref } from 'vue'
  import ProjectsList from './components/ProjectsList.vue'
  import NavBar from './components/NavBar.vue'
  import type { Project } from './api/types'
  import {fetchProjects, createProject} from './api/project.service'
  import { useToast } from 'vue-toastification'


  const toast = useToast()

  const projects = ref<Project[]>([])
  fetchProjects(projects)

  const handleProjectSubmitted = (projectData: Project) => {
    createProject(projectData)
      .then(() => toast.success(`Project ${projectData.name} created!`))
      .then(() => fetchProjects(projects))
  }
</script>

<template>
  <NavBar msg="Kameleon" />
  <ProjectsList
    @project-submitted="handleProjectSubmitted"
    :projects="projects"
  />
</template>

<style scoped></style>
