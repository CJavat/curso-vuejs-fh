<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 2 -->
        <tr
          v-for="(project, index) in projectsStore.projectsWithCompletion"
          :key="project.id"
          class="hover"
        >
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.taskCount }}</td>
          <td>
            <progress
              class="progress progress-primary w-56"
              :value="project.completion"
              max="100"
            ></progress>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <input-modal
    :open="modalOpen"
    @close="modalOpen = false"
    @value="projectsStore.addProject"
    placeholder="Nombre del proyecto"
    title="Nuevo Proyecto"
    subTitle="Dale un nombre único a tu proyecto"
  />

  <custom-modal :open="customModalOpen">
    <template #header>
      <h1 class="text-3xl">Titlo del modal</h1>
    </template>

    <template #body>
      <p class="text-3xl">Laboris ad magna in enim ut dolor sit non duis.</p>
    </template>

    <template #footer>
      <div class="flex justify-end gap-4">
        <button @click="customModalOpen = false" class="btn">Close</button>
        <button @click="customModalOpen = false" class="btn btn-primary">Aceptar</button>
      </div>
    </template>
  </custom-modal>

  <fab-button @click="modalOpen = true">
    <add-circle />
  </fab-button>

  <fab-button @click="customModalOpen = true" position="bottom-left">
    <modal-icon />
  </fab-button>
</template>

<script lang="ts" setup>
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import ModalIcon from '@/modules/common/icons/ModalIcon.vue';
import { ref } from 'vue';
import { useProjectsStore } from '../store/projects.store';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectsStore = useProjectsStore();
</script>
