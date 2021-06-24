<template>
  <div id="app">
    <Header />

    <main class="main">
      <SideBar />
      <TodoItems />
    </main>
    
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import SideBar from './components/SideBar.vue';
import TodoItems from './components/TodoItems.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    SideBar,
    Footer,
    TodoItems
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.main{
  display: grid;
  grid-template-columns: 1fr 7fr;
  grid-template-rows: 300px;
}
</style>
