import HelloWorld from "../../src/components/HelloWorld.vue";

describe("<HelloWorld />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(HelloWorld, { props: { msg: "Hello Vitest" } }).then(
      ({ wrapper }) => {
        expect(wrapper.text()).to.contain("Hello Vitest");
      }
    );
  });
});
