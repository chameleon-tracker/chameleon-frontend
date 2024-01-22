<script setup lang="ts">
  import { ref } from 'vue'
  import ProjectsList from './components/ProjectsList.vue'
  import NavBar from './components/NavBar.vue'
  import type { Project } from './api/types'
  import { useToast } from 'vue-toastification'


  const toast = useToast()


  const projects = ref<Project[]>([])

  const fetchProjects = () => {
    fetch('/api/project')
      .then(data => data.json())
      .then(r => projects.value = r)
  }
  fetchProjects()

  const handleProjectSubmitted = (projectData: Project) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          title: projectData.title,
          description: projectData.description,
          description_markup: projectData.description_markup,
        },
      ),
    }
    fetch('/api/project', requestOptions)
      .then(response => response.json())
      .then(() => toast.success(`Project ${projectData.title} created!`))
      .then(() => fetchProjects())
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
