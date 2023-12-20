<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div
                    class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 sm:justify-center -mt-20">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full  max-w-[1200px] mx-20  border-2 border-green-700">
                            <div class="bg-gray-700 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                                <div>
                                    <div
                                        class=" mx-auto text-2xl flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-500 sm:mx-0 sm:h-10 sm:w-10">
                                        K
                                    </div>
                                    <div class="mt-3 text-left sm:ml-4 sm:mt-0 sm:text-left">
                                        <CreateModalForm @project-submitted="handleProjectSubmitted"
                                            @cancel-button-clicked="onCancel" />
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import CreateModalForm from './CreateModalForm.vue'
import { Project } from '../api/types';

const open = ref(false)

const emit = defineEmits(['projectSubmitted', 'cancelButtonClicked'])

const handleProjectSubmitted = (projectData: Project) => {
    open.value = false
    emit('projectSubmitted', projectData)
}
const onCancel = () => {
    emit('cancelButtonClicked', true)
}

</script>