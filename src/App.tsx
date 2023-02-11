import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router"

export const App = defineComponent({
  setup() {
    const count = ref(0)
    const onClick = () => count.value++
    return () => <>
      <div>
        <RouterView></RouterView>
      </div>
    </>
  }
})