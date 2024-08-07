<template>
  <Disclosure
    as="nav"
    class="bg-gray-800"
    v-slot="{ open }"
  >
    <div class="mx-auto  px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon
              v-if="!open"
              class="block h-6 w-6"
              aria-hidden="true"
            />
            <XMarkIcon
              v-else
              class="block h-6 w-6"
              aria-hidden="true"
            />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div>
            <h1 class="logo ">
              Kameleon
            </h1>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="{name: item.name}"
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                active-class="bg-gray-900 text-white"
              >
                {{ item.displayedName }}
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <BellIcon
              class="h-6 w-6"
              aria-hidden="true"
            />
          </button>

          <!-- Profile dropdown -->
          <Menu
            as="div"
            class="relative ml-3"
          >
            <div>
              <MenuButton
                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                >
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                  >Your
                    Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                  >Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                  >Sign
                    out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="{name: item.name}"
          class="block rounded-md px-3 py-2 text-base font-medium"
          active-class="bg-gray-900 text-white"
        >
          <DisclosureButton> {{ item.displayedName }}</DisclosureButton>
        </RouterLink>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const navigation = [
    { name: 'dashboard', displayedName: 'Dashboard', current: route.path === '/', href: route.path},
    { name: 'project', displayedName: 'Projects', current: route.path === '/project', href: route.path },
  ]
</script>

<style scoped>
.logo {
    position: relative;
    will-change: filter;
    transition: filter 300ms;
    margin-top: -0.05em;
    margin-left: 0.2em;
    margin-right: 1em;
    font-style: italic;
    font-size: 2em;
    color: #404040;
    animation-name: color;
    animation-duration: 12s;
    animation-iteration-count: infinite;
}

@keyframes color {
    0% {
        color: #242424;
    }

    33% {
        color: rgb(152, 184, 157);
    }

    75% {
        color: #77f442;
    }

    100% {
        color: #242424;
    }
}

.logo:hover {
    filter: drop-shadow(0 0 0.5em #646cffaa);
}

h1 {
    font-size: 3.2em;
    line-height: 1.1;
}
</style>
