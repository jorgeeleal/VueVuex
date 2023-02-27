<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header>
      <div class="container my-3">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container">
            <img src="./assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
            <a class="navbar-brand ms-2">Vuex</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page">
                    <RouterLink class="nav-link" to="/">Paises</RouterLink>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <RouterLink class="nav-link" to="/about">About</RouterLink>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

