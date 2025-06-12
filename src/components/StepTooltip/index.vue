<script setup lang="ts">
import { ref } from 'vue'

type Props = {
  index: number
  stepTitle: string
  tooltipMessage: string
}

const props = withDefaults(defineProps<Props>(), {
  index: 0,
  stepTitle: '',
  tooltipMessage: '',
})

/**
 * @description 一意の`anchor positioning`の名前をcss変数で設定
 */
const anchorName = ref(`--step-anchor-${props.index}`)

const tooltipRef = ref<HTMLDivElement | null>(null)

const showTooltipMessage = () => {
  if (!tooltipRef.value) {
    return
  }
  const tooltipElement = tooltipRef.value
  tooltipElement.showPopover()
}

const hideTooltipMessage = () => {
  if (!tooltipRef.value) {
    return
  }
  const tooltipElement = tooltipRef.value
  tooltipElement.hidePopover()
}
</script>
<template>
  <div class="container">
    <div
      :id="`tooltip-${String(props.index)}`"
      ref="tooltipRef"
      popover="auto"
      class="tooltip"
      data-test="tooltip"
    >
      <span class="tooltip__content" data-test="tooltip__content">
        {{ props.tooltipMessage }}
      </span>
    </div>
    <div
      class="step"
      :popovertarget="`tooltip`"
      @mouseover="showTooltipMessage"
      @mouseout="hideTooltipMessage"
      data-test="step"
    >
      {{ props.stepTitle }}
    </div>
  </div>
</template>
<style lang="css" scoped>
.container {
  --tooltip-square-size: 14px;
  --tooltip-width: 150px;
  --tooltip-height: 50px;
  --step-width: 150px;
  --step-height: 50px;
}
.step {
  /** anchor positioningの起点に設定 */
  anchor-name: v-bind(anchorName);

  /** boxサイズ指定 */
  min-width: var(--step-width);
  min-height: var(--step-height);

  /** box装飾*/
  background-color: var(--light-green);
  border: 1px solid var(--light-gray);
  font-size: var(--font-base-size);
  display: flex;
  justify-content: center;
  align-items: center;
}
.tooltip {
  /** anchor positioningで上に表示 */
  position-anchor: v-bind(anchorName);
  position-area: top center;
  bottom: anchor(top); /* 要素の下辺を、アンカー要素の上辺と同じ位置にする */

  /** boxのサイズ指定 */
  width: var(--tooltip-width);

  background-color: var(--light-pink);
  border: 0px solid var(--light-gray);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);

  margin-inline: 0;
  margin-top: 0;
  margin-bottom: calc(var(--tooltip-square-size) + 5px);
  text-align: center;

  /* 三角形作成のための設定 */
  position: relative;
  overflow: visible;
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%; /* ツールチップの下端に配置 */
  left: 50%; /* 横中央 */
  transform: translateX(-50%); /* 中心揃え */

  /* 下向きの矢印を borderで作成 */
  border-left: var(--tooltip-square-size) solid transparent;
  border-right: var(--tooltip-square-size) solid transparent;
  border-top: var(--tooltip-square-size) solid var(--light-pink);
  filter: drop-shadow(0 1mm 1mm var(--light-gray));
}

.tooltip__content {
  font-size: var(--font-tooltip-size);
  color: darkslategray;

  /** 吹き出しの文字を折り返す*/
  overflow-wrap: break-word;
}
</style>
