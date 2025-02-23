<script setup lang="ts">
import { Dialog, Button, Select, Message, InputText } from 'primevue';
import { LeagueResolver } from '@/api/reslovers/LeagueResolver.ts';
import { Form, FormField, type FormSubmitEvent } from '@primevue/forms';
import { defineEmits, onMounted, ref } from 'vue'
import { useToast } from 'primevue/usetoast';
import { generateSeasons, generateTeamNumbers } from '@/utilities/array-generators.ts';
import { leagueService } from '@/api/services/LeagueService.ts'
import { useRouter } from 'vue-router'

const emit = defineEmits(['close']);
const toast = useToast();
const router = useRouter();


const teams = ref<number[]>([]);
const seasons = ref<number[]>([]);
const selectedTeam = ref<number>(20);
const selectedSeason = ref<number>(2025);

const submitForm = async (form: FormSubmitEvent) => {
  if (form.valid) {
    try {
      const league = await leagueService.create({
        name: form.states.name.value,
        teams_number: form.states.teams_number.value,
        season: form.states.season.value,
      });
      toast.add({ severity: 'secondary', summary: 'Success!', life: 3000 });
      emit('close');
      void router.push({ name: "league", params: { id: league.id } });
    } catch (error: any) {
      toast.add({
        severity: 'error',
        summary: 'Failed!',
        detail: 'Choose Another Name or Season Please!',
        life: 3000
      });
      console.error(error);
    }
  }
};

onMounted(() => {
  seasons.value = generateSeasons();
  teams.value = generateTeamNumbers();
});

</script>

<template>
  <Dialog visible modal dismissableMask header="Create League" class="w-9/10 max-w-lg">
    <Form
      :resolver="LeagueResolver"
      @submit="submitForm"
      :validateOnBlur="true"
      :validate-on-value-update="false"
      class="flex flex-col gap-4 w-full"
    >


      <FormField
        v-slot="$field"
        name="name"
        initialValue=""
        class="flex flex-col gap-1"
      >
        <InputText type="text" placeholder="Name" fluid />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{
            $field.error?.message
          }}</Message>
      </FormField>

      <FormField
        v-slot="$field"
        name="teams_number"
        :initialValue="selectedTeam"
        class="flex flex-col gap-1"
      >
        <Select placeholder="Teams Number" :options="teams"/>
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{
          $field.error?.message
        }}</Message>
      </FormField>

      <FormField
        v-slot="$field"
        name="season"
        :initialValue="selectedSeason"
        class="flex flex-col gap-1"
      >
        <Select placeholder="Season" :options="seasons" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{
            $field.error?.message
          }}</Message>
      </FormField>
      <Button type="submit" severity="primary" label="Create League" />
    </Form>
  </Dialog>
</template>
