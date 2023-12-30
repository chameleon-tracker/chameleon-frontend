<script setup lang="ts">
  import { ref } from 'vue'
  import ProjectsList from './components/ProjectsList.vue'
  import NavBar from './components/NavBar.vue'
  import type { Project } from './api/types'


  const projects = ref<Project[]>([
    {
      id: '1',
      title: 'Project 1 title',
      description: 'This is the test project numero uno!',
      description_markup: 'PLAIN',
    },
    {
      id: '2',
      title: 'Project 2 title',
      description: 'This is the test project numero duo!',
      description_markup: 'MARKDOWN',
    },
    {
      id: '3',
      title: 'Project 3 title',
      description: 'This is the test project numero tres!',
      description_markup: 'ASCIIDOC',
    },
  ])

  const handleProjectSubmitted = (projectData: Project) => {
    projects.value.push(projectData)
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
