import CreateLeagueModal from '@/components/ui/modals/CreateLeagueModal.vue';

export const ModalMap = {
  create_league: CreateLeagueModal,
};

export type ModalKey = keyof typeof ModalMap
