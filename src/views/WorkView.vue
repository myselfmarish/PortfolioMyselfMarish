<!--suppress SpellCheckingInspection -->
<template>
  <WorkFaceComp/>
  <WorkBonshe/>
  <WorkProfile/>
  <WorkConcept/>
</template>

<script>
import WorkFaceComp from "@/components/WorkFaceComp";
import WorkBonshe from "@/components/WorkBonshe";
import WorkProfile from "@/components/WorkProfile";
import WorkConcept from "@/components/WorkConcept";

export default {
  name: "WorkView",
  components: {
    WorkFaceComp,
    WorkBonshe,
    WorkProfile,
    WorkConcept
  }
}
</script>

<style scoped>

</style>