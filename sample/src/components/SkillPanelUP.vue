<template>
  <div class="SkillPanelUP">
    <skill-panelname id="name" />
    <skill-icon id="icon-0" :skill="skills[0]" />
    <skill-icon id="icon-1" :skill="skills[1]" />
    <skill-icon id="icon-2" :skill="skills[2]" />
    <skill-icon id="icon-3" :skill="skills[3]" />
    <skill-icon id="icon-4" :skill="skills[4]" />
    <skill-icon id="icon-5" :skill="skills[5]" />
    <skill-icon id="icon-6" :skill="skills[6]" />
    <skill-icon id="icon-7" :skill="skills[7]" />
    <skill-icon id="icon-8" :skill="skills[8]" />
    <skill-icon id="icon-9" :skill="skills[9]" />
    <skill-icon id="icon-10" :skill="skills[10]" />
    <skill-icon id="icon-11" :skill="skills[11]" />
  </div>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      skills: store.state.skills
    }
  }
}
</script>

<style scoped>
.SkillPanelUP {
  background-image: url("../assets/parts/skillpanel-none.png");
  background-size:contain;
  background-size:cover;
  width: 100%;
  height: 490px;
}
#icon-0 {
  position: absolute;
  top: 139px;
  left: 173px;
}
#name {
  text-align: center;
}
#icon-1 {
  position: absolute;
  top: 159px;
  left: 245px;
}
#icon-2 {
  position: absolute;
  top: 210px;
  left: 293px;
}
#icon-3 {
  position: absolute;
  top: 275px;
  left: 313px;
}
#icon-4 {
  position: absolute;
  top: 333px;
  left: 293px;
}
#icon-5 {
  position: absolute;
  top: 383px;
  left: 245px;
}
#icon-6 {
  position: absolute;
  top: 415px;
  left: 173px;
}
#icon-7 {
  position: absolute;
  top: 383px;
  left: 101px;
}
#icon-8 {
  position: absolute;
  top: 333px;
  left: 61px;
}
#icon-9 {
  position: absolute;
  top: 275px;
  left: 41px;
}
#icon-10 {
  position: absolute;
  top: 210px;
  left: 61px;
}
#icon-11 {
  position: absolute;
  top: 159px;
  left: 101px;
}
</style>
