import { onMounted, onBeforeUnmount } from 'vue'

export const useDocumentEvent = (eventName, eventHandler) => {
  onMounted(() => {
    document.addEventListener(eventName, eventHandler)
  })

  onBeforeUnmount(() => {
    document.removeEventListener(eventName, eventHandler)
  })
}
