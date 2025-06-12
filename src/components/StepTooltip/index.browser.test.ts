import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StepTooltip from './index.vue'

describe('Event', () => {
  test('初期状態ではtooltipが表示されないこと', async () => {
    const wrapper = mount(StepTooltip, {
      attachTo: document.body,
      props: {
        index: 0,
        stepTitle: 'testTitle',
        tooltipMessage: 'testMessage',
      },
    })

    // Popoverが開いていることを確認
    expect(wrapper.find('[data-test="tooltip"]').element.matches(':popover-open')).toBe(false)
  })
  test('stepをマウスホバー時にtooltipが表示されること', async () => {
    const wrapper = mount(StepTooltip, {
      attachTo: document.body,
      props: {
        index: 0,
        stepTitle: 'testTitle',
        tooltipMessage: 'testMessage',
      },
    })

    const step = wrapper.get('[data-test="step"]')
    const tooltip = wrapper.get('[data-test="tooltip"]')
    await step.trigger('mouseover')

    // Popoverが開いていることを確認
    expect(tooltip.element.matches(':popover-open')).toBe(true)
  })
  test('マウスホバーの状態からマウスホバーが外れた場合、tooltipが表示されないこと', async () => {
    const wrapper = mount(StepTooltip, {
      attachTo: document.body,
      props: {
        index: 0,
        stepTitle: 'testTitle',
        tooltipMessage: 'testMessage',
      },
    })

    const step = wrapper.get('[data-test="step"]')
    const tooltip = wrapper.get('[data-test="tooltip"]')

    await step.trigger('mouseover')
    await step.trigger('mouseout')

    // Popoverが閉じていることを確認
    expect(tooltip.element.matches(':popover-open')).toBe(false)
  })
})
