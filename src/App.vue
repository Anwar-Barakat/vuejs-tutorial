<script setup>
import { ref } from "vue";
import AttributeBinding from "./components/AttributeBinding.vue";
import ComputedComponent from "./components/ComputedComponent.vue";
import ConditionStatement from "./components/ConditionStatement.vue";
import EventHandling from "./components/EventHandling.vue";
import GlobalStyles from "./components/GlobalStyles.vue";
import LoopComponent from "./components/LoopComponent.vue";
import ModuleStyle from "./components/ModuleStyle.vue";
import NestedComponent from "./components/NestedComponent.vue";
import ReactiveComponent from "./components/ReactiveComponent.vue";
import Form2Component from "./components/Form2Component.vue";
import SlotComponent from "./components/SlotComponent.vue";
import ProvideComponent from "./components/ProvideComponent.vue";
import WatchComponent from "./components/WatchComponent.vue";
import MultipleSource from "./components/MultipleSource.vue";

// let count = ref(0);

// function formHandler(data) {
//   console.log(data);
// }
</script>
<template>
  <div>
    <!-- <GlobalStyles /> -->
    <!-- <NestedComponent /> -->
    <!-- <AttributeBinding /> -->
    <!-- <ModuleStyle /> -->
    <!-- <EventHandling  @incrementCounter="count++"/> -->
    <!-- <ReactiveComponent /> -->
    <!-- <ComputedComponent /> -->
    <!-- <ConditionStatement /> -->
    <!-- <LoopComponent /> -->
    <!-- <Form2Component @userInfo="formHandler"/> -->

    <!-- <SlotComponent>
      <template #header>
        <h1>Header</h1>
      </template>
      <template #body>
        <h1>Body</h1>
      </template>
    </SlotComponent> -->

    <!-- <ProvideComponent /> -->

    <!-- <WatchComponent /> -->
    <MultipleSource />
  </div>
</template>
<style scoped></style>
