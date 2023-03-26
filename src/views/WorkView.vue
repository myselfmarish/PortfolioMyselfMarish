<!--suppress SpellCheckingInspection -->
<template>
  <WorkFaceComp/>
  <WorkBonshe/>
  <WorkProfile/>
  <WorkConcept/>
  <WorkBeInf/>
  <WorkOtherProjects/>
</template>

<script>
import WorkFaceComp from "@/components/WorkFaceComp";
import WorkBonshe from "@/components/WorkBonshe";
import WorkProfile from "@/components/WorkProfile";
import WorkConcept from "@/components/WorkConcept";
import WorkBeInf from "@/components/WorkBeInf";
import WorkOtherProjects from "@/components/WorkOtherProjects";

export default {
  name: "WorkView",
  components: {
    WorkFaceComp,
    WorkBonshe,
    WorkProfile,
    WorkConcept,
    WorkBeInf,
    WorkOtherProjects
  }
}
</script>

<style scoped>

</style>