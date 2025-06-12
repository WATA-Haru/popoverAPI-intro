<script setup lang="ts">
import StepTooltip from './components/StepTooltip/index.vue'

type data = {
  index: number
  stepTitle: string
  tooltipMessage: string
}

const stepItems: data[] = [
  {
    index: 0,
    stepTitle: 'Step1',
    tooltipMessage: '名前の入力aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
  {
    index: 1,
    stepTitle: 'Step2',
    tooltipMessage: '住所の入力',
  },
  {
    index: 2,
    stepTitle: 'Step3',
    tooltipMessage: '電話番号の入力',
  },
  {
    index: 3,
    stepTitle: 'Step4',
    tooltipMessage: '入力確認',
  },
]
</script>
<template>
  <body class="body">
    <ol class="stepper">
      <li v-for="item in stepItems" :key="item.index">
        <StepTooltip
          :index="item.index"
          :stepTitle="item.stepTitle"
          :tooltipMessage="item.tooltipMessage"
          class="step__item"
        />
      </li>
    </ol>
  </body>
</template>
<style lang="css" scoped>
.stepper {
  list-style-type: none;
  display: flex;
  gap: 30px;
}
.stepper__item {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.body {
  margin-top: 200px;
  margin-inline: auto;
}
</style>
