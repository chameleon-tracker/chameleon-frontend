import { describe, test, expect, vi, Mock } from 'vitest'
import { fetchProjects } from '../src/api/project.service'
import { Project } from '../src/api/types'
import { ref } from 'vue'
import { Ref } from 'vue'


const fetch = global.fetch = vi.fn() as Mock


const createFetchResponse = (data: Ref<Project[]>) => {
  return { json: () => new Promise((resolve) => resolve(data)) }
}

describe('Project Service', () => {
  test('makes a GET request to fetch projects list', async () => {
    const projectsListResponse = ref<Project[]>([
      {
        id: '1',
        summary: 'Project 1',
        description: 'Project 1 Description',
        description_markup: 'PLAIN',
      },
      {
        id: '2',
        summary: 'Project 2',
        description: 'Project 2 Description',
        description_markup: 'PLAIN',
      },
    ])

    const projects = ref<Project[]>([])

    fetch.mockResolvedValue(createFetchResponse(projectsListResponse))
    const projectsList = await fetchProjects(projects)

    expect(fetch).toHaveBeenCalledWith('/api/project')
    expect(projectsListResponse).toStrictEqual(projectsList)
  })
  test.todo('makes a POST request to create a new project')
})
