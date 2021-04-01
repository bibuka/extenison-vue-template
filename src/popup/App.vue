<template>
  <div>
    <div>Popup</div>

    <SettingsIcon class="h-6 w-6" />
  </div>
</template>

<script>
import SettingsIcon from '@/assets/svg/settings.svg'
import mixin from '@/utils/mixin.js'

export default {
  name: 'Popup',
  mixins: [mixin],
  components: {
    SettingsIcon,
  },
  data() {
    return {}
  },
  async mounted() {},
  computed: {},
  methods: {},
}
</script>
