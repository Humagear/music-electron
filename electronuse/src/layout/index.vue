<script setup>
import siderbar from '@/layout/components/siderbar/index.vue'
import Main from  '@/layout/components/main/index.vue'
import Header from '@/layout/components/header/index.vue'
import Floot from '@/layout/components/floot/index.vue'
</script>

<template>
  <div class="layout" >
    <n-layout has-sider >
      <n-layout-sider >
        <siderbar></siderbar>
      </n-layout-sider>
      <n-layout  >
        <n-layout-header >
          <Header></Header>
        </n-layout-header>
        <n-layout-content>
          <Main></Main>
        </n-layout-content>
        <n-layout-footer>
          <Floot></Floot>
        </n-layout-footer>
      </n-layout>
    </n-layout>
  </div>

</template>

<style scoped>
.layout{
  height: 100vh;
  background-color: aqua;
}
</style>
