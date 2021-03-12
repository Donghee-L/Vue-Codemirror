<template>
  <div id="app">
    <Navbar />
    <h2>Write your markdown</h2>
    <Markdown />
    <h2>write code(using vue-codemirror)</h2>
    <MarkdownCode />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Markdown from "@/components/Markdown"
import MarkdownCode from "@/components/MarkdownCode"


export default {
  name: 'App',
  components: {
    Navbar,
    Markdown,
    MarkdownCode,

  }
}
</script>

<style>
:root {
  --mode-color: black;
  --mode-back-color: ivory;
  --mode-box-shadow: rgba(0, 0, 0, 0.623);
  --mode-editor-color: rgba(230, 224, 224, 0.719);
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition: 0.3s;
  background-color: var(--mode-back-color);
  height: 100vh;
}


#app > h2 {
  color: var(--mode-color);
  transition: 0.3s;
}




</style>
