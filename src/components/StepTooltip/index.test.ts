import { describe, test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import StepTooltip from "./index.vue"


describe("StepTooltip", () => {
  describe("Props", () => {
    describe("Stepper", () => {
      test("受け取った値が画面に描画されていること", () => {
        const wrapper = mount(StepTooltip, {
          props: {
            index: 0,
            stepTitle: "testTitle",
            tooltipMessage: "testMessage"
          }
        })
        const stepTitle = wrapper.get('[data-test="step"]')
        expect(stepTitle.text()).toBe("testTitle")
      })
    })
    describe("Tooltip", () => {
      test("受け取った値が画面に描画されていること", () => {
        const wrapper = mount(StepTooltip, {
          props: {
            index: 0,
            stepTitle: "testTitle",
            tooltipMessage: "testMessage"
          }
        })
        const tooltipTitle = wrapper.get('[data-test="tooltip__content"]')
        expect(tooltipTitle.text()).toBe("testMessage")
      })
    })
  })
})
