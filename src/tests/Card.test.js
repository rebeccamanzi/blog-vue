import { mount } from "@vue/test-utils"
import Card from "../components/Card.vue"

test("mount component", async() => {
    expect(Card).toBeTruthy();

    const wrapper = mount(Card, {
        props: {
            title: "Hello from Vitest",
            body: "Lets check if this is working",
            postId: 3762
        }
    });

    expect(wrapper.text()).toContain("Hello from Vitest");
    expect(wrapper.text()).toContain("Lets check if this is working");    
});

test("button click", async() => {
    expect(Card).toBeTruthy();

    const wrapper = mount(Card, {
        props: {
            title: "Hello from Vitest",
            body: "Lets check if this is working",
            postId: 3762
        }
    });

    await wrapper.get("a").trigger("click");

    expect(wrapper.text()).toContain("See More");
});