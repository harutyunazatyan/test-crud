<template>
    <main>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <router-link exact-active-class="active" to="/tasks" class="nav-item nav-link">Tasks</router-link>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>