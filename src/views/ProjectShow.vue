<template>
  <div class="bg-cyan-950 h-screen pt-5">
    <div class="border-neutral-500 border rounded-2xl  bg-slate-700 mx-20">
      <div
        class="rounded-t-2xl  rounded-b-md mb-3 p-1 pl-3 text-md truncate  bg-gradient-to-r from-slate-700 to-slate-800 clear-right"
      >
        {{ project?.name }}
      </div>

      <div class="text-sm  truncate ml-3">
        <span class="text-orange-400"> Summary: </span>{{ project?.summary }}
      </div>
      <div class="text-sm  truncate ml-3">
        <span class="text-green-400"> Description: </span>{{ project?.description }}
      </div>
      <div class="text-xs  truncate ml-3 mb-2">
        <span class="text-blue-400"> Markup: </span>{{ project?.description_markup }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  import { useRoute } from 'vue-router'
  import { onBeforeMount, ref } from 'vue'
  import { projects } from '@/api/store'
  import { fetchProject } from '@/api/project.service'
  import { Project } from '@/api/types'


  const route = useRoute()
  const project = ref<Project>()

  onBeforeMount(() => {
    if (projects.value.length > 0) {
      project.value = projects.value.find(project => project.id === route.params.id)
    } else {
      if (typeof route.params.id === 'string') fetchProject(route.params.id, project)
    }
  },
  )
</script>
