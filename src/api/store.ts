import {  ref } from 'vue'
import { Project } from './types'


export const projects = ref<Project[]>([])
export const store = ref(projects)
