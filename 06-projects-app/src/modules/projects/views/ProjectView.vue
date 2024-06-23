<template>
  <div class="w-full">
    <section class="mt-2">
      <bread-crumbs :name="project?.name ?? 'No Name'" />
    </section>

    <section class="m-2">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Completada</th>
              <th>Tarea</th>
              <th>Completada En</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in project?.tasks" :key="task.id" class="hover">
              <th>2</th>
              <td>{{ task.name }}</td>
              <td>Desktop Support Technician</td>
            </tr>
            <tr class="hover">
              <th></th>
              <td>
                <input
                  type="text"
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:placeholder-opacity-100"
                  placeholder="Nueva Tarea"
                  v-model="newTask"
                  @keyup.enter="addTask"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { useRouter } from 'vue-router';

import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectsStore } from '../store/projects.store';

import type { Project } from '../interfaces/project.interface';

interface Props {
  id: string;
}

const router = useRouter();
const props = defineProps<Props>();
const projectStore = useProjectsStore();
const project = ref<Project | null>();
const newTask = ref();

// const project = projectStore.projectList.find((project) => project.id === props.id);

const addTask = () => {
  if (!project.value) return;
  projectStore.addTaskToProject(project.value.id, newTask.value);
  newTask.value = '';
};

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find((project) => project.id === props.id);
    if (!project.value) router.replace('/projects');
  },
  {
    immediate: true, //? Para que se ejecute en cuanto cargue la página.
  },
);

// watch();
</script>
