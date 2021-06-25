<template>
  <div id="app">
    <Header />

    <main class="main">
      <SideBar />
      <TodoItemsList />
    </main>
    
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import SideBar from './components/SideBar.vue';
import TodoItemsList from './components/TodoItemsList.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    SideBar,
    Footer,
    TodoItemsList
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  position: relative;  
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.main{
  display: grid;
  grid-template-columns: 1fr 7fr;
  min-height: 90vh;
}
</style>
