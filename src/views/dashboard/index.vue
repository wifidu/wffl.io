<template>
  <div class="dashboard-container">
      <el-row>
        <el-col :span="2"><div class="block"><el-avatar shape="square" :size="100" :src="avatar"></el-avatar></div></el-col>
        <el-col :span="3"><div class="dashboard-text" style="margin-top: 50px"><i class="el-icon-s-custom"></i>{{ name }}</div></el-col>
      </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name', 'avatar'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
