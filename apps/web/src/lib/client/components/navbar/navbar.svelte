<script lang="ts">
  import { Logo } from "../logo";
  // import { useSideBar } from "$lib/stores";
  import Hamburger from "./hamburger.svelte";
  import NavLink from "./nav-link.svelte";
  import NavMenu from "./nav-menu.svelte";

  export let activeHref: string;
  // export let navItems: NavItem[];

  // const { isOpen: isSidebarOpen, open: openSidebar } = useSideBar()
</script>

<nav class='kai-navbar'>
  <!-- <div class="flex justify-between">
    <Logo />
    <Hamburger isOpen={$isSidebarOpen} {openSidebar} />
  </div>
  <NavMenu>
    {#each navItems as { href, label } (href)}
    <li>
      <NavLink active={activeHref === href} {href} {label} />
    </li>
    {/each}
  </NavMenu> -->
</nav>

<style lang="scss">
  .kai-navbar {
    width: 100%;
    @apply md:flex md:items-center md:justify-between;
  }
</style>