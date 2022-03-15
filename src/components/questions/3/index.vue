<template>
<div>
  <ul v-if="users.lenght !== 0">
    <!-- FIXME: Vue не рекомендует использовать одновременно v-for и v-if, необходимо внести изменения-->
    <li
        v-for="user in users"
        :key="user.id"
    >
      {{ user.name }}
    </li>
  </ul>
  <div v-else>Список пуст</div>
</div>
</template>

<script>
export default {
  name: "UsersListVFor",
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'Nagibator2005',
          isActive: true,
        },
        {
          id: 2,
          name: 'Nagibator2006',
          isActive: false,
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
