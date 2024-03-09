import { Ref } from 'vue'
import { Project } from './types'

const BASE_URL = '/api/project'

export const fetchProjects = async (projects: Ref<Project[]>) => {
  return await fetch(BASE_URL)
    .then((data) => data.json())
    .then((r) => projects.value = r)
}

export const createProject = async (projectData: Project) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      summary: projectData.summary,
      description: projectData.description,
      description_markup: projectData.description_markup,
    }),
  }
  return await fetch(BASE_URL, requestOptions).then((response) =>
    response.json(),
  )
}
